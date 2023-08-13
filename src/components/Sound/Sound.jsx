import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

import style from './index.module.css';
import { motion } from 'framer-motion';




const Sound = ({
  soundLoaded,
  setReset,
  sound,
  reset,
  setSoundLoaded,
  volume,
  setVolume,
  isPlaying,
  setIsPlaying,
  songs,
  currentSongIndex,
  setCurrentSongIndex,
  playSound,
  pause,
  stop
}) => {



  // UseSound hook para reproducir el sonido con opciones de volumen
  useEffect(() => {
    if (isPlaying) {
      if (!sound) {
        // Cargar el sonido usando useSound
        const [playSound, { stop }] = useSound(songs[currentSongIndex].url, { volume });
        setSound({ play: playSound, stop });
      }
    } else if (sound) {
      // Pausar el sonido
      sound.stop();
    }
  }, [isPlaying, currentSongIndex]);


  const handlePlaySound = () => {
    if (!isPlaying) {
      // console.log(isPlaying)
      setIsPlaying(true);
      playSound();
    }
  };

  const handlePauseSound = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    }
  };



  const handleStopSound = () => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
    }
  };

  const handleResumeSound = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      playSound();
    }
  };


  const handleNextSong = () => {
    setIsPlaying(false);
    stop();

    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    // if (sound) {
    // }
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };

  useEffect(() => {


    if (reset) {
      setReset(false)
      sound.stop();
      setIsPlaying(false);

    }
  }, [reset])


  // useEffect(() => {
  //   stop();

  //   setIsPlaying(false);

  //     setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  //   if (soundLoaded){
  //     handlePlaySound();
  //   }

  // }, [soundLoaded])




  const handleSeekChange = (event) => {
    const newPosition = parseFloat(event.target.value);
    setCurrentPosition(newPosition);
    if (sound) {
      sound.seek(newPosition);
    }
  };
  return (
    <div className={style.container}>
      <div className={style.divConatainer}>


        {!isPlaying && soundLoaded && (
          <>

            {/* <div className={style.Containerbtn1} onClick={handlePauseSound}><svg className={style.btn}  viewBox="-1 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>pause [#1006]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-227.000000, -3765.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M172,3605 C171.448,3605 171,3605.448 171,3606 L171,3612 C171,3612.552 171.448,3613 172,3613 C172.552,3613 173,3612.552 173,3612 L173,3606 C173,3605.448 172.552,3605 172,3605 M177,3606 L177,3612 C177,3612.552 176.552,3613 176,3613 C175.448,3613 175,3612.552 175,3612 L175,3606 C175,3605.448 175.448,3605 176,3605 C176.552,3605 177,3605.448 177,3606" id="pause-[#1006]"> </path> </g> </g> </g> </g></svg></div> */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={style.Containerbtn1} onClick={handleStopSound}><svg className={style.btn} viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>reset</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Combined-Shape" fill="#ffffff" transform="translate(74.806872, 64.000000)"> <path d="M351.859794,42.6666667 L351.859794,85.3333333 L283.193855,85.3303853 C319.271288,116.988529 341.381875,163.321355 341.339886,213.803851 C341.27474,291.98295 288.098183,360.121539 212.277591,379.179704 C136.456999,398.237869 57.3818117,363.341907 20.3580507,294.485411 C-16.6657103,225.628916 -2.17003698,140.420413 55.5397943,87.68 C63.6931909,100.652227 75.1888658,111.189929 88.8197943,118.186667 C59.4998648,141.873553 42.4797783,177.560832 42.5264609,215.253333 C43.5757012,285.194843 100.577082,341.341203 170.526461,341.333333 C234.598174,342.388718 289.235113,295.138227 297.4321,231.584253 C303.556287,184.101393 282.297007,138.84385 245.195596,112.637083 L245.193128,192 L202.526461,192 L202.526461,42.6666667 L351.859794,42.6666667 Z M127.859794,-1.42108547e-14 C151.423944,-1.42108547e-14 170.526461,19.1025173 170.526461,42.6666667 C170.526461,66.230816 151.423944,85.3333333 127.859794,85.3333333 C104.295645,85.3333333 85.1931276,66.230816 85.1931276,42.6666667 C85.1931276,19.1025173 104.295645,-1.42108547e-14 127.859794,-1.42108547e-14 Z"> </path> </g> </g> </g></svg></motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={style.Containerbtn1} onClick={handlePlaySound}><svg className={style.btn} fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 234.161 234.162" xml: space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M40.916,226.923V7.24c0-2.834,1.651-5.404,4.224-6.587c2.576-1.174,5.6-0.741,7.747,1.102l137.837,108.023 c1.585,1.366,2.492,3.345,2.521,5.438c0.024,2.006-0.882,4.083-2.438,5.465L52.974,232.328c-2.135,1.902-5.179,2.365-7.779,1.2 C42.594,232.357,40.916,229.769,40.916,226.923z"></path> </g> </g> </g></svg></motion.button>
          </>
        )}
        {isPlaying && (
          <>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={style.Containerbtn1} onClick={handleStopSound}><svg className={style.btn} viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>reset</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Combined-Shape" fill="#ffffff" transform="translate(74.806872, 64.000000)"> <path d="M351.859794,42.6666667 L351.859794,85.3333333 L283.193855,85.3303853 C319.271288,116.988529 341.381875,163.321355 341.339886,213.803851 C341.27474,291.98295 288.098183,360.121539 212.277591,379.179704 C136.456999,398.237869 57.3818117,363.341907 20.3580507,294.485411 C-16.6657103,225.628916 -2.17003698,140.420413 55.5397943,87.68 C63.6931909,100.652227 75.1888658,111.189929 88.8197943,118.186667 C59.4998648,141.873553 42.4797783,177.560832 42.5264609,215.253333 C43.5757012,285.194843 100.577082,341.341203 170.526461,341.333333 C234.598174,342.388718 289.235113,295.138227 297.4321,231.584253 C303.556287,184.101393 282.297007,138.84385 245.195596,112.637083 L245.193128,192 L202.526461,192 L202.526461,42.6666667 L351.859794,42.6666667 Z M127.859794,-1.42108547e-14 C151.423944,-1.42108547e-14 170.526461,19.1025173 170.526461,42.6666667 C170.526461,66.230816 151.423944,85.3333333 127.859794,85.3333333 C104.295645,85.3333333 85.1931276,66.230816 85.1931276,42.6666667 C85.1931276,19.1025173 104.295645,-1.42108547e-14 127.859794,-1.42108547e-14 Z"> </path> </g> </g> </g></svg></motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={style.Containerbtn1} onClick={handlePauseSound}><svg className={style.btn} viewBox="-1 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>pause [#1006]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-227.000000, -3765.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M172,3605 C171.448,3605 171,3605.448 171,3606 L171,3612 C171,3612.552 171.448,3613 172,3613 C172.552,3613 173,3612.552 173,3612 L173,3606 C173,3605.448 172.552,3605 172,3605 M177,3606 L177,3612 C177,3612.552 176.552,3613 176,3613 C175.448,3613 175,3612.552 175,3612 L175,3606 C175,3605.448 175.448,3605 176,3605 C176.552,3605 177,3605.448 177,3606" id="pause-[#1006]"> </path> </g> </g> </g> </g></svg></motion.button>
            {/* <button onClick={handleResumeSound}>REANUDAR</button> */}
          </>
        )}
        {/* {!isPlaying && (
                 <button onClick={handleResumeSound}>REANUDAR</button> 

      )} */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className={style.Containerbtn1} onClick={handleNextSong}> <svg fill="#ffffff" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml: space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0,381.4l237.7-118.9L0,143.6V381.4z M237.7,262.5v118.9l237.7-118.9L237.7,143.6V262.5z M475.4,143.6v118.9v118.9H512 V143.6H475.4z"></path> </g></svg> </motion.button>
      </div>
      <div className={style.containerSound}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-volume" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>

          {volume === 0 ? (
             <path d="M16 10l4 4m0 -4l-4 4"></path>
          ) : null}

          {volume < 0.5 ?
          
          volume > 0 ?
            (
              <path d="M15 8a5 5 0 0 1 0 8"></path>
            ):null
          : (
            <>
              <path d="M15 8a5 5 0 0 1 0 8"></path>
              <path d="M17.7 5a9 9 0 0 1 0 14"></path>
            </>
          )}

           <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
      </svg>
      <motion.input
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className={style.volumen}
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />

    </div>

    </div >
  );
};

const MemoizedSound = React.memo(Sound);

export { MemoizedSound as Sound };
