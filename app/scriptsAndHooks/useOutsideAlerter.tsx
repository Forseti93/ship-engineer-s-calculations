import { useEffect, useState } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutsideClick(ref: any) {
  const [isClickedOutside, setIsClickedOutside] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: any) {
      //  if clicked on outside of element
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        setIsClickedOutside(true);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return isClickedOutside;
}
