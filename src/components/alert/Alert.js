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

const SelfModel = (props) => {
  const { title, content, isOpen } = props;

  return (
    <Modal isOpen={isOpen}>
      <ModalContent>
        {(onClose) => (
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

export default function Alert (props) {
  const { title, content } = props;
  const { onOpen, isOpen } = useDisclosure();

  const show = () => {
    onOpen();
  };

  return directiveRender(
    <SelfModel title={title} content={content} show={show} isOpen={isOpen} />
  );
};
