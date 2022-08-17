const player = (moniker, typeOfPlayer) => {
  const name = moniker;
  const type = typeOfPlayer;
  const isCurrentTurn = false;
  const getTurn = () => isCurrentTurn;
  const attack = (board, x, y, axis) => {
    board.incoming(x, y, axis)
  };

  return { name, type, isCurrentTurn, getTurn, attack }
}

export default player;