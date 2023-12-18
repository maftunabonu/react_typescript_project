import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  closeButton: () => void;
}

const Alert = ({ children, closeButton }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show">
      {children}
      <button
        onClick={closeButton}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
