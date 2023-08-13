import React from 'react';
import style from './index.module.css';
import { motion } from 'framer-motion';
import 'react-lazy-load-image-component/src/effects/blur.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lottie from 'react-lottie';

import Confetti from '../../assets/Confetti.json'
import Red from '../../assets/red.json'
import compareStatistics from '../../Logic/compareStatistics';


const defaultOptions = {
  loop: true,
  autoPlay: true,
  redererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const Player = ({ currentPlayer, setCurrentPlayers, index, updateCurrentPlayers, getRandomPlayerIndexes, players,player1,player2,setVidas, game,vidas, stop, setStop,WinPlayer,failPlayer }) => {

// console.log(currentPlayer.player.name)
  return (
    <motion.div
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1, x: '100%', duration: 500 }}
      // transition={{ type: 'spring', stiffness: 500, damping: 100 }}
      
      className={index === 0 ? style.container : style.container2}
    >
      
      <div
      onClick={() => {
        compareStatistics(index,game,setVidas,player1,player2,setStop,vidas,updateCurrentPlayers);
        setStop(true);
      }}
      className={index === 0 ? `${style.card} ${style.cardContainer}` : `${style.card2} ${style.cardContainer}`}>
        <LazyLoadImage className={style.Perfil} placeholderSrc={currentPlayer.player.photo} width="17vw" height="17vw" src={currentPlayer.player.photo} effect="blur" alt=""  />
        <div className={style.divcontainer}>
          <LazyLoadImage className={style.imgTeam} placeholderSrc={currentPlayer.team.logo} src={currentPlayer.team.logo} alt="" effect="blur" />

          <div className={style.containerDetail}>
            <p className={style.Name}>{currentPlayer.player.name}</p>
            <div className={style.detail}>
              <span>Equipo:</span>
              <p>{currentPlayer.team.name}</p>
            </div>
            <div className={style.detail}>
              <span>Temporada:</span>
              <p>{currentPlayer.league.season}</p>
            </div>
          </div>
        </div>
        
        
      </div>
      {WinPlayer === index ? (
          <div className={style.confetti}> 
          <Lottie  options={{animationData: Confetti, ...defaultOptions}}/>
          </div>

      ): null}
      {failPlayer === index ? (
          <div className={style.red}> 
          <Lottie  options={{animationData: Red, ...defaultOptions}}/>
          </div>

      ): null}
     
      
    </motion.div>
  );
};

export default Player;
