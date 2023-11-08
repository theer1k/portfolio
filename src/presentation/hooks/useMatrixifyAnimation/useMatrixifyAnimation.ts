import type { MutableRefObject } from 'react';
import { useEffect, useRef } from 'react';

export interface MatrixifyAnimationConfig {
  appendLettersSpeed: number;
  removeLettersSpeed: number;
  infinite: boolean;
  waitingTimeBeforeNextMessage: number;
  waitingTimeBeforeStartMessage: number;
  waitTimeBeforeNextMessageBeforeLoop: number;
}

const defaultConfig: MatrixifyAnimationConfig = {
  appendLettersSpeed: 50,
  removeLettersSpeed: 25,
  infinite: false,
  waitingTimeBeforeStartMessage: 300,
  waitingTimeBeforeNextMessage: 300,
  waitTimeBeforeNextMessageBeforeLoop: 5000,
};

export function useMatrixifyAnimation<T extends HTMLElementType>(
  messages: string[],
  config: Partial<MatrixifyAnimationConfig>,
  isTriggered = true,
): MutableRefObject<T | null> {
  const mergedConfig = { ...defaultConfig, ...config };
  const elementToAppendText: MutableRefObject<T | null> = useRef<T | null>(
    null,
  );

  let timeout: NodeJS.Timeout;
  let interval: NodeJS.Timeout;

  const watingTime = (milliseconds: number) => {
    return new Promise<void>((resolve) => {
      timeout = setTimeout(() => {
        resolve();
      }, milliseconds);
    });
  };

  const updateMessage = (text: string) => {
    if (elementToAppendText.current) {
      elementToAppendText.current.innerHTML = text;
    }
  };

  const appendLetters = async (message: string) => {
    return new Promise<void>((resolve) => {
      let currentLetterIndex = 0;

      interval = setInterval(() => {
        if (currentLetterIndex < message.length) {
          currentLetterIndex += 1;
          updateMessage(message.substring(0, currentLetterIndex));
        }

        if (currentLetterIndex === message.length) {
          resolve();
        }
      }, mergedConfig.appendLettersSpeed);
    });
  };

  const removeLetters = async (message: string) => {
    return new Promise<void>((resolve) => {
      let currentLetterIndex = message.length;

      interval = setInterval(() => {
        if (currentLetterIndex > 0) {
          currentLetterIndex -= 1;
          updateMessage(message.substring(0, currentLetterIndex));
        }
        if (currentLetterIndex === 0) {
          resolve();
        }
      }, mergedConfig.removeLettersSpeed);
    });
  };

  const cleanup = () => {
    clearTimeout(timeout);
    clearInterval(interval);

    if (elementToAppendText.current) {
      elementToAppendText.current.innerHTML = '&nbsp;';
    }
  };

  useEffect(() => {
    cleanup();

    if (isTriggered) {
      const matrixify = async () => {
        for await (const message of messages) {
          await watingTime(mergedConfig.waitingTimeBeforeStartMessage);
          clearTimeout(timeout);

          await appendLetters(message);
          clearInterval(interval);

          if (messages.indexOf(message) === messages.length - 1) {
            await watingTime(mergedConfig.waitTimeBeforeNextMessageBeforeLoop);
          } else {
            await watingTime(mergedConfig.waitingTimeBeforeNextMessage);
          }

          clearTimeout(timeout);

          if (mergedConfig.infinite) {
            await removeLetters(message);
            clearInterval(interval);
          }
        }

        if (mergedConfig.infinite) {
          matrixify();
        }
      };

      matrixify();
    }

    return () => {
      cleanup();
    };
  }, [isTriggered]);

  return elementToAppendText;
}
