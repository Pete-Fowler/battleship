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
      a = Math.round(Math.random() * 9);
      b = Math.round(Math.random() * 9);
    } while (AImap[a][b] !== 0);
    AImap[a][b] = 1;
    lastShot = [a, b];
  };
  const pickAdjacentCoordinates = () => {
    /*
    make a shot adjacent to last shot
      check each adjacent spot
      if open for shot, use it
      if not, test next spot, etc. repeat
    if not possible, call pickCoordinates 
    */

    let [ i, j ] = lastShot;
    if(AImap[i + 1][j] === 0) {
      a = i + 1;
      b = j;
      AImap[a][b] = 1;
      lastShot = [a, b];
      return;
    }
    if(AImap[i - 1][j] === 0) {
      a = i - 1;
      b = j;
      AImap[a][b] = 1;
      lastShot = [a, b];
      return;
    }
    if(AImap[i][j + 1] === 0) {
      a = i;
      b = j + 1;
      AImap[a][b] = 1;
      lastShot = [a, b];
      return;
    }
    if(AImap[i][j - 1] === 0) {
      a = i;
      b = j - 1;
      AImap[a][b] = 1;
      lastShot = [a, b];
      return;
    }
    pickCoordinates();
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
