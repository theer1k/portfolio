'use client';

import { Bars4Icon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

import { useMatrixifyAnimation } from '@/presentation/hooks/useMatrixifyAnimation';

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLandingMatrixyFinished, setIsLandingMatrixyFinished] =
    useState(false);

  const toggleIsMobileNavOpen = useCallback(() => {
    setIsMobileNavOpen(!isMobileNavOpen);
  }, [isMobileNavOpen]);

  const whoamiText = ['Whoami'];

  const elementToAppendWhoamiText = useMatrixifyAnimation<HTMLDivElement>(
    whoamiText,
    {
      appendLettersSpeed: 50,
      waitingTimeBeforeStartMessage: 20250,
      infinite: false,
    },
  );

  const projectsText = ['Projects'];

  const elementToAppendProjectsText = useMatrixifyAnimation<HTMLDivElement>(
    projectsText,
    {
      appendLettersSpeed: 50,
      waitingTimeBeforeStartMessage: 20500,
      infinite: false,
    },
  );

  const experiencesText = ['Experiences'];

  const elementToAppendExperiencesText = useMatrixifyAnimation<HTMLDivElement>(
    experiencesText,
    {
      appendLettersSpeed: 50,
      waitingTimeBeforeStartMessage: 20750,
      infinite: false,
    },
  );

  const blogText = ['Blog'];

  const elementToAppendBlogText = useMatrixifyAnimation<HTMLDivElement>(
    blogText,
    {
      appendLettersSpeed: 50,
      waitingTimeBeforeStartMessage: 21000,
      infinite: false,
    },
  );

  const skillsetToolsText = ['Skillset/tools'];

  const elementToAppendSkillsetToolsText =
    useMatrixifyAnimation<HTMLDivElement>(skillsetToolsText, {
      appendLettersSpeed: 50,
      waitingTimeBeforeStartMessage: 21250,
      infinite: false,
    });

  const hireMeText = ['Hire me :)'];

  const elementToAppendHireMeText = useMatrixifyAnimation<HTMLDivElement>(
    hireMeText,
    {
      appendLettersSpeed: 50,
      waitingTimeBeforeStartMessage: 21500,
      infinite: false,
    },
  );

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsLandingMatrixyFinished(true);
      clearTimeout(timeoutId);
    }, 20250);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const openInNewTab = useCallback((url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  }, []);

  return (
    <header>
      <nav
        className={`${isLandingMatrixyFinished ? 'z-30' : 'z-20'} fixed top-0 w-full border-b-4 border-green-500 bg-black px-6 py-4 dark:border-gray-700 dark:bg-gray-800`}
      >
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <a className="flex items-center" href="https://indianboy.com.br/">
            <Image
              alt="Neo Glasses Matrix"
              fetchPriority="high"
              width="0"
              height="0"
              decoding="async"
              data-nimg="1"
              className="w-20 md:w-24"
              style={{ color: 'transparent', height: 'auto' }}
              src="/svgs/neo-glasses-matrix.svg"
            />
          </a>
          <button
            data-testid="flowbite-navbar-toggle"
            className="ring:border-green-500 inline-flex items-center rounded-lg bg-transparent p-2 text-sm text-green-500 hover:border-green-500 hover:bg-transparent hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 active:bg-transparent active:ring-green-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            style={{ transform: 'scale(1.4)' }}
            onClick={() => toggleIsMobileNavOpen()}
          >
            <span className="sr-only">Open main menu</span>
            <Bars4Icon height="2rem" width="2rem" />
          </button>
          <div
            data-testid="flowbite-navbar-collapse"
            className={`${
              !isMobileNavOpen ? 'hidden' : ''
            } w-full md:block md:w-auto md:[&>*]:items-center`}
          >
            <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
              <li>
                <div
                  ref={elementToAppendWhoamiText}
                  className="block min-w-20 cursor-pointer self-center border-b-0 border-gray-100 px-0 py-2 text-xl text-green-500 shadow-green-500 drop-shadow-ultra hover:border-0 hover:bg-transparent active:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                ></div>
              </li>
              <li>
                <div
                  ref={elementToAppendProjectsText}
                  className="block min-w-20 cursor-pointer self-center border-b-0 border-gray-100 px-0 py-2 text-xl text-green-500 shadow-green-500 drop-shadow-ultra hover:border-0 hover:bg-transparent active:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                ></div>
              </li>
              <li>
                <div
                  ref={elementToAppendExperiencesText}
                  className="block min-w-32 cursor-pointer self-center border-b-0 border-gray-100 px-0 py-2 text-xl text-green-500 shadow-green-500 drop-shadow-ultra hover:border-0 hover:bg-transparent active:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                ></div>
              </li>
              <li>
                <div
                  ref={elementToAppendBlogText}
                  className="block min-w-12 cursor-pointer self-center border-b-0 border-gray-100 px-0 py-2 text-xl text-green-500 shadow-green-500 drop-shadow-ultra hover:border-0 hover:bg-transparent active:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                ></div>
              </li>
              <li>
                <div
                  ref={elementToAppendSkillsetToolsText}
                  className="block min-w-32 cursor-pointer self-center border-b-0 border-gray-100 px-0 py-2 text-xl text-green-500 shadow-green-500 drop-shadow-ultra hover:border-0 hover:bg-transparent active:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                ></div>
              </li>
              <div
                onClick={() =>
                  openInNewTab(
                    'https://www.linkedin.com/in/erikhenriquealvescunha/',
                  )
                }
                ref={elementToAppendHireMeText}
                className="mt-1 min-w-32 cursor-pointer rounded bg-green-500 p-4 font-bold text-black shadow-ultra shadow-green-500 hover:bg-green-600 md:mt-0 md:px-6 md:py-3"
              ></div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
