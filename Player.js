class Player {
    constructor () {

    }
    getCount (){
        database.ref("playerCount").on("value",(data)=> {
            playercount = data.val () 
        })
    }
    updateCount (count) {
        database.ref("/").update({
            playerCount: count
        })
    }
    updateName (name) {
        var playerIndex = "player"+playercount
        database.ref(playerIndex).set({
            Name: name
        })
    }
}