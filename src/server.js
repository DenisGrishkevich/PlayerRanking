const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.static("public"));

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/playerRankingDB");

const playerSchema = new mongoose.Schema({
    nickname: String,
    score: Number,
    color: String,
});
const Player = mongoose.model("Player", playerSchema);

createPlayers();

// ENDPOINTS:
app.get("/ranking", function(req, res) {
    Player.find(function(err, players) {
      if (err) {
        return console.error(err);
    }
    res.json(players);
    });
  });



app.listen(3001, function(){
    console.log("Server started on port 3001");
})



// functions for generate content
// add random number to score
async function updateRandomScore() {
    while (true){
      Player.find(function(err, players) {
        if (err) {
          return console.error(err);
        }
        if (players.length != 0) {
          const randomPlayer = players[Math.floor(Math.random() * players.length)];
          randomPlayer["score"] += Math.floor(Math.random() * 9);
          randomPlayer.save();
        }
      });
      await new Promise(r => setTimeout(r, 1000));
    }

}

// create players if db is empty
function createPlayers() {
  Player.find(function(err, players) {
    if (err) {
      return console.error(err);
    }
    if (players.length == 0) {
      const playerOne = new Player({nickname: "Mark", score: 0, color: "Red"});
      const playerTwo = new Player({nickname: "Nick", score: 0, color: "Green"});
      const playerThree = new Player({nickname: "Marcin", score: 0, color: "Blue"});
      const playerFour = new Player({nickname: "Anna", score: 0, color: "White"});
      const playerFive = new Player({nickname: "Eva", score: 0, color: "Black"});
      const playerSix = new Player({nickname: "Rafal", score: 0, color: "Yellow"});
      const playerSeven = new Player({nickname: "Cat", score: 0, color: "Purple"});
    
      playerOne.save();
      playerTwo.save();
      playerThree.save();
      playerFour.save();
      playerFive.save();
      playerSix.save();
      playerSeven.save();
    }
    updateRandomScore();
  });
}