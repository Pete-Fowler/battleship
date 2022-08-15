const player = (moniker, typeOfPlayer) => {
  const name = moniker;
  const type = typeOfPlayer;
  const isCurrentTurn = false;
  const attack = (board, x, y) => board.incoming(x, y);

  return { name, type, isCurrentTurn, attack }
}

export default player;