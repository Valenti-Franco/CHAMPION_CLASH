

const getRandomPlayerIndexes = ({shownPlayers}) => {
    // console.log(shownPlayers)
    const availablePlayers = Array.from({ length: 80 }, (_, i) => i);
    const remainingPlayers = availablePlayers.filter((index) => !shownPlayers.includes(index));
    const randomIndexes = [];
//59
    for (let i = 0; i < 79; i++) {
        const randomIndex = Math.floor(Math.random() * remainingPlayers.length);
        randomIndexes.push(remainingPlayers[randomIndex]);
        remainingPlayers.splice(randomIndex, 1);
    }

    return randomIndexes;
}

export default getRandomPlayerIndexes

