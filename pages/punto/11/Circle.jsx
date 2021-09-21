import styles from './Punto11.module.css';

const Circle = () => {
  return (
    <div>
      <svg
        width="110"
        height="110"
        viewBox="0 0 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.circle}
      >
        <path
          d="M109 55C109 84.8234 84.8234 109 55 109C25.1766 109 1 84.8234 1 55C1 25.1766 25.1766 1 55 1C84.8234 1 109 25.1766 109 55Z"
          stroke="#CCCCCC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />
      </svg>
    </div>
  );
};

export default Circle;
