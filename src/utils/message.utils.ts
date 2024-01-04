import { iMessage } from "../interfaces/iMessage";

export const MessageUtils = (
  error: boolean,
  statusCode: number,
  message: string,
  payload?: any | any[]
): iMessage => {
  return {
    error,
    statusCode,
    message,
    payload,
  };
};
