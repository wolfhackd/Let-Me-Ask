/** biome-ignore-all lint/suspicious/noConsole: <onlydev> */
import { useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === 'function' &&
  typeof window.MediaRecorder === 'function';

type RoomParams = {
  roomId: string;
};

export function RecordRoomAudio() {
  const params = useParams<RoomParams>();
  const [isRecording, setIsRecording] = useState(false);
  const recorder = useRef<MediaRecorder | null>(null);
  const intervalRef = useRef<NodeJS.Timeout>(null);

  if (!params.roomId) {
    return <Navigate replace to="/" />;
  }

  function stopRecording() {
    setIsRecording(false);

    if (recorder.current && recorder?.current.state !== 'inactive') {
      recorder.current.stop();
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  async function uploadAudio(audio: Blob) {
    const formData = new FormData();
    formData.append('file', audio, 'audio.webm');

    const response = await fetch(
      `http://localhost:3333/rooms/${params.roomId}/audio`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const result = await response.json();
    console.log(result);
  }

  function createRecorder(audio: MediaStream) {
    recorder.current = new MediaRecorder(audio, {
      mimeType: 'audio/webm',
      audioBitsPerSecond: 64_000,
    });

    recorder.current.ondataavailable = (e) => {
      if (e.data.size > 0) {
        uploadAudio(e.data);
      }
    };

    recorder.current.onstart = () => {
      console.log('recorder started');
    };

    recorder.current.onstop = () => {
      console.log('recorder stopped');
    };

    recorder.current.start();
  }

  async function startRecording() {
    if (!isRecordingSupported) {
      alert('Seu navegador nao suporta gravacao');
      return;
    }

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    });

    createRecorder(audio);

    setIsRecording(true);

    intervalRef.current = setInterval(() => {
      recorder.current?.stop();

      createRecorder(audio);
    }, 5000);
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      {isRecording ? (
        <Button onClick={stopRecording}>Parar Gravação</Button>
      ) : (
        <Button onClick={startRecording}>Gravar Áudio</Button>
      )}
      {isRecording ? <p> Gravando...</p> : <p>Pausado</p>}
    </div>
  );
}
