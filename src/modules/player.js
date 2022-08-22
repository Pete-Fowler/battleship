const player = (moniker, board, typeOfPlayer) => {
  const name = moniker;
  const type = typeOfPlayer;
  const boardOfAttack = board;
  const isCurrentTurn = false;
  const getTurn = () => isCurrentTurn;

  // AI data
  let a;
  let b;
  const getAIcoordinates = () => [a, b];
  let lastShot;
  const getLastShot = () => lastShot;
  const AImap = Array(10); // 0 is unknown, 1 is miss, 2 is hit
  for (let i = 0; i < AImap.length; i += 1) {
    AImap[i] = Array(10).fill(0);
  }
  const getMap = () => AImap;
  const pickCoordinates = () => {
    do {
      a = Math.floor(Math.random() * 10);
      b = Math.floor(Math.random() * 10);
    } while (AImap[a][b] !== 0);
    AImap[a][b] = 1;
    lastShot = [a, b];
  };
  const pickAdjacentCoordinates = () => {
    let [ i, j ] = lastShot;    // must write code to limit for edge of board
    const adjacentShots = [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]];

    // If no adjacent shots available, generate random shot and exit function
    if(AImap[i + 1][j] !== 0 && AImap[i - 1][j] !== 0 && 
      AImap[i][j + 1] !== 0 && AImap[i][j - 1] !== 0) {
        pickCoordinates();
        return;
      }
    
    // Otherwise, randomly pick an adjacent shot
    do {
      a = Math.floor(Math.random() * 10);
      b = Math.floor(Math.random() * 10);
    } while (!JSON.stringify(adjacentShots).includes(JSON.stringify([a, b])));
      AImap[a][b] = 1;
      lastShot = [a, b];
  }
  const attack = (x, y) => {
    // Human attack
    if (typeOfPlayer === "human") {
      boardOfAttack.incoming(x, y);

      // AI attack branch
    } else if(boardOfAttack.getLastShotHit()) {
        pickAdjacentCoordinates();
        boardOfAttack.incoming(a, b);
      } else {
        pickCoordinates();
        boardOfAttack.incoming(a, b);
      }
    }
  
  return {
    name,
    type,
    boardOfAttack,
    isCurrentTurn,
    getTurn,
    attack,
    getAIcoordinates,
    getMap,
    getLastShot,
  };
};

export default player;

/*
AI ATTACK
  create 1 branch for existing player attack
  create 2nd branch for AI player attack
    generate random x, y coordinates, each 0-9
    check if already used
    attack the board at x, y
    if hit
      attack adjacent
    if missed
      store location and attack another random location that excludes existing misses or hits
*/
