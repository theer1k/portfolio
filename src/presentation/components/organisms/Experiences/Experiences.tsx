import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useMatrixifyAnimation } from '@/presentation/hooks/useMatrixifyAnimation';

type Experience = {
  key: string;
  when: string;
  position: string;
  company: string;
};

export const Experiences = () => {
  const [allowScrolling, setAllowScrolling] = useState(false);
  const experiencesText = ['Experiences'];

  const { ref: refTitle, inView: inViewTitle } = useInView({
    threshold: 0,
    trackVisibility: true,
    delay: 100,
  });

  const elementToAppendTitle = useMatrixifyAnimation<HTMLHeadingElement>(
    experiencesText,
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 50,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  const lastExperiences = [
    {
      key: 'now_canon_medical_systems_brazil_full_time_contract_software_developer_front_end',
      when: 'Now',
      position: 'Software Engineer | Front-End',
      company: 'Canon Medical Systems — Brazil • Full-time contract',
    },
    {
      key: '2021_grupo_sbf_nike_brazil_centauro_brazil_full_time_permanent_software_developer_front_end',
      when: '2021',
      position: 'Software Engineer | Front-End',
      company:
        'Grupo SBF | Nike Brazil & Centauro — Brazil • Full-time permanent',
    },
    {
      key: '2020_encora_inc_brazil_full_time_permanent_software_developer_front_end',
      when: '2020',
      position: 'Software Engineer | Front-End',
      company: 'Encora Inc. — Brazil • Full-time permanent',
    },
    {
      key: '2020_zup_innovation_itau_bank_brazil_full_time_permanent_software_developer_front_end',
      when: '2020',
      position: 'Software Engineer | Front-End',
      company: 'Zup Innovation (Itaú Bank) — Brazil • Full-time permanent',
    },
    {
      key: '2019_venturus_brazil_full_time_permanent_software_developer_full_stack',
      when: '2019',
      position: 'Software Engineer | Full-Stack',
      company: 'Venturus — Brazil • Full-time permanent',
    },
    {
      key: '2018_mb_labs_brazil_full_time_contract_software_developer_full_stack',
      when: '2018',
      position: 'Software Engineer | Full-Stack',
      company: 'MB Labs — Brazil • Full-time contract',
    },
    {
      key: '2017_monde_sistemas_brazil_internship_intern_software_development',
      when: '2017',
      position: 'Intern | Software Development',
      company: 'Monde Sistemas — Brazil • Internship',
    },
  ];

  const experiencesRefs = [];

  const experience1 = lastExperiences[0] as Experience;
  const elementToAppendDate1 = useMatrixifyAnimation<HTMLHeadingElement>(
    [experience1.when],
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 150,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  const elementToAppendPosition1 = useMatrixifyAnimation<HTMLHeadingElement>(
    [experience1.position],
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 25,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  const elementToAppendCompany1 = useMatrixifyAnimation<HTMLHeadingElement>(
    [experience1.company],
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 25,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  experiencesRefs.push({
    key: experience1.key,
    elementToAppendDate: elementToAppendDate1,
    elementToAppendPosition: elementToAppendPosition1,
    elementToAppendCompany: elementToAppendCompany1,
  });

  const experience2 = lastExperiences[1] as Experience;
  const elementToAppendDate2 = useMatrixifyAnimation<HTMLHeadingElement>(
    [experience2.when],
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 150 + 10,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  const elementToAppendPosition2 = useMatrixifyAnimation<HTMLHeadingElement>(
    [experience2.position],
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 25 + 10,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  const elementToAppendCompany2 = useMatrixifyAnimation<HTMLHeadingElement>(
    [experience2.company],
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 25 + 10,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  experiencesRefs.push({
    key: experience2.key,
    elementToAppendDate: elementToAppendDate2,
    elementToAppendPosition: elementToAppendPosition2,
    elementToAppendCompany: elementToAppendCompany2,
  });

  const experience3 = lastExperiences[2] as Experience;
  const elementToAppendDate3 = useMatrixifyAnimation<HTMLHeadingElement>(
    [experience3.when],
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 150 + 20,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  const elementToAppendPosition3 = useMatrixifyAnimation<HTMLHeadingElement>(
    [experience3.position],
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 25 + 20,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  const elementToAppendCompany3 = useMatrixifyAnimation<HTMLHeadingElement>(
    [experience3.company],
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 25 + 20,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  experiencesRefs.push({
    key: experience3.key,
    elementToAppendDate: elementToAppendDate3,
    elementToAppendPosition: elementToAppendPosition3,
    elementToAppendCompany: elementToAppendCompany3,
  });

  const experience4 = lastExperiences[3] as Experience;
  const elementToAppendDate4 = useMatrixifyAnimation<HTMLHeadingElement>(
    [experience4.when],
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 150 + 30,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  const elementToAppendPosition4 = useMatrixifyAnimation<HTMLHeadingElement>(
    [experience4.position],
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 25 + 30,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  const elementToAppendCompany4 = useMatrixifyAnimation<HTMLHeadingElement>(
    [experience4.company],
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 25 + 30,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  experiencesRefs.push({
    key: experience4.key,
    elementToAppendDate: elementToAppendDate4,
    elementToAppendPosition: elementToAppendPosition4,
    elementToAppendCompany: elementToAppendCompany4,
  });

  const experience5 = lastExperiences[4] as Experience;
  const elementToAppendDate5 = useMatrixifyAnimation<HTMLHeadingElement>(
    [experience5.when],
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 150 + 40,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  const elementToAppendPosition5 = useMatrixifyAnimation<HTMLHeadingElement>(
    [experience5.position],
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 25 + 40,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  const elementToAppendCompany5 = useMatrixifyAnimation<HTMLHeadingElement>(
    [experience5.company],
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 25 + 40,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  experiencesRefs.push({
    key: experience5.key,
    elementToAppendDate: elementToAppendDate5,
    elementToAppendPosition: elementToAppendPosition5,
    elementToAppendCompany: elementToAppendCompany5,
  });

  const experience6 = lastExperiences[5] as Experience;
  const elementToAppendDate6 = useMatrixifyAnimation<HTMLHeadingElement>(
    [experience6.when],
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 150 + 50,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  const elementToAppendPosition6 = useMatrixifyAnimation<HTMLHeadingElement>(
    [experience6.position],
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 25 + 50,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  const elementToAppendCompany6 = useMatrixifyAnimation<HTMLHeadingElement>(
    [experience6.company],
    {
      waitingTimeBeforeNextMessage: 0,
      appendLettersSpeed: 25 + 50,
      removeLettersSpeed: 0,
      infinite: false,
    },
    inViewTitle,
  );

  experiencesRefs.push({
    key: experience6.key,
    elementToAppendDate: elementToAppendDate6,
    elementToAppendPosition: elementToAppendPosition6,
    elementToAppendCompany: elementToAppendCompany6,
  });

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
      className={`${allowScrolling ? 'visible' : 'hidden'} relative w-full border-b-4 border-green-500 bg-black px-10 py-6 text-green-500`}
    >
      <h2
        ref={elementToAppendTitle}
        id="experiences"
        className="text-center text-2xl font-bold text-green-500 shadow-green-500 drop-shadow-ultra hover:text-green-600 lg:text-left"
      ></h2>
      <div className="flex  flex-col gap-2 pb-8 pt-4">
        {experiencesRefs.map((experience) => (
          <div
            key={experience?.key}
            className={`${
              inViewTitle
                ? 'animate-fade-bottom-to-top border-b-2 border-green-500 lg:animate-fade-right-to-left'
                : ''
            } flex flex-col items-center gap-6  px-0 py-4 text-center md:px-10 lg:flex-row lg:gap-14 lg:text-left`}
          >
            <span
              ref={experience?.elementToAppendDate}
              className="text-xl"
              style={{ minWidth: '6rem', maxWidth: '8rem' }}
            ></span>
            <div className="flex flex-col">
              <span
                className="text-xl font-bold"
                ref={experience?.elementToAppendPosition}
              ></span>
              <span
                className="text-xl"
                ref={experience?.elementToAppendCompany}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
