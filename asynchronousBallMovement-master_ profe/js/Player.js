class Player{

    constructor(){}
//quantidade de jogadores no banco
    getCount(){//pega as informações que esta salvos no contador do banco
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
          playerCount = data.val();
        })
      }

      updateCount(count){//salvar a quantidade de jogadores no banco
        database.ref('/').update({
          playerCount: count
        });
      }

      update(name){//salvar o nome do jogador no banco de dados
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({//. set é usado para 'definir' o valor no banco de dados.
          name:name
        });
      }
}