import styles from "./Button.module.css";

interface Props {
  children: string;
  onButtonClick: () => void;
}
const Button = ({ children, onButtonClick }: Props) => {
  return (
    <>
      <button onClick={onButtonClick} className={styles.buttonStyle}>
        {children}
      </button>
    </>
  );
};

export default Button;
