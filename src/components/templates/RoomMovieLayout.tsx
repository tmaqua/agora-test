import React from "react";
import { Youtube } from "../atoms/Youtube";
import styles from "./RoomMovieLayout.module.scss";

export const RoomMovieLayout: React.FC = () => {
  return (
    <>
      <div className={styles.frame}>
        <div className={styles.youtubePlayerWrapper}>
          <Youtube
            youtubeLink={"https://vimeo.com/465692892"}
            className={styles.youtubePlayer}
            width="100%"
            height="100%"
            autoplay={false}
            showControlPanel={true}
          />
        </div>
      </div>
    </>
  );
};
