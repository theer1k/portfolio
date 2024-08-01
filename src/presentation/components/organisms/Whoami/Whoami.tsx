import React, { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useMatrixifyAnimation } from '@/presentation/hooks/useMatrixifyAnimation';

const appendLettersSpeed = 15;
const removeLettersSpeed = 5;

export const Whoami = () => {
  const [allowScrolling, setAllowScrolling] = useState(false);
  const titleText = ['Whoami'];

  const { ref: refWhoamiTitle, inView: inViewWhoamiTitle } = useInView({
    threshold: 0.5,
    trackVisibility: true,
    delay: 100,
  });

  const elementToAppendTitle = useMatrixifyAnimation<HTMLHeadingElement>(
    titleText,
    {
      waitingTimeBeforeStartMessage: 0,
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 50,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewWhoamiTitle,
  );

  const setRefWhoamiTitle = useCallback(
    (node: any) => {
      elementToAppendTitle.current = node;
      refWhoamiTitle(node);
    },
    [refWhoamiTitle],
  );

  const { ref: refDescriptionBox, inView: inViewDescriptionBox } = useInView({
    threshold: 0.25,
    trackVisibility: true,
    delay: 100,
  });

  const preDescriptionText = ['Who I am?'];

  const { ref: refPreDescriptionDesktop, inView: inViewPreDescriptionDesktop } =
    useInView({
      threshold: 0,
      trackVisibility: true,
      delay: 100,
    });

  const elementToAppendPreDescriptionDesktop =
    useMatrixifyAnimation<HTMLHeadingElement>(
      preDescriptionText,
      {
        waitingTimeBeforeNextMessage: 0,
        appendLettersSpeed: 20,
        removeLettersSpeed: 5,
        infinite: false,
      },
      inViewPreDescriptionDesktop,
    );

  const setRefPreDescriptionDesktop = useCallback(
    (node: any) => {
      elementToAppendPreDescriptionDesktop.current = node;
      refPreDescriptionDesktop(node);
    },
    [refPreDescriptionDesktop],
  );

  const description = [
    `I am a professional with a robust background in frontend development and 5 years of experience as a software developer. I have had the opportunity to work on various high-impact projects across multiple industries, including healthcare, retail, and technology. Currently, I am a Senior Frontend Developer at Canon Medical Systems Brazil, where I work remotely.`,
    `I'd be delighted to connect and explore potential opportunities if you're seeking a passionate and proficient software developer who can deliver robust and efficient solutions. Let's create exceptional software together!`,
  ];

  const { ref: refDescriptionDesktop, inView: inViewDescriptionDesktop } =
    useInView({
      threshold: 0,
      trackVisibility: true,
      delay: 100,
    });

  const elementToAppendDescriptionDesktop =
    useMatrixifyAnimation<HTMLSpanElement>(
      description,
      {
        appendLettersSpeed,
        removeLettersSpeed,
        waitingTimeBeforeNextMessage: 7000,
        waitTimeBeforeNextMessageBeforeLoop: 6000,
        waitingTimeBeforeStartMessage: 150,

        infinite: true,
      },
      inViewDescriptionDesktop,
    );

  const setRefDescriptionDesktop = useCallback(
    (node: any) => {
      elementToAppendDescriptionDesktop.current = node;
      refDescriptionDesktop(node);
    },
    [refDescriptionDesktop],
  );

  const { ref: refDescriptionMobile, inView: inViewDescriptionMobile } =
    useInView({
      threshold: 0,
      trackVisibility: true,
      delay: 100,
    });

  const elementToAppendPreDescriptionMobile =
    useMatrixifyAnimation<HTMLHeadingElement>(
      preDescriptionText,
      {
        waitingTimeBeforeNextMessage: 0,
        appendLettersSpeed: 20,
        removeLettersSpeed: 5,
        infinite: false,
      },
      inViewDescriptionMobile,
    );

  const elementToAppendDescriptionMobile =
    useMatrixifyAnimation<HTMLSpanElement>(
      description,
      {
        appendLettersSpeed,
        removeLettersSpeed,
        waitingTimeBeforeNextMessage: 7000,
        waitTimeBeforeNextMessageBeforeLoop: 6000,
        infinite: true,
      },
      inViewDescriptionMobile,
    );

  useEffect(() => {
    const allowScrollingTimeoutId = window.setTimeout(() => {
      setAllowScrolling(!allowScrolling);
      clearTimeout(allowScrollingTimeoutId);
    }, 12000);

    return () => {
      clearTimeout(allowScrollingTimeoutId);
    };
  }, []);

  return (
    <>
      <div
        className={`${allowScrolling ? 'visible' : 'hidden'} relative h-60rem w-full border-b-4 border-green-500 bg-cover bg-top bg-no-repeat`}
        style={{
          backgroundImage: 'url(/images/me_playing_guitar.jpg)',
        }}
      >
        <h2
          ref={setRefWhoamiTitle}
          id="whoami"
          className="px-10 pt-6 text-2xl font-bold text-green-500 shadow-green-500 drop-shadow-ultra hover:text-green-600"
        ></h2>
        <div
          ref={refDescriptionBox}
          className="bottom-0 hidden h-60 w-full flex-col gap-4 overflow-hidden py-6 lg:absolute lg:flex"
        >
          <div
            style={{ opacity: 0.7 }}
            className="absolute bottom-0 size-full bg-black"
          ></div>
          <h2
            ref={setRefPreDescriptionDesktop}
            className={`${
              inViewDescriptionBox ? 'block' : 'hidden'
            } z-10 overflow-x-hidden px-10 pt-2 text-xl font-bold text-green-500`}
          ></h2>
          <span
            ref={setRefDescriptionDesktop}
            className={`${
              inViewDescriptionBox ? 'block' : 'hidden'
            } z-10 overflow-x-hidden px-10 text-xl text-green-500 shadow-green-500`}
          ></span>
        </div>
      </div>
      <div
        ref={refDescriptionMobile}
        className={`${allowScrolling ? 'visible' : 'hidden'} bottom-0 flex size-full min-h-25rem flex-col gap-4 overflow-x-hidden border-b-4 border-green-500 py-6 lg:hidden`}
      >
        <h2
          ref={elementToAppendPreDescriptionMobile}
          className={`${
            inViewDescriptionMobile ? 'block' : 'hidden'
          } z-10 overflow-x-hidden px-10 pt-2 text-center text-2xl font-bold text-green-500`}
        ></h2>
        <span
          ref={elementToAppendDescriptionMobile}
          className={`${
            inViewDescriptionMobile ? 'block' : 'hidden'
          } z-10 overflow-x-hidden px-10 pb-4 text-center text-xl text-green-500 shadow-green-500`}
        ></span>
      </div>
    </>
  );
};
