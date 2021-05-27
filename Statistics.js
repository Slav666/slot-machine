class Statistics {
  constructor() {
    this.gameResult = [
      { win: true, bid: 2 },
      { win: false, bid: -10 },
    ];
  }
  addGameToStatus(win, bid) {
    let gameResult = {
      win: win,
      bid: bid,
    };

    console.log(gameResult);
    this.gameResult.push(gameResult);
  }
  showGameStatistics() {
    let games = this.gameResult.length;
    let wins = this.gameResult.filter((result) => result.win).length;
    let losses = this.gameResult.filter((result) => !result.win).length;
    // console.log(numberLosses);
    return [games, wins, losses];
  }
}

const status = new Statistics();
