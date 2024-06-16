import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import {useEffect} from "react";

const SelfModel = (props) => {
  const { title, content, isOpen, onClose } = props;

  useEffect(() => {
    if(isOpen){
      let closeBtn = document.querySelector('button[aria-label="Close"]');
      closeBtn.addEventListener('click', onClose);
    }
  }, [isOpen, onClose])

  return (
    <Modal isOpen={isOpen}>
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>{content}</ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                取消
              </Button>
              <Button color="primary" onPress={onClose}>
                确定
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default SelfModel;
