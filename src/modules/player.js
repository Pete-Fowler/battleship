const player = (moniker, board, typeOfPlayer) => {
  const name = moniker;
  const type = typeOfPlayer;
  const boardOfAttack = board;
  const isCurrentTurn = false;
  const getTurn = () => isCurrentTurn;
  const attack = (x, y, axis) => {
    boardOfAttack.incoming(x, y, axis)
  };

  return { name, type, boardOfAttack, isCurrentTurn, getTurn, attack }
}

export default player;