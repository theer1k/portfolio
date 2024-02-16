import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { useMatrixifyAnimation } from '@/presentation/hooks/useMatrixifyAnimation';

export const LandingMatrixify = () => {
  const [dismissAllBlackIntroduction, setDismissAllBlackIntroduction] =
    useState(false);

  const messages = [
    'Wake up...',
    'Wake up...',
    'The Matrix has you.',
    'Follow the white rabbit.',
    'Knock, knock...',
  ];

  const elementToAppendText = useMatrixifyAnimation<HTMLDivElement>(messages, {
    appendLettersSpeed: 50,
    removeLettersSpeed: 25,
    waitingTimeBeforeNextMessage: 2750,
    waitTimeBeforeNextMessageBeforeLoop: 7500,
    infinite: true,
  });

  useEffect(() => {
    const dismissAllBlackIntroductionTimeoutId = window.setTimeout(() => {
      setDismissAllBlackIntroduction(!dismissAllBlackIntroduction);
      clearTimeout(dismissAllBlackIntroductionTimeoutId);
    }, 20000);

    return () => {
      clearTimeout(dismissAllBlackIntroductionTimeoutId);
    };
  }, []);

  return (
    <div
      id="matrixify"
      className="relative flex h-screen border-b-4 border-green-500"
    >
      <div
        className={`${dismissAllBlackIntroduction ? 'remove-from-back-to-top' : ''} landing-matrixify z-20`}
      ></div>
      <div
        className="absolute z-10 size-full bg-cover bg-local bg-center bg-no-repeat md:z-auto lg:bg-fixed"
        style={{
          backgroundImage: 'url(/images/source_codes.jpeg)',
          opacity: 0.5,
        }}
      ></div>
      <div className="hidden w-1/2 bg-black md:block"></div>
      <Image
        priority
        src="/images/indian_boy_landing.jpg"
        alt="Landing Matrixify"
        width={0}
        height={0}
        sizes="100vw"
        className="size-full object-cover md:w-1/2"
        style={{
          objectPosition: '0px 20%',
        }}
        quality={100}
      />
      <div
        ref={elementToAppendText}
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        className="absolute z-20 flex h-20 w-8/12 items-center justify-center rounded-md bg-black p-3 text-center text-xl font-bold text-green-500 hover:text-green-600 lg:w-1/4"
      ></div>
    </div>
  );
};
