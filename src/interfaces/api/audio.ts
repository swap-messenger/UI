import { IAudioMessage } from "src/models/audio";

export interface IAPIAudio {
  Get: (id: number) => void;
  Upload: (file: IAudioMessage,
           answer: (file: IAudioMessage, err: boolean) => void,
           progress: (uploadedSize: number) => void) => void;
  Delete: (file: IAudioMessage) => void;
}
