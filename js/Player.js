    class Player{
    constructor(){
        this.index=null,
        this.distance=0,
        this.name=null
    }

    getCount(){
        var pcref = database.ref('playerCount');
        pcref.on("value",function(data){
            playerCount = data.val();
        }) 
    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }

    update(){
        var playerindex="players/player"+this.index;
        database.ref(playerindex).set({
            name:this.name,
            distance: this.distance
        })
    }
    static getplayerInfo(){
        var playerinfo = database.ref('players');
        playerinfo.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}