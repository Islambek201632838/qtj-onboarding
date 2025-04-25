import React, { useState, useRef } from 'react';
import { Mic, CircleStop } from 'lucide-react';

const AudioRecorder = ({
  handleSendMessage,
  handleRecording,
}: {
  handleSendMessage: (audioFile: Blob) => void;
  handleRecording: (v: boolean) => void;
}) => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        handleSendMessage(audioBlob);
      };

      mediaRecorder.start();
      setIsRecording(true);
      handleRecording(true);
    } catch (err) {
      console.error('Microphone access denied or error:', err);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
    handleRecording(false);
  };

  return (
    <div className="p-4 border rounded-lg max-w-md mx-auto text-center space-y-4">
      <button
        onClick={isRecording ? stopRecording : startRecording}
        className={`px-4 py-2 rounded-md text-white ${isRecording ? 'bg-red-500' : 'bg-green-500'}`}
      >
        {isRecording ? <CircleStop /> : <Mic />}
      </button>
    </div>
  );
};

export default AudioRecorder;
