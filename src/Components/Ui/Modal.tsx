import { Children, MouseEvent, createContext, useContext, useRef } from "react";
import cn from "../../Utils/cn";
import { createPortal } from "react-dom";

const ModalContext = createContext(null);

const Modal = ({ isOpen, onClose, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed inset-0 flex justify-center items-center bg-gray-500/70 z-[999] invisible",
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutsideClose}
      >
        <div ref={containerRef} className="bg-white w-full max-w-sm rounded-md">
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }) => {
  const { onClose } = useContext(ModalContext);
  return (
    <button onClick={onClose} className="">
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="4"
          stroke="currentColor"
          className="w-6 h-6 bg-red-500 rounded-md p-0.5 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};
const Header = ({ children }) => {
  return <div className="w-full flex">{children}</div>;
};

Modal.Header = Header;
Modal.CloseButton = CloseButton;

export default Modal;
