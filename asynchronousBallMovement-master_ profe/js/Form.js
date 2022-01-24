class Form{
    constructor(){}

/*
    head (cabeçalho): onde todos os
    scripts e folhas de estilo da página
    são adicionados.

    body(corpo) : onde todo o conteúdo
    da página é adicionado.
    
    h1, h2, h3: exibe cabeçalhos de
    tamanhos diferentes.
    */

    display(){
//texto
    var title = createElement('h2');// cabeçalho
    title.html("Car Racing Game");  //formato
    title.position(130, 0); //posição x e y na tela

   
    var input = createInput("Name");  //caixa de texto
    var button = createButton('Play'); // botão
    input.position(130, 160);
    button.position(250, 200);

    button.mousePressed(function(){// quando clicar no botão
       
        input.hide();//esconde
        button.hide(); //esconde 

        var name = input.value(); //pega o nome da caixa de texto e salva na variavel nome

        playerCount+=1; // conta 1 jogador no contador

        //atualiza no banco de dados as informações do jogador
        player.update(name)
        player.updateCount(playerCount);

        //saudação
        var greeting = createElement('h3');
        greeting.html("Hello " + name );
        greeting.position(130, 160);

    })
    

    }
}