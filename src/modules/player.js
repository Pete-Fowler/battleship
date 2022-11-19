/* eslint-disable no-unused-expressions */
/* eslint-disable no-lonely-if */
const player = (moniker, board, typeOfPlayer) => {
  const name = moniker;
  const type = typeOfPlayer;
  const boardOfAttack = board;

  // AI data for coords of shot
  let a;
  let b;
  let isAttackingShip = false;
  let attackAxis;
  let lastHit = null;
  let lastShot;
  let lastShotMissed = false;

  const getLastShot = () => lastShot;

  const getAIcoordinates = () => [a, b];

  const AImap = Array(10); // 0 is unknown, 1 is miss, 2 is hit
  for (let i = 0; i < AImap.length; i += 1) {
    AImap[i] = Array(10).fill(0);
  }

  const AIPlaceShip = (AIBoard, ship) => {
    let x;
    let y;
    let axis;
    do {
      axis = Math.floor(Math.random() * 2);
      if (axis === 0) {
        axis = "x";
      } else {
        axis = "y";
      }
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (AIBoard.checkCollision(ship, x, y, axis));
    AIBoard.place(ship, x, y, axis);
  };

  // 2 helper functions for AI attack
  const pickCoordinates = () => {
    isAttackingShip = false;
    do {
      a = Math.floor(Math.random() * 10);
      b = Math.floor(Math.random() * 10);
    } while (AImap[a][b] !== 0);
    AImap[a][b] = 1;
    lastShot = [a, b];
  };

  const pickAdjacentCoordinates = () => {
    isAttackingShip = true;
    let i;
    let j;

    lastShotMissed ? ([i, j] = lastHit) : ([i, j] = lastShot);

    let adjacentShots = [
      [i + 1, j],
      [i - 1, j],
      [i, j + 1],
      [i, j - 1],
    ];

    // Code to limit possible shots for edge of board
    if (i === 0 && j === 0) {
      adjacentShots = [
        [i + 1, j],
        [i, j + 1],
      ];
    } else if (i === 9 && j === 9) {
      adjacentShots = [
        [i - 1, j],
        [i, j - 1],
      ];
    } else if (i === 0 && j === 9) {
      adjacentShots = [
        [i + 1, j],
        [i, j - 1],
      ];
    } else if (i === 9 && j === 0) {
      adjacentShots = [
        [i - 1, j],
        [i, j + 1],
      ];
    } else if (i === 0) {
      adjacentShots = [
        [i + 1, j],
        [i, j + 1],
        [i, j - 1],
      ];
    } else if (i === 9) {
      adjacentShots = [
        [i - 1, j],
        [i, j + 1],
        [i, j - 1],
      ];
    } else if (j === 0) {
      adjacentShots = [
        [i + 1, j],
        [i - 1, j],
        [i, j + 1],
      ];
    } else if (j === 9) {
      adjacentShots = [
        [i + 1, j],
        [i - 1, j],
        [i, j - 1],
      ];
    }

    // limit shots to a known axis of ship
    if (attackAxis === "x") {
      adjacentShots = adjacentShots.filter(
        (shot) =>
          JSON.stringify(shot) !== JSON.stringify([i, j - 1]) &&
          JSON.stringify(shot) !== JSON.stringify([i, j + 1])
      );
    }

    if (attackAxis === "y") {
      adjacentShots = adjacentShots.filter(
        (shot) =>
          JSON.stringify(shot) !== JSON.stringify([i + 1, j]) &&
          JSON.stringify(shot) !== JSON.stringify([i - 1, j])
      );
    }

    // Test is true if there is an adjacent shot available (a zero)
    const test = adjacentShots.some((xy) => {
      const [x, y] = xy;
      return AImap[x][y] === 0;
    });

    // If no adjacent shots available, generate random shot and exit function
    if (test === false) {
      lastShotMissed = true;
      pickAdjacentCoordinates();
      return;
    }

    // Otherwise, randomly pick an adjacent shot
    do {
      [a, b] = adjacentShots[Math.floor(Math.random() * adjacentShots.length)];
    } while (
      !JSON.stringify(adjacentShots).includes(JSON.stringify([a, b])) ||
      AImap[a][b] !== 0
    );
    AImap[a][b] = 1;
    lastShot = [a, b];
  };

  const attack = (x, y) => {
    // Human attack
    if (typeOfPlayer === "human") {
      boardOfAttack.incoming(x, y);

      // AI attack branch
    } else if (boardOfAttack.getLastShotHit()) {
      lastShotMissed = false;
      isAttackingShip = true;
      // Record a hit in AI's map
      const [c, d] = lastShot;
      AImap[c][d] = 2;

      // If no previous hit for currently hit ship
      if (lastHit === null) {
        lastHit = lastShot;
      } else {
        if (lastHit[0] === lastShot[0]) {
          attackAxis = "y";
        } else {
          attackAxis = "x";
        }
      }

      if (boardOfAttack.getMap()[c][d][0].isSunk()) {
        // Reset axis tracking
        lastHit = null;
        attackAxis = "";

        pickCoordinates();
        boardOfAttack.incoming(a, b);
      } else {
        pickAdjacentCoordinates();
        boardOfAttack.incoming(a, b);
      }
      // From if last shot hit
    } else if (isAttackingShip) {
      lastShotMissed = true;
      pickAdjacentCoordinates();
      boardOfAttack.incoming(a, b);
    } else {
      lastShotMissed = true;
      pickCoordinates();
      boardOfAttack.incoming(a, b);
    }
  };

  return {
    name,
    type,
    boardOfAttack,
    attack,
    getAIcoordinates,
    AIPlaceShip,
    getLastShot,
  };
};

export default player;
