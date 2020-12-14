import AgoraRTC, {IAgoraRTCClient, IMicrophoneAudioTrack} from "agora-rtc-sdk-ng";
import {useCallback, useEffect, useRef} from "react";

export const useAgora = (groupId: string) => {
  const clientRef = useRef<IAgoraRTCClient>();
  const audioRef = useRef<IMicrophoneAudioTrack>();

  const initialize = useCallback(() => {
    if (!clientRef.current) {
      clientRef.current = AgoraRTC.createClient({ mode: "rtc", codec: "h264" });
    }
  }, []);

  const join = useCallback(async () => {
    if (!clientRef.current) {
      return;
    }

    await clientRef.current.join(process.env.AGORA_APP_ID, groupId, null, undefined);
  }, []);

  const publish = useCallback(async () => {
    if (!clientRef.current) {
      return;
    }

    const audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    await clientRef.current.publish([audioTrack]);

    audioRef.current = audioTrack;
    console.log("publish success!");
  }, []);

  const initializeSession = useCallback(() => {
    if (!clientRef.current) {
      return;
    }

    const client = clientRef.current;
    client.on("user-published", async (user, mediaType) => {
      await client?.subscribe(user, mediaType);
      console.log("subscribe success");

      if (mediaType === "audio") {
        const remoteAudioTrack = user.audioTrack;
        remoteAudioTrack?.play();
      }
    });
  }, []);

  useEffect(() => {
    const onStart = async () => {
      initialize();
      await join();
      await publish();
      initializeSession();
    };

    onStart().catch((e) => {
      console.error(e);
    });
  }, []);
};
