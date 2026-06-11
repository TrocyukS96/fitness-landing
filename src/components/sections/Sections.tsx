"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { LoadingSkeleton } from "../loading-skeleton/LoadingSkeleton";
import { motion, Variants } from "framer-motion";

// Анимационные настройки
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const HeroSection = dynamic(
  () => import("./hero-section/HeroSection").then((mod) => mod.HeroSection),
  {
    loading: () => <LoadingSkeleton height="100vh" />,
  }
);

const DreamSection = dynamic(
  () => import("./services-section/ServicesSection").then((mod) => mod.default),
  {
    loading: () => <LoadingSkeleton height="80vh" />,
    ssr:false,
  }
);

const AboutSection = dynamic(
  () => import("./about-section/AboutSection").then((mod) => mod.AboutSection),
  {
    loading: () => <LoadingSkeleton height="70vh" />,
    ssr:false,
  }
);

const VideoSection = dynamic(
  () => import("./video-section/VideoSection").then((mod) => mod.default),
  {
    loading: () => <LoadingSkeleton height="200px" />,
    ssr:false,
  }
);

const FeedbackSection = dynamic(
  () => import("./feedback-section/FeedbackSection").then((mod) => mod.default),
  {
    loading: () => <LoadingSkeleton height="200px" />,
    ssr:false,
  }
);

// const PackagesSection = dynamic(
//   () => import("./packages-section/PackagesSection").then((mod) => mod.default),
//   {
//     loading: () => <LoadingSkeleton height="200px" />,
//     ssr:false,
//   }
// );

const FAQSection = dynamic(
  () => import("./faq-section/FAQSection").then((mod) => mod.FAQSection),
  {
    loading: () => <LoadingSkeleton height="200px" />,
    ssr:false,
  }
);

const FreeTrialSection = dynamic(
  () => import("./free-trial-section/FreeTrialSection").then((mod) => mod.FreeTrialSection),
  {
    loading: () => <LoadingSkeleton height="200px" />,
    ssr:false,
  }
);

export const Sections = () => {
  return (
    <>
      <HeroSection />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={sectionVariants}
      >
        <Suspense fallback={<LoadingSkeleton height="200px" />}>
          <DreamSection />
        </Suspense>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={sectionVariants}
      >
        <Suspense fallback={<LoadingSkeleton height="200px" />}>
          <AboutSection />
        </Suspense>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={sectionVariants}
      >
        <Suspense fallback={<LoadingSkeleton height="200px" />}>
          <VideoSection />
        </Suspense>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={sectionVariants}
      >
        <Suspense fallback={<LoadingSkeleton height="200px" />}>
          <FeedbackSection />
        </Suspense>
      </motion.div>

      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={sectionVariants}
      >
        <Suspense fallback={<LoadingSkeleton height="200px" />}>
          <PackagesSection />
        </Suspense>
      </motion.div> */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={sectionVariants}
      >
        <Suspense fallback={<LoadingSkeleton height="200px" />}>
          <FreeTrialSection />
        </Suspense>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={sectionVariants}
      >
        <Suspense fallback={<LoadingSkeleton height="200px" />}>
          <FAQSection />
        </Suspense>
      </motion.div>
    </>
  );
};
