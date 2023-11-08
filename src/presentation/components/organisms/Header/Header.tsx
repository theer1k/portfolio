import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header>
      <Navbar
        style={{ top: 0 }}
        className="fixed z-30 w-full border-b-4 border-green-500 bg-black px-8 py-6 sm:px-8"
        fluid
      >
        <Navbar.Brand as={Link} href="https://indianboy.com.br/">
          <Image
            priority
            src="/svgs/neo-glasses-matrix.svg"
            alt="Neo Glasses Matrix"
            width="0"
            height="0"
            className="w-20 md:w-24"
            style={{ height: 'auto' }}
            quality={100}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ transform: 'scale(1.4)' }}
          className="ring:border-green-500 bg-transparent text-green-500 hover:border-green-500 hover:bg-transparent hover:text-green-500 focus:ring-green-500 active:bg-transparent active:ring-green-500"
        />
        <Navbar.Collapse className="md:[&>*]:items-center">
          <Navbar.Link
            className="self-center border-b-0 px-0 text-xl text-green-500 shadow-green-500 drop-shadow-ultra hover:border-0 hover:bg-transparent active:bg-transparent md:hover:text-green-700"
            href="#whoami"
          >
            Whoami
          </Navbar.Link>
          <Navbar.Link
            className="self-center border-b-0 px-0 text-xl text-green-500 shadow-green-500 drop-shadow-ultra hover:border-0 hover:bg-transparent active:bg-transparent md:hover:text-green-700"
            href="#projects"
          >
            Projects
          </Navbar.Link>
          <Navbar.Link
            className="self-center border-b-0 px-0 text-xl text-green-500 shadow-green-500 drop-shadow-ultra hover:border-0 hover:bg-transparent active:bg-transparent md:hover:text-green-700"
            href="#experiences"
          >
            Experiences
          </Navbar.Link>
          <Navbar.Link
            className="self-center border-b-0 px-0 text-xl text-green-500 shadow-green-500 drop-shadow-ultra hover:border-0 hover:bg-transparent active:bg-transparent md:hover:text-green-700"
            href="#blog"
          >
            Blog
          </Navbar.Link>
          <Navbar.Link
            className="self-center border-b-0 px-0 text-xl text-green-500 shadow-green-500 drop-shadow-ultra hover:border-0 hover:bg-transparent active:bg-transparent md:hover:text-green-700"
            href="#skillset"
          >
            Skillset/tools
          </Navbar.Link>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/erikhenriquealvescunha/"
            className="mt-1 rounded bg-green-500 p-4 font-bold text-black shadow-ultra shadow-green-500 hover:bg-green-600 md:mt-0 md:px-6 md:py-3"
          >
            Hire me
          </a>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
