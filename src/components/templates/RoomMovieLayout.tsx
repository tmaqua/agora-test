import React from "react";
import { Youtube } from "../atoms/Youtube";
import styles from "./RoomMovieLayout.module.scss";
import { useAgora } from "../../modules/agora";

type Props = {
  groupId: string;
}

export const RoomMovieLayout: React.FC<Props> = ({ groupId }) => {
  useAgora(groupId);

  return (
    <>
      <div className={styles.frame}>
        <div className={styles.youtubePlayerWrapper}>
          <Youtube
            youtubeLink={"https://www.youtube.com/watch?v=coYw-eVU0Ks"}
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
