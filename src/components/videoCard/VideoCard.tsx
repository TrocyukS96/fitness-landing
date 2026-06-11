"use client";
import React, { useState } from "react";
import styles from "./VideoCard.module.scss";
import PlayInitIcon from "../icons/PlayInitIcon";
import { Modal } from "../modal/Modal";

interface VideoCardProps {
  videoUrl: string;
  title: string;
  description: string;
  duration?: string;
  date?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  videoUrl,
  title,
  description,
  date,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getVideoId(videoUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {date && <p className={styles.date}>{date}</p>}
        {description && <p className={styles.description}>{description}</p>}
      </div>
      <div
        className={styles.playContainer}
        onClick={() => setIsModalOpen(true)}
      >
        <PlayInitIcon/>
      </div>

      <Modal
        isOpen={isModalOpen}
        className={styles.modal}
        isCancelIcon={true}
        onClose={() => setIsModalOpen(false)}
        width="90vw"
        height="auto"
        maxHeight="90vh"
        padding="20px"
        modalBackgroundColor="#000" // Черный фон лучше для видео
        overlayBlur={true} // Размытие фона
      >
        <div 
          className={styles.videoContainer}
          onContextMenu={(e) => e.preventDefault()} // Блокировка правого клика
        >
          {videoId ? (
            <iframe
              src={embedUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.videoIframe}
              title="Video player"
              // Дополнительные атрибуты для защиты
              sandbox="allow-scripts allow-same-origin allow-presentation"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className={styles.protectedVideoContainer}>
              <video
                controls
                autoPlay
                className={styles.videoElement}
                playsInline
                // Атрибуты для защиты от скачивания
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Наложение для блокировки правого клика */}
              <div className={styles.videoOverlay} />
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default VideoCard;