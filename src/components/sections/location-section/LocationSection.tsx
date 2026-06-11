import cn from "classnames";
import Image from "next/image";
import st from "../../../styles/app/MainPage.module.scss";
import stc from "../../../styles/app/components.module.scss";
import styles from "./LocationSection.module.scss";
import Input from "@/components/input/Input";
import Textarea from "@/components/textare/Textarea";
import { useState } from "react";
import Button from "@/components/button/Button";

const LocationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Разрешаем только цифры, + в начале и пробелы
    if (/^[+]?[0-9\s]*$/.test(value) || value === "") {
      setFormData({ ...formData, phone: value });
      setErrors({ ...errors, phone: "" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
      valid = false;
    } else if (!/^[+][0-9\s]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number (starts with +)";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section className={cn(styles.wrapper, st.Section)}>
      <div className={cn(stc.Wrapper, styles.content)}>
        <div className={styles.formBlock}>
          <h2 className={styles.title}>
            Don&apos;t wait for Monday — sign up for a workout TODAY!
          </h2>
          <form>
            <div className={styles.formGroup}>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                onChange={handleChange}
                className={errors.name ? styles.errorInput : ''}
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>
            <div className={styles.formGroup}>
              <Input
                id="phone"
                name="phone"
                placeholder="Phone number"
                onChange={handlePhoneChange}
                className={errors.phone ? styles.errorInput : ''}
              />
              {errors.phone && <span className={styles.error}>{errors.phone}</span>}
            </div>
            <div className={cn(styles.formGroup, styles.lastFormGorup)}>
              <Textarea
                name="message"
                onChange={handleChange}
                value={formData.message}
                placeholder="Message"
                className={errors.message ? styles.errorInput : ''}
              />
              {errors.message && <span className={styles.error}>{errors.message}</span>}
            </div>

            <Button type="submit" onClick={handleSubmit}>
              Send
            </Button>
          </form>
        </div>
        <Image
          className={styles.img}
          src={"/location-image.png"}
          width={540}
          height={546}
          alt="contact icon"
        />
      </div>
    </section>
  );
};

export default LocationSection;
