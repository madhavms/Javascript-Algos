const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
    // Write your code here.
    
    let curentBestTeam = '';
    const scores = {[curentBestTeam]: 0};

    for (let idx = 0; idx < competitions.length; idx++){

        const result = results[idx];

        const [homeTeam, awayTeam] = competitions[idx];

        const winningTeam = result ? homeTeam: awayTeam;

        updateScores(winningTeam, 3, scores);

        if (scores[winningTeam] > scores[curentBestTeam]){
            curentBestTeam = winningTeam;
        }
    }

    return curentBestTeam;
  }

  function updateScores(team, points, scores){
      if (!(team in scores)) scores[team] = 0;
      scores[team] += points;
  }
  
  let competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ];

  let results = [0, 1, 0];

  console.log(tournamentWinner(competitions, results));



  