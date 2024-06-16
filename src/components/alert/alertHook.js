import {useDisclosure} from "@nextui-org/react";
import { useEffect, useState } from "react";
import directiveRender from "../directiveRender";
import Alert from "./Alert";

const useAlert = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const show = (props) => {
    const {title, content} = props;
    setTitle(title);
    setContent(content);
    onOpen();
  }

  useEffect(() => {
    const close = () => {
      onClose();
    }
    return directiveRender(<Alert title={title} content={content} isOpen={isOpen} onClose={close} />)
  }, [title, content, isOpen, onClose])

  return {
    show
  }
}

export default useAlert;
