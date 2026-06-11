"use client";
import MessageModal from "@/components/message-modal/MessageModal";
import Title from "@/components/title/Title";
import { SectionTypes } from "@/types";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import ServicesCard from "./service-card/ServicesCard";
import styles from "./ServicesSection.module.scss";
import SliderButtons from "./SliderButtons";
import { IServiceCard } from "./types";
import PaymentStepsModal from "@/components/payment-steps-modal/PaymentStepsModal";

const cardsData: IServiceCard[] = [
  {
    id: 1,
    title: "Personal training",
    description:
      "Personal training, aimed at restoring mobility and strengthening the body.",
    image: "/services/personal.webp",
  },
  {
    id: 2,
    title: "Massage services with home visits",
    description:
      "Relieves pain, relaxes, improves mobility and circulation. Rapid recovery of the body and spirit.",
    image: "/services/massage.jpg",
  },
  {
    id: 4,
    title: "Online training",
    description:
      "Individual online training by the Pilates method with an individual approach.",
    image: "/services/pilates.png",
  },
];

const ServicesSection = () => {
  const [isShowSlides, setIsShowSlides] = useState(false);
  const [topic, setTopic] = useState("");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
  });
  const [messageTrigger, setMessageTrigger] = useState(0);
  const [isOpenTariffModal, setIsOpenTariffModal] = useState(false);

  const handleTriggerModal = (value: string) => {
    if (value !== "Home Pilates lessons") {
      setTopic(value);
      setMessageTrigger((prev) => prev + 1);
    } else {
      setIsOpenTariffModal(prev=>(!prev))
    }
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const checkScreen = () => {
      setIsShowSlides(window.innerWidth <= 1800);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className={styles.section} id={SectionTypes.SERVICES}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Title value="Choose format" type="section" />
          {isShowSlides && (
            <SliderButtons
              onScrollPrev={scrollPrev}
              onScrollNext={scrollNext}
            />
          )}
        </div>
        {isShowSlides ? (
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {cardsData.map((card) => (
                <div key={card.id} className={styles.emblaSlide}>
                  <ServicesCard card={card} onClick={handleTriggerModal} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <ul className={styles.list}>
            {cardsData.map((card) => (
              <ServicesCard
                key={card.id}
                card={card}
                onClick={handleTriggerModal}
              />
            ))}
          </ul>
        )}
        <SliderButtons
          className={styles.emblaButtonsMobile}
          onScrollPrev={scrollPrev}
          onScrollNext={scrollNext}
        />
      </div>
      <MessageModal trigger={messageTrigger} topic={topic} />
      <PaymentStepsModal
        isOpen={isOpenTariffModal}
        closeModal={()=>setIsOpenTariffModal(false)}
      />
    </section>
  );
};

export default ServicesSection;
