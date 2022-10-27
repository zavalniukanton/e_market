import React, { MouseEvent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const onCloseClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClose();
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = isOpen ? (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center bg-[#00000080]">
      <div className="bg-white w-auto h-auto rounded-2xl z-50">
        <div className="flex justify-between items-center py-3 px-6 border-b-zinc-300 border-b">
          <p className="text-2xl">{title}</p>
          <button
            className="text-2xl text-zinc-500 hover:text-red-500"
            onClick={onCloseClick}
          >
            <IoMdClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  ) : null;

  return isBrowser
    ? ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root") as HTMLElement
      )
    : null;
};

export default Modal;
