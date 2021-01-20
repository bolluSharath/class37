class Game{
    constructor(){

    }
    getState(){
        var gsref = database.ref('gameState');
        gsref.on("value",function(data){
            gameState = data.val();
        })  
    }
    update(state){
        database.ref('/').update({
            gameState : state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(30);
        text("gameStart",250,250)
        Player.getplayerInfo();

        if(allPlayers !== undefined){
           var  display_position=300;
           for(var plr in allPlayers){
               if(plr === "player"+ player.index)
                    fill(255,0,0)
                else
                    fill("black")
                    
                display_position+=30
                textSize(18)
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance,350,display_position);
           }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 20;
            player.update();
            console.log("arrow key pressed")
        }
    }
}