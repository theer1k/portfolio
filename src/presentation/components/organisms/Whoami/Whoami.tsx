import React, { useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

import { useMatrixifyAnimation } from '@/presentation/hooks/useMatrixifyAnimation/useMatrixifyAnimation';

export const Whoami = () => {
  const titleText = ['Whoami'];

  const { ref: refWhoamiTitle, inView: inViewWhoamiTitle } = useInView({
    threshold: 1,
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

  const preDescriptionText = ['Who The Hell Am I?'];

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

  const appendLettersSpeed = 10;
  const removeLettersSpeed = 2;

  const description = [
    'As a dedicated and highly skilled software engineer, I bring a wealth of experience and expertise in building cutting-edge web applications and digital solutions. My passion for web development and continuous learning has led me to excel in a wide range of technologies and methodologies. <br/><br/> With a strong foundation in both front-end and back-end development, I am committed to delivering high-quality, performant, and scalable software solutions.',
    `When I'm not weaving code spells, I'm strumming the electric guitar, indulging in my passion for music. So that's a bit about me - a software engineer with a love for technology, and a musical side eager for learning new things.`,
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
        waitingTimeBeforeNextMessage: 14000,
        waitTimeBeforeNextMessageBeforeLoop: 12000,
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

  const elementToAppendDescriptionMobile =
    useMatrixifyAnimation<HTMLSpanElement>(
      description,
      {
        appendLettersSpeed,
        removeLettersSpeed,
        waitingTimeBeforeNextMessage: 14000,
        waitTimeBeforeNextMessageBeforeLoop: 12000,
        infinite: true,
      },
      inViewDescriptionMobile,
    );

  const elementToAppendPreDescriptionMobile =
    useMatrixifyAnimation<HTMLHeadingElement>(
      preDescriptionText,
      {
        appendLettersSpeed: 20,
        removeLettersSpeed: 5,
        infinite: false,
      },
      inViewDescriptionMobile,
    );

  return (
    <>
      <div
        className="relative  h-60rem w-full border-b-4 border-green-500 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/me_playing_guitar.jpg)',
        }}
      >
        <h2
          ref={setRefWhoamiTitle}
          id="whoami"
          className="px-10 pt-6 text-4xl font-bold text-green-500 shadow-green-500 drop-shadow-ultra hover:text-green-600"
        ></h2>
        <div className="bottom-0 hidden h-96 w-full flex-col gap-4 overflow-hidden py-6 lg:absolute lg:flex">
          <div
            style={{ opacity: 0.7 }}
            className="absolute bottom-0 h-full w-full bg-black"
          ></div>
          <h2
            ref={setRefPreDescriptionDesktop}
            className={`${
              !inViewWhoamiTitle ? 'block' : 'hidden'
            } z-10 animate-fade-right-to-left overflow-x-hidden px-10 pb-4 pt-6 text-2xl font-bold text-green-500`}
          ></h2>
          <span
            ref={setRefDescriptionDesktop}
            className={`${
              !inViewWhoamiTitle ? 'block' : 'hidden'
            } z-10 animate-fade-right-to-left-longer overflow-x-hidden px-10 text-2xl text-green-500 shadow-green-500`}
          ></span>
        </div>
      </div>
      <div
        ref={refDescriptionMobile}
        className="bottom-0 flex h-full min-h-45rem w-full flex-col gap-4 overflow-x-hidden border-b-4 border-green-500 py-6 lg:hidden"
      >
        <h2
          ref={elementToAppendPreDescriptionMobile}
          className={`${
            inViewDescriptionMobile ? 'block' : 'hidden'
          } z-10 animate-fade-bottom-to-top overflow-x-hidden px-10 pb-4 pt-6 text-center text-4xl font-bold text-green-500 lg:animate-fade-right-to-left`}
        ></h2>
        <span
          ref={elementToAppendDescriptionMobile}
          className={`${
            inViewDescriptionMobile ? 'block' : 'hidden'
          } z-10 animate-fade-bottom-to-top overflow-x-hidden px-10 pb-6 text-center text-2xl text-green-500 shadow-green-500 lg:animate-fade-right-to-left-longer`}
        ></span>
      </div>
    </>
  );
};
