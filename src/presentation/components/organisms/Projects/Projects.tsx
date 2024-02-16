import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useMatrixifyAnimation } from '@/presentation/hooks/useMatrixifyAnimation';

export const Projects = () => {
  const [allowScrolling, setAllowScrolling] = useState(false);
  const projectsText = ['Projects'];

  const { ref: refTitle, inView: inViewTitle } = useInView({
    threshold: 0.5,
    trackVisibility: true,
    delay: 100,
  });

  const elementToAppendTitle = useMatrixifyAnimation<HTMLHeadingElement>(
    projectsText,
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 50,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  useEffect(() => {
    const allowScrollingTimeoutId = window.setTimeout(() => {
      setAllowScrolling(!allowScrolling);
      clearTimeout(allowScrollingTimeoutId);
    }, 20000);

    return () => {
      clearTimeout(allowScrollingTimeoutId);
    };
  }, []);

  return (
    <div
      ref={refTitle}
      className={`${allowScrolling ? 'visible' : 'hidden'} relative w-full border-b-4 border-green-500 bg-white px-10 py-6`}
    >
      <h2
        ref={elementToAppendTitle}
        id="projects"
        className="text-center text-2xl font-bold text-green-500 hover:text-green-600 lg:text-left"
      ></h2>

      <div className="flex flex-wrap justify-center gap-8 py-8 md:justify-normal">
        <a
          aria-label="Visit Nike Stores Finder"
          href="https://nike-stores-finder.netlify.app/"
          target="_blank"
          className={`${
            inViewTitle
              ? 'visible animate-fade-bottom-to-top lg:animate-fade-right-to-left'
              : 'invisible'
          } flex h-48 w-60 flex-col items-center rounded-lg border border-gray-200 bg-white bg-cover bg-center bg-no-repeat shadow-2xl hover:bg-gray-100`}
          style={{
            backgroundImage: 'url(/images/nike-stores-finder.netlify.app_.png)',
          }}
        ></a>
      </div>
    </div>
  );
};
