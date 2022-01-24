var canvas, backgroundImage

var gameState = 0; //esperar

var playerCount;//quantos jogadores

var database; //acessar banco

var form, player, game;

function setup(){
      //chama o banco de dados no nosso jogo
    database = firebase.database();
    console.log(database);

    canvas =  createCanvas(500,500);

    game = new Game();
    game.getState();
    game.start();

   
   

}

function draw(){
    background("white");

   
}
