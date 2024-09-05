import Player from "./Player";

export class Team{
    players: Player[];
    teamname: string;
    constructor(teamname: string, players: Player[]){
        this.teamname = teamname;
        this.players = players;
    }
    addPlayer(newPlayer:Player):void{
        this.players.push(newPlayer);
    }
    removePlayer(index: number):void{
        this.players.splice(index, 1);
    }
    setActive(index:number, activeChoice:boolean):void{
        this.players[index].active = activeChoice;
    }
    getPlayerCount():number{
        return this.players.length;
    }

    logActivePlayers():void{
        this.players.forEach(p => {
            if(p.active === true){
                console.log(p);
            }
        })
    }
    getActivePlayers():Player[]{
        let activePlayers:Player[] = [];
        this.players.forEach(p => {
            if(p.active === true){
                activePlayers.push(p);
            }
        })
        return activePlayers;
    }
}