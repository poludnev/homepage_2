import { ComingSoon } from 'components';
import styles from './projects.module.scss';
const Projects = () => {
  return (
    <div className={styles.container}>
      <ComingSoon pageName="projects" />
    </div>
  );
};

export default Projects;
