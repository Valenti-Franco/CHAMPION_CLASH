function getNestedProperty(obj, property) {
  const properties = property.split('.');
  let result = obj;
  for (const prop of properties) {
    result = result[prop];
    if (result === undefined) {
      break;
    }
  }
  return result;
}

const compareStatistics = (index, game,setVidas,player1,player2,setStop,vidas,updateCurrentPlayers) => {
    
        const games = {
          PartidosGanados: 'duels.won',
          Gambetas: 'dribbles.success',
          Pases: 'passes.total',
          Altura: 'player.height',
          Edad: 'player.age',
          Goles: 'goals.total',
          Asistencias: 'goals.assists',
        };
      
        const currentPlayer1Stat = getNestedProperty(player1, games[game]);
        const currentPlayer2Stat = getNestedProperty(player2, games[game]);
        
       
      
        setTimeout(() => {
          setStop(false);
  
          if (currentPlayer1Stat > currentPlayer2Stat) {
            if (index !== 0) {
              setVidas(vidas - 1);
              updateCurrentPlayers(player2, 2, false);
            } else {
              updateCurrentPlayers(player1, 1, true);
            }
          } else if (currentPlayer1Stat < currentPlayer2Stat) {
            if (index !== 1) {
              setVidas(vidas - 1);
              updateCurrentPlayers(player1, 1, false);
            } else {
              updateCurrentPlayers(player2, 2, true);
            }
          } else {
            if (index !== 1) {
              updateCurrentPlayers(player1, 1, true);
            }
            if (index !== 0) {
              updateCurrentPlayers(player2, 2, true);
            }
          }
        }, 1500);
      
}

export default compareStatistics