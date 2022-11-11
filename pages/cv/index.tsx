import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import cn from 'classnames';
import styles from './cv.module.scss';
const Cv = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.header__avatar_container}>
            <Image
              src="/img/avatar/ava-1.jpeg"
              alt="Roman's avatar"
              fill
              sizes="25rem"
            />
          </div>
          {/* <h1 className={styles.h1}>roman poludnev</h1> */}
          {/* <h1 className={styles.h1_1}>roman poludnev</h1> */}
          <h1 className={styles.h1}>
            <span>{t('resume.name')}</span>&nbsp;
            <span>{t('resume.surname')}</span>
          </h1>

          <h2 className={styles.h2}>{t('resume.position')}</h2>
          <address className={styles.contacts}>
            <p className={styles.contacts__title}>{t('resume.phone.key')}:</p>
            <p className={styles.contacts__data}>
              <a
                className={styles.contacts__link}
                href={`tel:${t('resume.phone.data')}`}
              >
                {t('resume.phone.data')}
              </a>
            </p>
            <p className={styles.contacts__title}>{t('resume.email.key')}:</p>
            <p className={styles.contacts__data}>
              <a
                className={styles.contacts__link}
                href={`mailto:${t('resume.email.data')}`}
              >
                {t('resume.email.data')}
              </a>
            </p>
            <p className={styles.contacts__title}>{t('resume.address.key')}:</p>
            <p
              className={cn(
                styles.contacts__data,
                styles.contacts__data_address
              )}
            >
              <a
                className={styles.contacts__link}
                href="https://goo.gl/maps/BxV5TEN96kzrfioWA"
                target="_blanl"
                rel="noreferrer"
              >
                {t('resume.address.data')}
              </a>
            </p>
          </address>
        </header>
        <main className={styles.main}>
          <section className={styles.section_about}>
            <h3 className={styles.h3}>{t('resume.sections.about.title')}</h3>
            <p className={styles.paragraph}>
              1+ year experienced React front-end developer. Looking for an
              opportunity to join a strong team at a product-based company to
              uplift myself as a programmer. Intended stack: ReactJS, React
              Native, Typescript. Feeling lack the programming and engineering
              skills, but compensate with high motivation, dedication, and
              excellent soft skills.
            </p>
          </section>
          <section className={styles.section_skills}>
            <h3 className={styles.h3}>{t('resume.sections.skills.title')}</h3>
            <p className={styles.paragraph}>
              HTML, CSS, JavaScript, TypeScript, ReactJS, React Native, React
              Hooks, SCSS, CSS Module, Redux, Redux Toolkit, Webpack, Bootstrap,
              Git, ESLint, NodeJS, Express, Firebase, Visual Basic for
              Applications, clear communication, hard negotiating skill, strong
              ability to interreact with clients.
            </p>
          </section>
          <section className={styles.section_experience}>
            <h3 className={styles.h3}>
              {t('resume.sections.experience.title')}
            </h3>
            <div className={styles.history}>
              <div className={styles.timeline}>
                <div className={styles.time}>Feb 2022 - Now</div>
              </div>
              <div className={styles.job}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum fuga architecto libero consequatur commodi qui autem
                temporibus necessitatibus. Tempora deleniti ex possimus quas
                eius at harum pariatur laborum dolorem quisquam!
              </div>
              <div className={styles.timeline}>
                <div className={styles.time}>Mar 2021 - Feb 2022</div>
              </div>
              <div className={styles.job}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum fuga architecto libero consequatur commodi qui autem
                temporibus necessitatibus. Tempora deleniti ex possimus quas
                eius at harum pariatur laborum dolorem quisquam! Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Omnis voluptatum
                esse culpa alias nemo sapiente suscipit repellendus, cum dolor?
                Ab architecto similique quos minima suscipit enim, eos quia
                maxime officia. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Nulla aspernatur sunt aliquam, libero,
                repellendus consequuntur asperiores ullam omnis labore dolorum
                exercitationem tempore fugit quo molestias hic veniam quisquam
                esse incidunt?
              </div>
              <div className={cn(styles.timeline)}>
                <div className={styles.time}>Mar 2021 - Feb 2022</div>
              </div>
              <div className={styles.job}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum fuga architecto libero consequatur commodi qui autem
                temporibus necessitatibus. Tempora deleniti ex possimus quas
                eius at harum pariatur laborum dolorem quisquam! Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Omnis voluptatum
                esse culpa alias nemo sapiente suscipit repellendus, cum dolor?
                Ab architecto similique quos minima suscipit enim, eos quia
                maxime officia.
              </div>
              <div className={cn(styles.timeline, styles.timeline_start)}>
                <div className={styles.time}>Mar 2021 - Feb 2022</div>
              </div>
              <div className={styles.job}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum fuga architecto libero consequatur commodi qui autem
                temporibus necessitatibus. Tempora deleniti ex possimus quas
                eius at harum pariatur laborum dolorem quisquam! Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Omnis voluptatum
                esse culpa alias nemo sapiente suscipit repellendus, cum dolor?
                Ab architecto similique quos minima suscipit enim, eos quia
                maxime officia.
              </div>
            </div>
            {/* <p className={styles.paragraph}>
              Site: Role: Time: Project description: Responsibilities: Role:
              Time: Project description: Responsibilities: LLC “RTK IT”, Russia,
              Moscow One of the Russian top 10 software development companies.
              React Native Developer January 2022 – April 2022 Android
              application, React Native for view layer, Redux/Redux Toolkit as
              the state management. UI Components and application interfaces
              coding Code debugging Code review Collaborating with team members,
              brainstorming, client solution developing ReactJS Developer, trial
              / internship November 2021 – January 2022 React-based web
              application, Redux as the state management, CSS modules. UI
              Components and application interfaces coding Code debugging
              Collaborating with team members, brainstorming, client solution
              developing Freelance December 2020 – September 2021 Developed
              several websites and single-page applications on vanilla
              JavaScript, React, Bootstrap with simple server-side in NodeJS.
            </p> */}
          </section>
          <section className={styles.section_education}>
            <h3 className={styles.h3}>
              {t('resume.sections.education.title')}
            </h3>
            <p className={styles.paragraph}>
              Far Eastern Federal University, Russia, Vladivostok, 2008 Major:
              Foreign Invested Joint Stock Companies in China Minor:
              Chinese/English interpreter
            </p>
          </section>
        </main>
        <footer className={styles.footer}>footer</footer>
      </div>
    </div>
  );
};

export default Cv;
