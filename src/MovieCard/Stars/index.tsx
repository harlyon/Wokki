import styles from './stars.module.scss';
import Star from './Star';

type Props = {
  rating: number;
};
const Stars = ({ rating }: Props) => {
  // Mapping over sparse array skips missing values, so we fill it with something
  return (
    <div className={styles.wrapper}>
      {new Array(5).fill(0).map((_, idx) => (
        <Star key={idx} painted={idx < rating} />
      ))}
    </div>
  );
};

export default Stars;
