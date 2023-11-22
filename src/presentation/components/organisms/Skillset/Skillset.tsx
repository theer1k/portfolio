import { Tooltip } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import { useMatrixifyAnimation } from '@/presentation/hooks/useMatrixifyAnimation/useMatrixifyAnimation';

export const Skillset = () => {
  const titleText = ['Skillset/tools'];

  const { ref: refTitle, inView: inViewTitle } = useInView({
    threshold: 0.6,
    trackVisibility: true,
    delay: 100,
  });

  const elementToAppendTitle = useMatrixifyAnimation<HTMLHeadingElement>(
    titleText,
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 50,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  return (
    <div
      ref={refTitle}
      className="relative w-full border-b-4 border-green-500 bg-white px-10 py-6"
    >
      <h2
        ref={elementToAppendTitle}
        id="skillset"
        className="text-center text-4xl font-bold text-green-500 hover:text-green-600 lg:text-left"
      ></h2>
      <div
        className={`${
          inViewTitle
            ? 'visible animate-fade-bottom-to-top lg:animate-fade-right-to-left'
            : 'invisible'
        } flex flex-wrap items-center justify-center gap-8 py-8`}
      >
        <Tooltip content="Next.js">
          <Image
            src="/svgs/nextjs.svg"
            alt="Next.js"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Angular">
          <Image
            src="/svgs/angular.svg"
            alt="Angular"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Bootstrap CSS Framework">
          <Image
            src="/svgs/bootstrap.svg"
            alt="Bootstrap"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Cascading Style Sheets (CSS)">
          <Image
            src="/svgs/css.svg"
            alt="Cascading Style Sheets (CSS)"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Electron.js">
          <Image
            src="/svgs/electronjs.svg"
            alt="Electron.js"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-800 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Hypertext Markup Language (HTML)">
          <Image
            src="/svgs/html.svg"
            alt="Hypertext Markup Language (HTML)"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Ionic">
          <Image
            src="/svgs/ionic.svg"
            alt="Ionic"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-600 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="JavaScript">
          <Image
            src="/svgs/javascript.svg"
            alt="JavaScript"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="TypeScript">
          <Image
            src="/svgs/typescript.svg"
            alt="TypeScript"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="React.js">
          <Image
            src="/svgs/reactjs.svg"
            alt="React.js"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Redux.js">
          <Image
            src="/svgs/redux.svg"
            alt="Redux.js"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Sass/Scss">
          <Image
            src="/svgs/sass.svg"
            alt="Sass/Scss"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Storybook">
          <Image
            src="/svgs/storybook.svg"
            alt="Storybook"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Stylus">
          <Image
            src="/svgs/stylus.svg"
            alt="Stylus"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Tailwind CSS Framework">
          <Image
            src="/svgs/tailwindcss.svg"
            alt="Tailwind CSS Framework"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Vue.js">
          <Image
            src="/svgs/vuejs.svg"
            alt="Vue.js"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Vue.js UI Framework">
          <Image
            src="/svgs/vuetify.svg"
            alt="Vue.js UI Framework"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="ESLint">
          <Image
            src="/svgs/eslint.svg"
            alt="ESLint"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Amazon Web Services">
          <Image
            src="/svgs/aws.svg"
            alt="AWS"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="GraphQL">
          <Image
            src="/svgs/graphql.svg"
            alt="GraphQL"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-600 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Express.js">
          <Image
            src="/svgs/express.svg"
            alt="Express.js"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-800 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Nest.js">
          <Image
            src="/svgs/nestjs.svg"
            alt="Nest.js"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Node.js">
          <Image
            src="/svgs/nodejs.svg"
            alt="Node.js"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="MongoDB">
          <Image
            src="/svgs/mongodb.svg"
            alt="MongoDB"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="PostgreSQL">
          <Image
            src="/svgs/postgresql.svg"
            alt="PostgreSQL"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Sequelize.js">
          <Image
            src="/svgs/sequelizejs.svg"
            alt="Sequelize.js"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="SQLite">
          <Image
            src="/svgs/sqlite.svg"
            alt="SQLite"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Nginx">
          <Image
            src="/svgs/nginx.svg"
            alt="Nginx"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-500 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Webpack Module Bundler">
          <Image
            src="/svgs/webpack.svg"
            alt="Webpack Module Bundler"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>

        <Tooltip content="JavaScript Compiler">
          <Image
            src="/svgs/babel.svg"
            alt="Babel"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Programming Language">
          <Image
            src="/svgs/clanguage.svg"
            alt="C Programming Language"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Docker">
          <Image
            src="/svgs/docker.svg"
            alt="Docker"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Git">
          <Image
            src="/svgs/git.svg"
            alt="Git"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Linux">
          <Image
            src="/svgs/linux.svg"
            alt="Linux"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Postman">
          <Image
            src="/svgs/postman.svg"
            alt="Postman"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Ubuntu Linux">
          <Image
            src="/svgs/ubuntu.svg"
            alt="Ubuntu Linux Distribution"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Node Package Manager">
          <Image
            src="/svgs/npm.svg"
            alt="NPM"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
        <Tooltip content="Yarn">
          <Image
            src="/svgs/yarn.svg"
            alt="Yarn Package Manager"
            width={40}
            height={40}
            quality={100}
            className="cursor-pointer shadow-zinc-400 drop-shadow-ultra"
          />
        </Tooltip>
      </div>
    </div>
  );
};
