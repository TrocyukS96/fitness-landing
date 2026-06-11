import { API_BASE_URL } from "@/constants/constants";
import { PackageType } from "@/types";
import { coursesData } from "@/utils/courses-data";
import { useState } from "react";
import toast from "react-hot-toast";

interface TariffType {
    type: PackageType,
    sum: number,
}

export const useCoursePay = () => {
    const [loading, setLoading] = useState(false)

    const pay = async (data: {
        courseIndex: number,
        paymentData: TariffType
    }) => {
        setLoading(true);

        const getCourseServerId = (courseId: number) => {
            return courseId
        }

        try {
            const response = await fetch(`${API_BASE_URL}/payment/alfa/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Authorization: `Bearer ${token}`,
                    'User-Agent': 'Mozilla/5.0 (compatible; PolovtsevApp/1.0)', // Имитация браузера
                },
                body: JSON.stringify({
                    amount: data.paymentData.sum, // 129.86 или 286.98
                    currency: '933',
                    description: `payment: ${data.paymentData.type === 'base' ? 'Basic' : 'Premium'} plan. Course - ${coursesData[data.courseIndex || 0]?.modalTitle}`,
                    language: 'ru',
                    // userId: user?.id || '',
                    courseId: getCourseServerId(coursesData[data.courseIndex || 0]?.id),
                    paymentType: "COURSE"
                }),
            });

            const result = await response.json();
            if (result.success && result?.data?.alfaOrder?.formUrl) {
                window.location.href = result.data.alfaOrder.formUrl;
            } else {
                toast.error(result.message || result.data.errorMessage);
            }
        } catch (err) {
            console.error('Error:', err);
            toast.error('Network error. Please try again later.');
        } finally {
            setLoading(false);
        }
    }

    return { pay, isLoading: loading }

}