import { useEffect, useRef, useState } from "react";

export default function useInterSection(options) {
  const [visible, setVisible] = useState(false);
  const elementRef = useRef();
  const callBack = (entries) => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
  };
  useEffect(() => {
    // console.log("triggered");
    const observer = new IntersectionObserver(callBack, options);
    if (elementRef.current) observer.observe(elementRef.current);
    // return () => {
    //   if (elementRef.current) observer.unobserve(elementRef.current);
    // };
  }, [elementRef, options]);
  return [visible, elementRef];
}
