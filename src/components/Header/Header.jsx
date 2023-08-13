




import React, { useState, useEffect, useRef } from 'react';
import style from "./index.module.css";
import { AnimatePresence, motion } from 'framer-motion';

const Header = ({handleButtonClickReset}) => {
  const [inputVisible, setInputVisible] = useState(false);
  const inputRef = useRef(null);

  const handleSvgClick = () => {
    setInputVisible(!inputVisible);
  };

  const handleOutsideClick = event => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setInputVisible(false);
    }
  };

  useEffect(() => {
    if (inputVisible) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [inputVisible]);

  return (
    <> 
 <header className={style.main}>
    
      <div className={style.container}>
      <svg onClick={handleSvgClick} className={style.icon} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cross-square</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-206.000000, -1037.000000)" fill="#000000"> <path d="M226.95,1056.54 C227.34,1056.93 227.34,1057.56 226.95,1057.95 C226.559,1058.34 225.926,1058.34 225.536,1057.95 L222,1054.41 L218.464,1057.95 C218.074,1058.34 217.441,1058.34 217.05,1057.95 C216.66,1057.56 216.66,1056.93 217.05,1056.54 L220.586,1053 L217.05,1049.46 C216.66,1049.07 216.66,1048.44 217.05,1048.05 C217.441,1047.66 218.074,1047.66 218.464,1048.05 L222,1051.59 L225.536,1048.05 C225.926,1047.66 226.559,1047.66 226.95,1048.05 C227.34,1048.44 227.34,1049.07 226.95,1049.46 L223.414,1053 L226.95,1056.54 L226.95,1056.54 Z M234,1037 L210,1037 C207.791,1037 206,1038.79 206,1041 L206,1065 C206,1067.21 207.791,1069 210,1069 L234,1069 C236.209,1069 238,1067.21 238,1065 L238,1041 C238,1038.79 236.209,1037 234,1037 L234,1037 Z" id="cross-square" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>     
         <AnimatePresence>
         {inputVisible && (
         <motion.div
         initial={{x: -200 }}
        animate={{ x: 0 }}
        exit={{ x: -200 }}
  transition={{ duration: 0.3 }}

         ref={inputRef} className={style.quit}>
          <h4>QUIT? </h4>
          <button onClick={ handleButtonClickReset} className={style.button}>YES</button>
          <button onClick={handleSvgClick} className={style.button} >NO</button>

         </motion.div>
         )}
         </AnimatePresence>
      </div>
   
    </header>
    </>
    
  );
}

export default Header;
