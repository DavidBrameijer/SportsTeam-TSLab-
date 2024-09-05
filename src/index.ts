import { Team } from "./Team";
import Player from "./Player";

let Jordan:Player = {
    name: "Michael Jordan",
    jersey: 23,
    active: false,
}
let Rodman:Player = {
    name: "Dennis Rodman",
    jersey: 69,
    active: false,
}
let Pippen:Player = {
    name: "Scottie Pippen",
    jersey: 4,
    active: false,
}
let Kerr:Player = {
    name: "Steve Kerr",
    jersey: 9,
    active: false,
}

let Bulls:Team = new Team("Chicago Bulls", [Jordan, Rodman, Pippen]);
Bulls.setActive(0, true);
Bulls.setActive(1, true);
Bulls.logActivePlayers();
Bulls.addPlayer(Kerr);
Bulls.setActive(3, true);
Bulls.logActivePlayers();
Bulls.setActive(2, true);
Bulls.logActivePlayers();
Bulls.removePlayer(0);
Bulls.logActivePlayers();
