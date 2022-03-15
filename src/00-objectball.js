function gameObject(){ 
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players:{
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assist: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assist: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assist: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assist: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assist: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players:{
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assist: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assist: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assist: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assist: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assist: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                },
            }    
        }

    }
}

function getPlayers(){
    return Object.assign(getHomeTeam().players, getAwayTeam().players);
}

function getHomeTeam(){
    return gameObject().home
}
function getAwayTeam(){
    return gameObject().away;
}

function getTeams(){
    return Object.values(gameObject());
}

function getPlayerMax(obj, cond){
    let name= '';
    let max = 0
    for(e in obj){
        if(obj[e][cond] > max){
            name = e;
            max = obj[e][cond];
        }
    }
    return name
}

function homeTeamName(){
    let obj = gameObject();
    return obj['home']['teamName'];
}
 function numPointsScored(name){
        return getPlayers()[name].points
    }

function shoeSize(name){
    return getPlayers()[name].shoe;
}

function teamColors(team){
     const teams = getTeams();
    return teams.find(teams => teams.teamName === team).colors;
}

function teamNames(){
    const teams = getTeams();
    return teams.map(teams => teams.teamName);
}

function playerNumbers(team){
    const players = getTeams().find(teams => teams.teamName === team).players;
    playerInfo = Object.values(players)
    return playerInfo.map(playerInfo => playerInfo.number);
}

function playerStats(name){
    const players = getPlayers();
    return players[name];
}


function bigShoeRebounds(){
    const players = getPlayers();
    let name = getPlayerMax(players, 'shoe');
    return players[name].rebounds;
}


function mostPointsScored(){
    const players = getPlayers();
    return getPlayerMax(players,'points');
}

function winningTeam(){
    let homePlayers = Object.values(getHomeTeam().players);
    let homePoints = homePlayers.reduce((acc, item) => acc+=item.points, 0);
    let awayPlayers = Object.values(getAwayTeam().players);
    let awayPoints = awayPlayers.reduce((acc, item) => acc+=item.points, 0);

    return (homePoints > awayPoints ? getHomeTeam().teamName : getAwayTeam.teamName)
}

function playerWithLongestName(){
    let players = Object.keys(getPlayers());
    let longestLength = 0;
    let ind = 0; 
    players.forEach((e,i) => { 
        if(e.length > longestLength){
            longestLength = e.length;
            ind = i;
        }
    })
    return players[ind];
}

function doesLongNameStealATon(){
    let longNamePlayer = playerWithLongestName();
    let players = getPlayers();
    return (longNamePlayer === getPlayerMax(players,'steals'));
}
