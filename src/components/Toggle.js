import React, { useState } from "react";

import { motion } from "framer-motion";

//with "children" we have access to everything what is between <Toggle> </Toggle> on other components
const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      {/*"layout" should add to that element which we want to execute "AnimateSharedLayout" in this case to upper "div"*/}
      {/* We have added "layout" to h4 to remove that "glitch" which happend to h4 when we toggle   */}
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
