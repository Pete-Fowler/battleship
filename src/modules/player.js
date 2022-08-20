const player = (moniker, board, typeOfPlayer) => {
  const name = moniker;
  const type = typeOfPlayer;
  const boardOfAttack = board;
  const isCurrentTurn = false;
  const getTurn = () => isCurrentTurn;
  
  // AI code
  let a;  // for AI coordinates
  let b; 
  const AImap = Array(10);
  for(let i = 0; i < AImap.length; i += 1) {
    AImap[i] = Array(10).fill(0);
  }
  const pickCoordinates = () => {
    a = Math.round(Math.random() * 9);
    b = Math.round(Math.random() * 9);
    return ([a, b])
  }
  const attack = (x, y) => {
    // Human attack
    if(typeOfPlayer === 'human') {
      boardOfAttack.incoming(x, y)
    
    // AI attack branch
    } else {  
      boardOfAttack.incoming(...pickCoordinates());
    }
  };
  const getAIcoordinates = () => [a, b];
  return { name, type, boardOfAttack, isCurrentTurn, getTurn, attack, getAIcoordinates }
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