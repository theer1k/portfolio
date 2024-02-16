import { MapPinIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useMatrixifyAnimation } from '@/presentation/hooks/useMatrixifyAnimation';

export const Footer = () => {
  const [allowScrolling, setAllowScrolling] = useState(false);

  const { ref: refFooter, inView: inViewFooter } = useInView({
    threshold: 0.4,
    trackVisibility: true,
    delay: 100,
  });

  const { ref: refFooterBaseBoard, inView: inViewFooterBaseBoard } = useInView({
    threshold: 0.3,
    trackVisibility: true,
    delay: 100,
  });

  const elementToAppendGetInTouch = useMatrixifyAnimation<HTMLHeadingElement>(
    ['Get In Touch'],
    {
      waitingTimeBeforeStartMessage: 0,
      appendLettersSpeed: 50,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewFooter,
  );

  const elementToAppendSendMeAMessage =
    useMatrixifyAnimation<HTMLHeadingElement>(
      ['Send me a message on LinkedIn.'],
      {
        waitingTimeBeforeStartMessage: 0,
        appendLettersSpeed: 50,
        removeLettersSpeed: 0,
        infinite: false,
      },
      inViewFooter,
    );

  const elementToAppendSendMeAMessageCTA =
    useMatrixifyAnimation<HTMLHeadingElement>(
      [
        `Think we're a good match? Don't hesitate to get in touch and join the rebellion against the machines.`,
      ],
      {
        waitTimeBeforeNextMessageBeforeLoop: 9000,
        appendLettersSpeed: 15,
        removeLettersSpeed: 15,
        infinite: true,
      },
      inViewFooter,
    );

  const elementToAppendWebsiteName = useMatrixifyAnimation<HTMLHeadingElement>(
    ['theer1k'],
    {
      waitingTimeBeforeStartMessage: 0,
      appendLettersSpeed: 90,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewFooter,
  );

  const elementToAppendLinkedin = useMatrixifyAnimation<HTMLAnchorElement>(
    ['in/erikhenriquealvescunha'],
    {
      waitingTimeBeforeStartMessage: 100,
      appendLettersSpeed: 50,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewFooter,
  );

  const elementToAppendEmail = useMatrixifyAnimation<HTMLAnchorElement>(
    ['erikhenriquealvescunha@gmail.com'],
    {
      waitingTimeBeforeStartMessage: 200,
      appendLettersSpeed: 40,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewFooter,
  );

  const elementToAppendYoutube = useMatrixifyAnimation<HTMLAnchorElement>(
    ['theer1k'],
    {
      waitingTimeBeforeStartMessage: 300,
      appendLettersSpeed: 60,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewFooter,
  );

  const elementToAppendGitHub = useMatrixifyAnimation<HTMLAnchorElement>(
    ['theer1k'],
    {
      waitingTimeBeforeStartMessage: 400,
      appendLettersSpeed: 70,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewFooter,
  );

  const elementToAppendSitemap = useMatrixifyAnimation<HTMLHeadingElement>(
    ['Sitemap'],
    {
      waitingTimeBeforeStartMessage: 0,
      appendLettersSpeed: 80,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewFooter,
  );

  const elementToAppendAllPages = useMatrixifyAnimation<HTMLSpanElement>(
    ['All pages.'],
    {
      waitingTimeBeforeStartMessage: 0,
      appendLettersSpeed: 50,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewFooter,
  );

  const elementToAppendPageWhoami = useMatrixifyAnimation<HTMLAnchorElement>(
    ['• Whoami'],
    {
      waitingTimeBeforeStartMessage: 100,
      appendLettersSpeed: 90,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewFooter,
  );

  const elementToAppendPageProjects = useMatrixifyAnimation<HTMLAnchorElement>(
    ['• Projects'],
    {
      waitingTimeBeforeStartMessage: 200,
      appendLettersSpeed: 80,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewFooter,
  );

  const elementToAppendPageExperiences =
    useMatrixifyAnimation<HTMLAnchorElement>(
      ['• Experiences'],
      {
        waitingTimeBeforeStartMessage: 300,
        appendLettersSpeed: 80,
        removeLettersSpeed: 0,
        infinite: false,
      },
      inViewFooter,
    );

  const elementToAppendPageBlog = useMatrixifyAnimation<HTMLAnchorElement>(
    ['• Blog'],
    {
      waitingTimeBeforeStartMessage: 400,
      appendLettersSpeed: 120,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewFooter,
  );

  const elementToAppendPageSkillset = useMatrixifyAnimation<HTMLAnchorElement>(
    ['• Skillset/tools'],
    {
      waitingTimeBeforeStartMessage: 500,
      appendLettersSpeed: 80,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewFooter,
  );

  const elementToAppendWebsiteRights = useMatrixifyAnimation<HTMLAnchorElement>(
    [
      `${new Date().getFullYear()} @theer1k — All rights reserved.`,
      'Made with ❤️ by Erik Henrique. Inspired by The Matrix movie.',
    ],
    {
      waitingTimeBeforeNextMessage: 6000,
      waitTimeBeforeNextMessageBeforeLoop: 7500,
      appendLettersSpeed: 40,
      removeLettersSpeed: 20,
      infinite: true,
    },
    inViewFooterBaseBoard,
  );
  const elementToAppendAddress = useMatrixifyAnimation<HTMLElement>(
    ['Campinas, São Paulo — Brazil'],
    {
      appendLettersSpeed: 40,
      removeLettersSpeed: 20,
      infinite: false,
    },
    inViewFooterBaseBoard,
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
    <footer
      ref={refFooter}
      className={`${allowScrolling ? 'visible' : 'hidden'} w-full bg-black px-10 text-green-500`}
    >
      <div className="flex flex-col justify-between gap-8 border-b-2 border-b-green-500 py-6 lg:flex-row">
        <div className="flex w-full flex-col lg:w-96">
          <h2
            className="text-xl font-bold"
            ref={elementToAppendGetInTouch}
          ></h2>
          <span
            className="text-lg font-bold"
            ref={elementToAppendSendMeAMessage}
          ></span>
          <p
            className="mt-2 text-lg"
            ref={elementToAppendSendMeAMessageCTA}
          ></p>
        </div>
        <div className="relative w-full lg:w-96">
          <div className="flex items-center gap-4">
            <h2
              className="text-xl font-bold"
              ref={elementToAppendWebsiteName}
            ></h2>
            <Image
              src="/svgs/neo-glasses-matrix.svg"
              alt="Neo Glasses Matrix"
              width="0"
              height="0"
              quality={100}
              className={`${
                inViewFooter ? 'visible animate-fade-in' : 'invisible'
              } h-auto w-20`}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex gap-4">
              <a
                className="size-6 self-center"
                target="_blank"
                href="https://www.linkedin.com/in/erikhenriquealvescunha/"
              >
                <Image
                  priority
                  src="/svgs/linkedin.svg"
                  alt="LinkedIn Logo"
                  width="0"
                  height="0"
                  className={`${
                    inViewFooter ? 'visible animate-fade-in' : 'invisible'
                  } size-6`}
                  quality={100}
                />
              </a>
              <span className="text-lg">
                <a
                  aria-label="LinkedIn Profile Erik Henrique"
                  ref={elementToAppendLinkedin}
                  className="size-6 self-center"
                  target="_blank"
                  href="https://www.linkedin.com/in/erikhenriquealvescunha/"
                ></a>
              </span>
            </div>
            <div className="flex gap-4">
              <a
                className="size-6 self-center"
                target="_blank"
                href="mailto:erikhenriquealvescunha@gmail.com"
              >
                <Image
                  priority
                  src="/svgs/email.svg"
                  alt="Email Logo"
                  width="20"
                  height="20"
                  className={`${
                    inViewFooter ? 'visible animate-fade-in' : 'invisible'
                  } size-6`}
                  quality={100}
                />
              </a>
              <span className="truncate text-lg">
                <a
                  aria-label="E-mail Erik Henrique Alves Cunha"
                  ref={elementToAppendEmail}
                  className="size-6 self-center"
                  target="_blank"
                  href="mailto:erikhenriquealvescunha@gmail.com"
                ></a>
              </span>
            </div>
            <div className="flex gap-4">
              <a
                className="size-6 self-center"
                target="_blank"
                href="https://www.youtube.com/@theer1k_dev"
              >
                <Image
                  priority
                  src="/svgs/youtube.svg"
                  alt="Youtube Logo"
                  width="0"
                  height="0"
                  className={`${
                    inViewFooter ? 'visible animate-fade-in' : 'invisible'
                  } size-6`}
                  quality={100}
                />
              </a>
              <span className="text-lg">
                <a
                  aria-label="Youtube theer1k_dev"
                  ref={elementToAppendYoutube}
                  className="size-6 self-center"
                  target="_blank"
                  href="https://www.youtube.com/@theer1k_dev"
                ></a>
              </span>
            </div>
            <div className="flex gap-4">
              <a
                className="size-6 self-center"
                target="_blank"
                href="https://github.com/theer1k"
              >
                <Image
                  priority
                  src="/svgs/github.svg"
                  alt="GitHub Logo"
                  width="0"
                  height="0"
                  className={`${
                    inViewFooter ? 'visible animate-fade-in' : 'invisible'
                  } size-6`}
                  quality={100}
                />
              </a>
              <span className="text-lg">
                <a
                  aria-label="GitHub theer1k"
                  ref={elementToAppendGitHub}
                  className="size-6 self-center"
                  target="_blank"
                  href="https://github.com/theer1k"
                ></a>
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col lg:w-56">
          <h2 className="text-xl font-bold" ref={elementToAppendSitemap}></h2>
          <span
            className="text-lg font-bold"
            ref={elementToAppendAllPages}
          ></span>
          <div className="mt-4 flex flex-col gap-1">
            <span className="text-base">
              <Link href="#whoami" ref={elementToAppendPageWhoami}></Link>
            </span>
            <span className="text-base">
              <Link href="#projects" ref={elementToAppendPageProjects}></Link>
            </span>
            <span className="text-base">
              <Link
                href="#experiences"
                ref={elementToAppendPageExperiences}
              ></Link>
            </span>
            <span className="text-base">
              <Link href="#blog" ref={elementToAppendPageBlog}></Link>
            </span>
            <span className="text-base">
              <Link href="#skillset" ref={elementToAppendPageSkillset}></Link>
            </span>
          </div>
        </div>
      </div>
      <div className="py-6" ref={refFooterBaseBoard}>
        <div className="flex flex-col items-center justify-center gap-4 pb-8 md:flex-row">
          <MapPinIcon
            className={`${
              inViewFooterBaseBoard
                ? 'visible animate-fade-bottom-to-top lg:animate-fade-right-to-left'
                : 'invisible hidden'
            } h-6`}
          />
          <address className="text-md" ref={elementToAppendAddress}></address>
        </div>
        <div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">
          <span
            className="h-16 w-full text-lg lg:h-auto"
            ref={elementToAppendWebsiteRights}
          ></span>
          <div
            className={`${
              inViewFooterBaseBoard
                ? 'visible animate-fade-bottom-to-top lg:animate-fade-right-to-left'
                : 'invisible hidden'
            } flex w-full flex-wrap justify-center gap-8 lg:justify-end`}
          >
            <a
              className="size-6 self-center"
              target="_blank"
              href="https://www.linkedin.com/in/erikhenriquealvescunha/"
            >
              <Image
                priority
                src="/svgs/linkedin.svg"
                alt="LinkedIn Logo"
                width="0"
                height="0"
                className={`${
                  inViewFooter ? 'visible animate-fade-in' : 'invisible'
                } size-6`}
                quality={100}
              />
            </a>
            <a
              className="size-6 self-center"
              target="_blank"
              href="mailto:erikhenriquealvescunha@gmail.com"
            >
              <Image
                priority
                src="/svgs/email.svg"
                alt="Email Logo"
                width="0"
                height="0"
                className={`${
                  inViewFooter ? 'visible animate-fade-in' : 'invisible'
                } size-6`}
                quality={100}
              />
            </a>
            <a
              className="size-6 self-center"
              target="_blank"
              href="https://www.youtube.com/@theer1k_dev"
            >
              <Image
                priority
                src="/svgs/youtube.svg"
                alt="Youtube Logo"
                width="0"
                height="0"
                className={`${
                  inViewFooter ? 'visible animate-fade-in' : 'invisible'
                } size-6`}
                quality={100}
              />
            </a>
            <a
              className="size-6 self-center"
              target="_blank"
              href="https://twitter.com/theer1k"
            >
              <Image
                priority
                src="/svgs/twitter.svg"
                alt="Twitter Logo"
                width="0"
                height="0"
                className={`${
                  inViewFooter ? 'visible animate-fade-in' : 'invisible'
                } size-6`}
                quality={100}
              />
            </a>
            <a
              className="size-6 self-center"
              target="_blank"
              href="https://www.hackerrank.com/profile/theer1k"
            >
              <Image
                priority
                src="/svgs/hackerrank.svg"
                alt="HackerRank Logo"
                width="0"
                height="0"
                className={`${
                  inViewFooter ? 'visible animate-fade-in' : 'invisible'
                } size-6`}
                quality={100}
              />
            </a>
            <a
              className="size-6 self-center"
              target="_blank"
              href="https://github.com/theer1k"
            >
              <Image
                priority
                src="/svgs/github.svg"
                alt="GitHub Logo"
                width="0"
                height="0"
                className={`${
                  inViewFooter ? 'visible animate-fade-in' : 'invisible'
                } size-6`}
                quality={100}
              />
            </a>
            <a
              className="size-6 self-center"
              target="_blank"
              href="https://dev.to/theer1k"
            >
              <Image
                priority
                src="/svgs/devto.svg"
                alt="Dev.to Logo"
                width="0"
                height="0"
                className={`${
                  inViewFooter ? 'visible animate-fade-in' : 'invisible'
                } size-6`}
                quality={100}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
