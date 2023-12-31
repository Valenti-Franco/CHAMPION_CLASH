import React from 'react'
import style from "./index.module.css";
// import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import Confetti from '../../assets/Confetti.json'
import ballImage from '../../assets/pelotaMove.png';
const defaultOptions = {
  loop: true,
  autoPlay: true,
  redererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}




const Game = ({ vidas, game, currentPlayer, stop, puntos, numero }) => {
  // console.log(numero)
  const HeartSet = ({ index }) => {
    const svgVariants = {
      hidden: {

        scale: 0.7,

      },
      visible: {
        scale: 1,
        x: "0",
        transition: { duration: 1.5 },
      },
    };
    return (

      <motion.svg
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        exit={{ y: -100, scale: 0.1 }}
        transition={{ duration: 1 }}
        className={style.corazon}
        //  variants={svgVariants}
        //  animate="visible"
        //  initial="hidden"
        width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M52.54 12.88C49.8688 10.2276 46.3568 8.58892 42.6081 8.2458C38.8594 7.90269 35.1083 8.87659 32 11C28.8959 8.86274 25.1407 7.88141 21.3879 8.22673C17.635 8.57205 14.122 10.2222 11.46 12.89C8.74308 15.6306 7.0909 19.2492 6.79955 23.0973C6.50819 26.9454 7.59669 30.7715 9.87 33.89C10.3534 34.536 10.8814 35.1475 11.45 35.72L31.29 55.56C31.3553 55.6104 31.4257 55.654 31.5 55.69C31.5392 55.7256 31.5829 55.7559 31.63 55.78C31.7474 55.828 31.8732 55.8519 32 55.85C32.13 55.8516 32.2591 55.8278 32.38 55.78L32.5 55.69C32.5755 55.6563 32.6462 55.6126 32.71 55.56L52.54 35.72C53.1138 35.1523 53.6421 34.5405 54.12 33.89C56.4104 30.7787 57.5103 26.9498 57.2205 23.0973C56.9306 19.2448 55.2701 15.6235 52.54 12.89V12.88Z" fill="#EE283B" />
        <path d="M50.43 25.31C50.1648 25.31 49.9104 25.2047 49.7229 25.0171C49.5353 24.8296 49.43 24.5752 49.43 24.31C49.43 23.217 49.2144 22.1348 48.7955 21.1253C48.3766 20.1158 47.7627 19.1988 46.989 18.4269C46.2152 17.655 45.2967 17.0433 44.2862 16.6268C43.2757 16.2104 42.1929 15.9974 41.1 16C40.8348 16 40.5804 15.8947 40.3929 15.7071C40.2053 15.5196 40.1 15.2652 40.1 15C40.1 14.7348 40.2053 14.4804 40.3929 14.2929C40.5804 14.1054 40.8348 14 41.1 14C42.4563 13.9947 43.8003 14.2577 45.0547 14.7737C46.3091 15.2897 47.4491 16.0486 48.4091 17.0068C49.3691 17.9649 50.1302 19.1034 50.6487 20.3568C51.1671 21.6102 51.4326 22.9537 51.43 24.31C51.43 24.5752 51.3246 24.8296 51.1371 25.0171C50.9495 25.2047 50.6952 25.31 50.43 25.31Z" fill="white" />
      </motion.svg>
    )

  };

  const ballX = useMotionValue(0);
  const ballY = useMotionValue(0);

  const ballSpringConfig = {
    stiffness: 500,
    damping: 30
  };
  const ballSize = window.innerWidth >= 1650 ? "3vw" : "5vw"; // Tamaño de la pelota según la condición

  const ballDX = useSpring(ballX, ballSpringConfig);
  const ballDY = useSpring(ballY, ballSpringConfig);

  // console.log(currentPlayer)
  const heartsArray = Array.from({ length: vidas }, (_, index) => index);
  return (
    <div className={stop ? style.containerStop : style.container}>
      <div className={style.ContainerPoint} >
        <div className={style.ContainerDivPoint}>
          <div className={style.PaloPuntos} ></div>
          <div className={style.PaloPuntos} ></div>
        </div>< section className={style.sectionPuntos}> <h2 className={style.PuntosNum}> {puntos}</h2></section>
      </div>




      {/* <section className={style.containerPuntos}>
           
           <h2> Puntos: {puntos}</h2>
                    
           
                   </section> */}
      <div className={style.ContainerTitleGameArco}>
        <div className={style.TitleGameArco}>


          {
            game === "Goles" ? (

              <h1 className={style.TitleGame}>Goles



              </h1>
            )
              : game === "Asistencias" ? (
                <h1 className={style.TitleGame}>Asistencias</h1>
              )
                : game === "Edad" ? (
                  <h1 className={style.TitleGame}>Edad</h1>
                ) : game === "Pases" ? (
                  <h1 className={style.TitleGame}>Pases</h1>
                ) : game === "Altura" ? (
                  <h1 className={style.TitleGame}>Altura</h1>
                ) : game === "PartidosGanados" ? (
                  <h1 className={style.TitleGame}>Partidos Ganados</h1>
                ) : (
                  <h1 className={style.TitleGame}>Gambetas Realizadas</h1>
                )
          }
        </div>
          <div className={style.InfoPlayer}>
            {
              numero !== 1 ?
                stop ? (
                  game === "Goles" ? (
                    <h3 className={style.info}> {currentPlayer[0].goals.total}</h3>
                  ) : game === "Asistencias" ? (
                    <h3 className={style.info}> {currentPlayer[0].goals.assists}</h3>
                  ) : game === "Edad" ? (
                    <h3 className={style.info}> {currentPlayer[0].player.age}</h3>
                  ) : game === "Pases" ? (
                    <h3 className={style.info}> {currentPlayer[0].passes.total}</h3>
                  ) : game === "Altura" ? (
                    <h3 className={style.info}> {currentPlayer[0].player.height}</h3>
                  ) : game === "PartidosGanados" ? (
                    <h3 className={style.info}> {currentPlayer[0].duels.won}</h3>
                  ) : (
                    <h3 className={style.info}> {currentPlayer[0].dribbles.success}</h3>
                  )
                ) : (
                  <h3 className={style.info}> ??</h3>
                )
                : (
                  game === "Goles" ? (
                    <h3 className={style.info}> {currentPlayer[0].goals.total}</h3>
                  ) : game === "Asistencias" ? (
                    <h3 className={style.info}> {currentPlayer[0].goals.assists}</h3>
                  ) : game === "Edad" ? (
                    <h3 className={style.info}> {currentPlayer[0].player.age}</h3>
                  ) : game === "Pases" ? (
                    <h3 className={style.info}> {currentPlayer[0].passes.total}</h3>
                  ) : game === "Altura" ? (
                    <h3 className={style.info}> {currentPlayer[0].player.height}</h3>
                  ) : game === "PartidosGanados" ? (
                    <h3 className={style.info}> {currentPlayer[0].duels.won}</h3>
                  ) : (
                    <h3 className={style.info}> {currentPlayer[0].dribbles.success}</h3>
                  )
                )}
            <p>.</p>
            <motion.div
              className={style.pelota}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
              dragElastic={1}
              style={{
                background: "#fff",
                backgroundImage: `url(${ballImage})`,
                backgroundSize: "cover",

                margin: "auto",
                borderRadius: "50%",
                position: "absolute",

                x: ballX,
                y: ballY,
                zIndex: 1,

              }}
            />
            {
              numero !== 2 ?
                stop ? (
                  game === "Goles" ? (
                    <h3 className={style.info}> {currentPlayer[1].goals.total}</h3>
                  ) : game === "Asistencias" ? (
                    <h3 className={style.info}> {currentPlayer[1].goals.assists}</h3>
                  ) : game === "Edad" ? (
                    <h3 className={style.info}> {currentPlayer[1].player.age}</h3>
                  ) : game === "Pases" ? (
                    <h3 className={style.info}> {currentPlayer[1].passes.total}</h3>
                  ) : game === "Altura" ? (
                    <h3 className={style.info}> {currentPlayer[1].player.height}</h3>
                  ) : game === "PartidosGanados" ? (
                    <h3 className={style.info}> {currentPlayer[1].duels.won}</h3>
                  ) : (
                    <h3 className={style.info}> {currentPlayer[1].dribbles.success}</h3>
                  )
                ) : (
                  <h3 className={style.info}> ??</h3>
                )
                : (
                  game === "Goles" ? (
                    <h3 className={style.info}> {currentPlayer[1].goals.total}</h3>
                  ) : game === "Asistencias" ? (
                    <h3 className={style.info}> {currentPlayer[1].goals.assists}</h3>
                  ) : game === "Edad" ? (
                    <h3 className={style.info}> {currentPlayer[1].player.age}</h3>
                  ) : game === "Pases" ? (
                    <h3 className={style.info}> {currentPlayer[1].passes.total}</h3>
                  ) : game === "Altura" ? (
                    <h3 className={style.info}> {currentPlayer[1].player.height}</h3>
                  ) : game === "PartidosGanados" ? (
                    <h3 className={style.info}> {currentPlayer[1].duels.won}</h3>
                  ) : (
                    <h3 className={style.info}> {currentPlayer[1].dribbles.success}</h3>
                  )
                )}
          </div>

          
        </div>



        <div>


          {
            <section className={style.containerVida}>
              <AnimatePresence>
                {[3, 2, 1].map((count) => (
                  vidas >= count && <HeartSet key={count} />
                ))}
              </AnimatePresence>
            </section>
            // Condicionales para determinar qué emojis de corazón mostrar

          }

        </div>


      </div>
      )


  
}

      export default Game