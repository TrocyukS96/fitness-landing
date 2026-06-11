"use client";

import { sendContactForm, type ContactResponse } from "@/lib/api";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import styles from "./FooterForm.module.scss";

type FormData = { name: string; phone: string; message: string; };
type FormErrors = { name?: string; phone?: string; message?: string };

const FooterForm = ({ topic, onClose }: { topic?: string; onClose: () => void }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Enter your name";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must contain a minimum of 2 characters";
    } else if (formData.name.trim().length > 50) {
      newErrors.name = "Name must not exceed 50 characters";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Enter your phone";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Write a message";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Message must not exceed 1000 characters";
    }

    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      const firstError = Object.values(validationErrors)[0];
      if (firstError) {
        toast.error(firstError);
      }
      return;
    }

    setIsSubmitting(true);
    try {
      const result: ContactResponse = await sendContactForm({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        topic,
      });

      // Проверяем результат
      if (result.success) {
        toast.success(result.message || "Thank you! Message sent — I will contact you soon");
        setFormData({ name: "", message: "", phone: "" });
        setErrors({});
        onClose();
      } else {
        toast.error(result.error || "Error sending. Please try again later");
        console.error("Error sending form:", result);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("An unexpected error occurred. Please try again later");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.field}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name *"
          className={errors.name ? styles.inputError : styles.input}
          disabled={isSubmitting}
          maxLength={50}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone *"
          className={errors.phone ? styles.inputError : styles.input}
          disabled={isSubmitting}
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>

      <div className={styles.field}>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Your message... *"
          className={errors.message ? styles.textareaError : styles.textarea}
          disabled={isSubmitting}
          maxLength={1000}
        />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
        <div className={styles.charCounter}>
          {formData.message.length}/1000
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`${styles.submitBtn} ${isSubmitting ? styles.submitting : ''}`}
      >
        {isSubmitting ? (
          <>
            <span className={styles.spinner}></span>
            Sending...
          </>
        ) : (
          'Send message'
        )}
      </button>
    </form>
  );
};

export default FooterForm;