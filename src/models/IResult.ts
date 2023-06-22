export interface IResults {
  question: number;
  stats: { [key: string]: number };
  currentAnswers: { [key: string]: boolean };
  isSubscriber: { [key: string]: boolean };
  fastestPlayer?: {
    username: string;
    time: number;
  };
  laziestPlayer?: {
    username: string;
    time: number;
  };
  currentTimestamp: number;
}

export interface IAnswerPayload {
  username: string;
  answer: boolean;
  isSubscriber: boolean;
}
