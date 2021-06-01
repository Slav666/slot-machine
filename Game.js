class Game {
  constructor(start) {
    
    this.stats = new Statistics();
    this.wallet = new Wallet(start);

    document.getElementsById("start").addEventListener("click", this.startGame);
    this.spanWallet = document.querySelector(".panel span.wallet");
    this.boards = document.querySelectorAll("div.color");
    this.inputBid = document.getElementById("bid");
    this.spanResult = document.querySelector(".score span.result");
    this.spanGames = document.querySelector(".score span.number");
    this.spanWins = document.querySelector(".score span.win");
    this.spanLosses = document.querySelector(".score span.loss");

    this.render();
  }
  render() {
    console.log("Let's play!");
    // this.spanWallet.textContent = 200;
  }
  startGame() {}
}

const game = new Game(200);
