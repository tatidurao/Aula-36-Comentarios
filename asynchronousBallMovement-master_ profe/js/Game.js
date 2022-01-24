class Game{
    constructor(){}
//função dessa classe: ler os estado do jogo do banco de dados
    getState(){ //ler o estado de jogo que esta no banco
        //ref é a localização do valor do banco de dados
        var gameStateRef = database.ref('gameState');

        gameStateRef.on("value", function(data){
            //salva na variavel global declara no scktch.js
            gameState = data.val();
        })
    }
//função que irá atualizar o estado de jogo no banco para o valor passado entre ()
    update(state){
        database.ref('/').update({
            gameState: state
        });
    
    }

    start(){
        if(gameState === 0){
            //criar jogador
            player = new Player();
            //adicionar o jogador na contagem nº
            player.getCount();
            //mostrar formulario de cadastro
            form = new Form()
            form.display(); 

        }

    }





}