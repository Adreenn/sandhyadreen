class Game {
    constructor () {

    }
    getState(){
        database.ref("gameState").on("value",(data)=> {
            gamestate = data.val () 
        })
    }
    updateState (state){
        database.ref("/").update({
            gameState: state
        })
    }
    start () {
        if (gamestate == 0) {
            player = new Player ()
            player.getCount ()
            form = new Form()
            form.display()
            console.log("start is working")
        }
    }
}