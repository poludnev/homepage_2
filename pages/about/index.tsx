import { ComingSoon } from 'components';
import styles from './about.module.scss';
const About = () => {
  return (
    <div className={styles.container}>
      <ComingSoon pageName="about" />
    </div>
  );
};

export default About;
