const player = (moniker, board, typeOfPlayer) => {
  const name = moniker;
  const type = typeOfPlayer;
  let boardOfAttack = board;
  const isCurrentTurn = false;
  const getTurn = () => isCurrentTurn;
  const attack = (board, x, y, axis) => {
    board.incoming(x, y, axis)
  };

  return { name, type, boardOfAttack, isCurrentTurn, getTurn, attack }
}

export default player;