// React
import {
  useRef,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
  RefObject,
} from "react";

const useOutsideClick = <T extends HTMLElement>(): [
  boolean,
  Dispatch<SetStateAction<boolean>>,
  RefObject<T | null>,
] => {
  // ################### REACT HOOKS ###################
  const ref = useRef<T | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // ################### SIDE EFFECT ###################
  useEffect(() => {
    // ################### HANDLER ###################
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node))
        setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return [isOpen, setIsOpen, ref];
};

export default useOutsideClick;
