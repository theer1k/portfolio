import { MapPinIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import { useMatrixifyAnimation } from '@/presentation/hooks/useMatrixifyAnimation/useMatrixifyAnimation';

export const Footer = () => {
  const { ref: refFooter, inView: inViewFooter } = useInView({
    threshold: 0.5,
    trackVisibility: true,
    delay: 100,
  });

  const { ref: refFooterBaseBoard, inView: inViewFooterBaseBoard } = useInView({
    threshold: 0.5,
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
    ['IndianBoyBR'],
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
    ['DevBR Na Gringa'],
    {
      waitingTimeBeforeStartMessage: 300,
      appendLettersSpeed: 60,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewFooter,
  );

  const elementToAppendGitHub = useMatrixifyAnimation<HTMLAnchorElement>(
    ['IndianBoyBR'],
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
    ['Whoami'],
    {
      waitingTimeBeforeStartMessage: 100,
      appendLettersSpeed: 90,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewFooter,
  );

  const elementToAppendPageProjects = useMatrixifyAnimation<HTMLAnchorElement>(
    ['Projects'],
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
      ['Experiences'],
      {
        waitingTimeBeforeStartMessage: 300,
        appendLettersSpeed: 80,
        removeLettersSpeed: 0,
        infinite: false,
      },
      inViewFooter,
    );

  const elementToAppendPageBlog = useMatrixifyAnimation<HTMLAnchorElement>(
    ['Blog'],
    {
      waitingTimeBeforeStartMessage: 400,
      appendLettersSpeed: 120,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewFooter,
  );

  const elementToAppendPageSkillset = useMatrixifyAnimation<HTMLAnchorElement>(
    ['Skillset/tools'],
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
      `${new Date().getFullYear()} @IndianBoyBR — All rights reserved.`,
      'Made with ❤️ by Erik Cunha. Inspired by The Matrix movie.',
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
    ['Vancouver, British Columbia — Canada'],
    {
      appendLettersSpeed: 40,
      removeLettersSpeed: 20,
      infinite: false,
    },
    inViewFooterBaseBoard,
  );

  return (
    <footer ref={refFooter} className="w-full bg-black px-10 text-green-500">
      <div className="flex flex-col justify-between gap-8 border-b-2 border-b-green-500 py-6 lg:flex-row">
        <div className="flex w-full flex-col lg:w-96">
          <h2
            className="text-3xl font-bold"
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
              className="text-3xl font-bold"
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
                className="h-7 w-7 self-center"
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
                  } h-7 w-7`}
                  quality={100}
                />
              </a>
              <span className="text-lg">
                <a
                  aria-label="LinkedIn Profile for Erik Henrique Alves Cunha"
                  ref={elementToAppendLinkedin}
                  className="h-7 w-7 self-center"
                  target="_blank"
                  href="https://www.linkedin.com/in/erikhenriquealvescunha/"
                ></a>
              </span>
            </div>
            <div className="flex gap-4">
              <a
                className="h-7 w-7 self-center"
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
                  } h-7 w-7`}
                  quality={100}
                />
              </a>
              <span className="truncate text-lg">
                <a
                  aria-label="E-mail for Erik Henrique Alves Cunha"
                  ref={elementToAppendEmail}
                  className="h-7 w-7 self-center"
                  target="_blank"
                  href="mailto:erikhenriquealvescunha@gmail.com"
                ></a>
              </span>
            </div>
            <div className="flex gap-4">
              <a
                className="h-7 w-7 self-center"
                target="_blank"
                href="https://www.youtube.com/@DevBRNaGringa"
              >
                <Image
                  priority
                  src="/svgs/youtube.svg"
                  alt="Youtube Logo"
                  width="0"
                  height="0"
                  className={`${
                    inViewFooter ? 'visible animate-fade-in' : 'invisible'
                  } h-7 w-7`}
                  quality={100}
                />
              </a>
              <span className="text-lg">
                <a
                  aria-label="Youtube for DevBRNaGringa"
                  ref={elementToAppendYoutube}
                  className="h-7 w-7 self-center"
                  target="_blank"
                  href="https://www.youtube.com/@DevBRNaGringa"
                ></a>
              </span>
            </div>
            <div className="flex gap-4">
              <a
                className="h-7 w-7 self-center"
                target="_blank"
                href="https://github.com/IndianBoyBR"
              >
                <Image
                  priority
                  src="/svgs/github.svg"
                  alt="GitHub Logo"
                  width="0"
                  height="0"
                  className={`${
                    inViewFooter ? 'visible animate-fade-in' : 'invisible'
                  } h-7 w-7`}
                  quality={100}
                />
              </a>
              <span className="text-lg">
                <a
                  aria-label="GitHub for IndianBoyBR"
                  ref={elementToAppendGitHub}
                  className="h-7 w-7 self-center"
                  target="_blank"
                  href="https://github.com/IndianBoyBR"
                ></a>
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col lg:w-56">
          <h2 className="text-3xl font-bold" ref={elementToAppendSitemap}></h2>
          <span
            className="text-lg font-bold"
            ref={elementToAppendAllPages}
          ></span>
          <ul className="ml-4 mt-4 list-disc">
            <li className="text-lg">
              <Link href="#whoami" ref={elementToAppendPageWhoami}></Link>
            </li>
            <li className="mt-3 text-lg">
              <Link href="#projects" ref={elementToAppendPageProjects}></Link>
            </li>
            <li className="mt-3 text-lg">
              <Link
                href="#experiences"
                ref={elementToAppendPageExperiences}
              ></Link>
            </li>
            <li className="mt-3 text-lg">
              <Link href="#blog" ref={elementToAppendPageBlog}></Link>
            </li>
            <li className="mt-3 text-lg">
              <Link href="#skillset" ref={elementToAppendPageSkillset}></Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-6" ref={refFooterBaseBoard}>
        <div className="flex flex-col items-center justify-center gap-4 pb-8 md:flex-row">
          <MapPinIcon
            className={`${
              inViewFooterBaseBoard
                ? 'visible animate-fade-bottom-to-top lg:animate-fade-right-to-left'
                : 'invisible'
            } h-8`}
          />
          <address className="text-xl" ref={elementToAppendAddress}></address>
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
                : 'invisible'
            } flex w-full flex-wrap justify-center gap-8 lg:justify-end`}
          >
            <a
              className="h-7 w-7 self-center"
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
                } h-7 w-7`}
                quality={100}
              />
            </a>
            <a
              className="h-7 w-7 self-center"
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
                } h-7 w-7`}
                quality={100}
              />
            </a>
            <a
              className="h-7 w-7 self-center"
              target="_blank"
              href="https://www.youtube.com/@DevBRNaGringa"
            >
              <Image
                priority
                src="/svgs/youtube.svg"
                alt="Youtube Logo"
                width="0"
                height="0"
                className={`${
                  inViewFooter ? 'visible animate-fade-in' : 'invisible'
                } h-7 w-7`}
                quality={100}
              />
            </a>
            <a
              className="h-7 w-7 self-center"
              target="_blank"
              href="https://twitter.com/IndianBoyBR"
            >
              <Image
                priority
                src="/svgs/twitter.svg"
                alt="Twitter Logo"
                width="0"
                height="0"
                className={`${
                  inViewFooter ? 'visible animate-fade-in' : 'invisible'
                } h-7 w-7`}
                quality={100}
              />
            </a>
            <a
              className="h-7 w-7 self-center"
              target="_blank"
              href="https://www.hackerrank.com/profile/IndianBoyBR"
            >
              <Image
                priority
                src="/svgs/hackerrank.svg"
                alt="HackerRank Logo"
                width="0"
                height="0"
                className={`${
                  inViewFooter ? 'visible animate-fade-in' : 'invisible'
                } h-7 w-7`}
                quality={100}
              />
            </a>
            <a
              className="h-7 w-7 self-center"
              target="_blank"
              href="https://github.com/IndianBoyBR"
            >
              <Image
                priority
                src="/svgs/github.svg"
                alt="GitHub Logo"
                width="0"
                height="0"
                className={`${
                  inViewFooter ? 'visible animate-fade-in' : 'invisible'
                } h-7 w-7`}
                quality={100}
              />
            </a>
            <a
              className="h-7 w-7 self-center"
              target="_blank"
              href="https://dev.to/indianboybr"
            >
              <Image
                priority
                src="/svgs/devto.svg"
                alt="Dev.to Logo"
                width="0"
                height="0"
                className={`${
                  inViewFooter ? 'visible animate-fade-in' : 'invisible'
                } h-7 w-7`}
                quality={100}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
