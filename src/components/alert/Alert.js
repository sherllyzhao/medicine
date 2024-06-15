import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import directiveRender from "../directiveRender";
import { useEffect } from "react";

const SelfModel = (props) => {
  const { title, content, isOpen, onClose } = props;
  const {onOpen, onOpenChange} = useDisclosure();

  console.log('[ onClose ] >', onClose)

  const close = () => {
    alert(1)
  }

  return (
    <Modal isOpen={isOpen}>
      <ModalContent>
        {(close) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>{content}</ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={close}>
                取消
              </Button>
              <Button color="primary" onPress={close}>
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
