//"react-intersection-observer" is a way which JS allows us to do something to an one element once it is on view
import { useInView } from "react-intersection-observer";

import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimation();

  //threshold: 0.5 - is when half of section is showed
  const [element, view] = useInView({ threshold: 0.3 });

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [element, controls];
};
