import Image from "next/image";
import { useState } from "react";
import { BiCopyright } from "react-icons/bi";

import MasterCardModal from "@components/Modal/MasterCardModal";
import Modal from "@components/Modal";
import VisaModal from "@components/Modal/VisaModal";

import mastercard from "../../../public/images/mastercard-logo.png";
import visa from "../../../public/images/visa-logo.png";

const BottomSection = () => {
  const [isMasterCardModal, setIsMasterCardModal] = useState(false);
  const [isVisaModal, setIsVisaModal] = useState(false);

  const onToggleMasterCardModal = () => {
    setIsMasterCardModal((prevState) => !prevState);
  };

  const onToggleVisaModal = () => {
    setIsVisaModal((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex items-center justify-end h-20 px-20 relative">
        <div className="absolute left-20 flex items-center">
          <div
            className="mr-4 cursor-pointer"
            onClick={onToggleMasterCardModal}
          >
            <Image
              width={72}
              height={32}
              src={mastercard}
              alt="mastercard logo"
              objectFit="cover"
            />
          </div>
          <div className="cursor-pointer" onClick={onToggleVisaModal}>
            <Image
              width={72}
              height={32}
              src={visa}
              alt="visa logo"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="flex items-center">
          <BiCopyright />
          <p className="ml-1 text-xs">Интернет-магазин Rozetka, 2022</p>
        </div>
      </div>

      <Modal
        isOpen={isMasterCardModal}
        onClose={onToggleMasterCardModal}
        title="MasterCard® SecureCode™"
      >
        <MasterCardModal />
      </Modal>

      <Modal
        isOpen={isVisaModal}
        onClose={onToggleVisaModal}
        title="Verified by Visa"
      >
        <VisaModal />
      </Modal>
    </>
  );
};

export default BottomSection;
