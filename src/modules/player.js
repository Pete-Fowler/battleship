const player = (moniker, board, typeOfPlayer) => {
  const name = moniker;
  const type = typeOfPlayer;
  const boardOfAttack = board;
  const isCurrentTurn = false;
  const getTurn = () => isCurrentTurn;
  const attack = (x, y) => {
    if(typeOfPlayer === 'human') {
      boardOfAttack.incoming(x, y)
    } else {
      const attacks = [];
      const a = Math.round(Math.random() * 9);
      const b = Math.round(Math.random() * 9);
      
      boardOfAttack.incoming(a, b);
    }
  };

  return { name, type, boardOfAttack, isCurrentTurn, getTurn, attack }
}

export default player;

/*
AI ATTACK
  create 1 branch for existing player attack
  create 2nd branch for AI player attack
    generate random x, y coordinates, each 0-9
    attack the board at x, y
    if hit
      attack adjacent
    if missed
      store location and attack another random location that excludes existing misses or hits
*/