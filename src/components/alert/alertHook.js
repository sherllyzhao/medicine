import {useDisclosure} from "@nextui-org/react";
import { useEffect } from "react";
import directiveRender from "../directiveRender";
import Alert from "./Alert";

const useAlert = props => {
  const {title, content} = props;
  const {isOpen, onOpen} = useDisclosure();

  const show = () => {
    onOpen();
  }

  const close = () => {
    console.log(isOpen)
  }

  useEffect(() => {
    console.log('[ title, content ] >', title, content)
    directiveRender(<Alert title={title} content={content} isOpen={isOpen} onClose={close} />)
  }, [title, content, isOpen])

  useEffect(() => {
    console.log('[ isOpen ] >', isOpen)
  }, [isOpen])

  return {
    show
  }
}

export default useAlert;