import gameBoard from './modules/gameBoard';
import player from './modules/player';


const gameLoop = (() => {
  const playerBoard = gameBoard();
  const AIboard = gameBoard();
  const p1 = player('Gustav', AIboard, 'human');
  const AI = player('Terminator', playerBoard, 'computer');
  
})();

// The game loop should set up a new game by creating Players and Gameboards. 
// For now just populate each Gameboard with predetermined coordinates. You can 
// implement a system for allowing players to place their ships later.