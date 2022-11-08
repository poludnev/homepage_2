import { ComingSoon } from 'components';
import styles from './blog.module.scss';
const Blog = () => {
  return (
    <div className={styles.container}>
      <ComingSoon pageName="blog" />
    </div>
  );
};

export default Blog;
