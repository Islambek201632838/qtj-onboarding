import api from './api';

export interface IChatMessage {
  content: string;
  type: 'ai' | 'human';
}

export interface IChatResponse {
  response: string;
  chat_history: IChatMessage[];
}

export interface IChartStartResponse {
  welcome_message: string;
  popular_questions: {
    string: string[];
  };
}

export const getChatResponse = (question: string, audioBlob?: Blob | null): Promise<IChatResponse> => {
  const formData = new FormData();
  formData.append('question', question);

  if (audioBlob) {
    formData.append('audio', audioBlob, 'voice.webm');
  }
  return api.post(`/onboarding/query?question=${question}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getChartStart = (): Promise<IChartStartResponse> => {
  return api.get(`/onboarding/start`);
};

export const deleteChatHistory = () => {
  return api.post(`/onboarding/delete_chat_history`);
};
