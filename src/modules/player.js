const player = (moniker, typeOfPlayer) => {
  const name = moniker;
  const type = typeOfPlayer;
  const isCurrentTurn = false;
  const attack = (board, x, y, axis) => board.incoming(x, y, axis);

  return { name, type, isCurrentTurn, attack }
}

export default player;