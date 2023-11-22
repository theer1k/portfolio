import Image from 'next/image';
import React from 'react';

import { useMatrixifyAnimation } from '@/presentation/hooks/useMatrixifyAnimation';

export const LandingMatrixify = () => {
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

  return (
    <div className="relative flex border-b-4 border-green-500">
      <div
        className="absolute z-10 h-full w-full bg-cover bg-local bg-center bg-no-repeat md:z-auto lg:bg-fixed"
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
        className="w-full object-cover md:w-1/2"
        style={{
          height: '700px',
          objectPosition: '0px 20%',
        }}
        quality={100}
      />
      <div
        ref={elementToAppendText}
        style={{
          opacity: 0.9,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        className="absolute z-20 flex h-28 w-10/12 items-center justify-center rounded-md bg-black p-4 text-center text-2xl font-bold text-green-500 hover:text-green-600 md:z-auto lg:w-3/5 xl:w-1/3"
      ></div>
    </div>
  );
};
