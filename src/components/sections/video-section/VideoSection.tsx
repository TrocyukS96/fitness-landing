import React, { useEffect, useRef, useState } from "react";
import styles from "./VideoSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { SectionTypes } from "@/types";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((error) => {
        console.error("Playback failed:", error);
        setHasError(true);
        videoRef.current!.controls = true;
      });
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleLoadedData = () => setIsLoading(false);
    const handleError = () => setHasError(true);

    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('pause', handlePause);
    videoElement.addEventListener('loadeddata', handleLoadedData);
    videoElement.addEventListener('error', handleError);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!videoElement.querySelector("source")) {
              const source = document.createElement("source");
              source.src = "/videoBlock.webm";
              source.type = "video/webm";
              videoElement.appendChild(source);
              videoElement.load();
            }
            videoElement.play().catch((error) => {
              console.warn("Autoplay prevented:", error);
              videoElement.controls = true;
            });
          } else {
            videoElement.pause();
          }
        });
      },
      {
        rootMargin: "200px",
        threshold: 0.1,
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
      videoElement.pause();
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('pause', handlePause);
      videoElement.removeEventListener('loadeddata', handleLoadedData);
      videoElement.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <section
      className={styles.section}
      ref={sectionRef}
      id={SectionTypes.CONTACTS}
    >
      <div className={styles.container}>
        <div className={styles.videoContainer}>
          {isLoading && !hasError && (
            <div className={styles.loader}>
              <div className={styles.spinner} />
            </div>
          )}

          <video
            ref={videoRef}
            className={styles.video}
            loop
            muted
            playsInline
            preload="metadata"
            poster="/video-image.webp"
            disablePictureInPicture
            disableRemotePlayback
          >
          </video>

          {!hasError && (
            <button
              className={`${styles.playButton} ${isPlaying ? styles.playing : ''}`}
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              aria-pressed={isPlaying}
              disabled={isLoading}
            >
              {isPlaying ? (
                <>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <polygon points="5,4 19,12 5,20" />
                  </svg>
                </>
              )}
            </button>
          )}

          {hasError && (
            <div className={styles.errorMessage}>
              Video playback unavailable. Please try again later.
            </div>
          )}
        </div>

        <div className={styles.content}>
          <div className={styles.quote}>
            <p className={styles.contentTitle}>
              I don&apos;t care about your health!
            </p>
            <p className={styles.author}>— Kirill Polovtsev</p>
          </div>

          <div className={styles.social}>
            <div className={styles.follow}>
              <span>Follow me:</span>
              <div className={styles.iconsList}>
                <Link
                  href="https://www.instagram.com/polovtsevfit"
                  target="_blank"
                  aria-label="Instagram"
                  prefetch={false}
                >
                  <div className={styles.iconWrap}>
                    <Image
                      width={20}
                      height={20}
                      src="/videoBlock/instagram.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  </div>
                </Link>
                <Link
                  href="https://t.me/polovtsevfit"
                  target="_blank"
                  aria-label="Telegram"
                  prefetch={false}
                >
                  <div className={styles.iconWrap}>
                    <Image
                      width={20}
                      height={20}
                      src="/videoBlock/telegram.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  </div>
                </Link>
                <Link
                  href="https://wa.me/79938830502"
                  target="_blank"
                  aria-label="WhatsApp"
                  prefetch={false}
                >
                  <div className={styles.iconWrap}>
                    <Image
                      width={20}
                      height={20}
                      src="/videoBlock/whatsapp.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </div>
            </div>

            <div className={styles.marquee}>
              <Marquee
                speed={40}
                gradient
                gradientColor="0, 0, 0"
                gradientWidth={100}
                pauseOnHover={false}
              >
                <span className={styles.marqueeText}>
                  SECRET OF EASE - IN THE SIMPLICITY OF MOVEMENTS SECRET OF EASE - IN THE SIMPLICITY OF MOVEMENTS SECRET OF EASE - IN THE SIMPLICITY OF MOVEMENTS
                </span>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;