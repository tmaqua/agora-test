import React from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";

type Props = Omit<ReactPlayerProps, "url" | "config" | "playing"> & {
  youtubeLink: string;
  showControlPanel?: boolean; //コントローラーパネル表示(非表示: 0, 表示: 1)
  showYoutubeLogo?: boolean; //右下のyoutubeロゴ非表示(表示: 0, 非表示: 1)
  autoplay?: boolean; //自動再生(off: false, on: true)
  fullScreen?: boolean; //フルスクリーンボタン表示(非表示: 0, 表示: 1)
  startSeconds?: number; //再生開始地点設定(seconds)
};

export const Youtube: React.FC<Props> = ({
  youtubeLink,
  showControlPanel = false,
  showYoutubeLogo = false,
  autoplay = false,
  fullScreen = false,
  startSeconds = 0,
  ...rest
}) => {
  return (
    <ReactPlayer
      url={youtubeLink}
      config={{
        vimeo: {
          playerOptions: {
            controls: showControlPanel ? 1 : 0,
            modestbranding: showYoutubeLogo ? 1 : 0,
            fs: fullScreen ? 1 : 0,
            start: startSeconds,
            showinfo: 1,
          },
        },
      }}
      playing={autoplay}
      {...rest}
    />
  );
};
