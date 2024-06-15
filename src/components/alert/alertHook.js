import {useDisclosure} from "@nextui-org/react";
import { useEffect } from "react";
import directiveRender from "../directiveRender";
import Alert from "./Alert";

const useAlert = props => {
  const {title, content} = props;
  const {isOpen, onOpen, onClose} = useDisclosure();

  const show = () => {
    onOpen();
  }

  useEffect(() => {
    const close = () => {
      onClose();
    }
    console.log('[ title, content ] >', title, content)
    return directiveRender(<Alert title={title} content={content} isOpen={isOpen} onClose={close} />)
  }, [title, content, isOpen])

  useEffect(() => {
    console.log('[ isOpen ] >', isOpen)
  }, [isOpen])

  return {
    show
  }
}

export default useAlert;