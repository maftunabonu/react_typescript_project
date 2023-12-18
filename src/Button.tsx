interface Props {
  children: string;
  onButtonClick: () => void;
}
const Button = ({ children, onButtonClick }: Props) => {
  return (
    <>
      <button onClick={onButtonClick} className="btn btn-primary">
        {children}
      </button>
    </>
  );
};

export default Button;
