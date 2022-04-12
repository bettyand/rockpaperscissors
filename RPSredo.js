/* redid my RPS assignment after 2 days of teaching 
other people and learning a lot in the process! 
to use just the playRound function, uncomment the console logs. 
to use the full program, leave those commented out and enjoy! */

const hands = ["rock", "paper", "scissors"];

function getHand() 
{
    return parseInt(Math.random() * 10) % 3;
}

const betty =
{
    name: "Betty",
    getHand
}

const chris =
{
    name: "Chris",
    getHand
}

const joseph =
{
    name: "Joseph",
    getHand
}

const darci =
{
    name: "Darci",
    getHand
}

function playRound(p1, p2) 
{
    p1hand = p1.getHand();
    p2hand = p2.getHand();

    console.log(`${p1.name} played ${hands[p1hand]} and ${p2.name} played ${hands[p2hand]}...`)

    if (p1hand === p2hand) 
    {
        // console.log("womp womp :/");
        return null;
    }
    else if ((p1hand === 0 && p2hand === 2) || (p1hand === 1 && p2hand === 0) || (p1hand === 2 && p2hand === 1)) 
    {
        // console.log(`${p1.name} winz!`);
        return p1;
    }
    else 
    {
        // console.log(`${p2.name} winz!`);
        return p2;
    }
}

function playGame(player1, player2, playUntil) 
{
    let p1wins = 0;
    let p2wins = 0;
    let roundNumber = 0;

    console.log(`In the red corner, ${player1.name}! In the blue corner, ${player2.name}! On the count of 3... FIGHT!`);

    while (p1wins < playUntil && p2wins < playUntil) 
    {
        let roundWinner = playRound(player1, player2);
        roundNumber++;
        
        if (roundWinner === player1) 
        {
            p1wins++;
            console.log(`${player1.name} wins round ${roundNumber}!`)
        }
        else if (roundWinner === player2) 
        {
            p2wins++;
            console.log(`${player2.name} wins round ${roundNumber}!`)
        }
        else if (roundWinner === null)
        {
            console.log(`Round ${roundNumber} is a tie :/`)
        }
    }
    if (p1wins === playUntil)
    {
        console.log(`Tonight's victor is ${player1.name}! :^D`)
        return player1;
    }
    else if (p2wins === playUntil)
    {
        console.log(`After ${roundNumber} grueling rounds, the victor is ${player2.name}! :^D`)
        return player2;
    }
}

function playTournament(c1, c2, c3, c4, playUntilTourney)
{
    let game1winner = playGame(c1, c2, playUntilTourney);
    console.log(`${game1winner.name} advances to the finals!`)
    let game2winner = playGame(c3, c4, playUntilTourney);
    console.log(`${game2winner.name} advances to the finals!`)
    console.log(`And now, the moment you've all been waiting for... ${game1winner.name} vs ${game2winner.name} in an epic showdown of brains and brawn ~OwO~`)
    let tourneyWinner = playGame(game1winner, game2winner, playUntilTourney);
    console.log(`The grand RPS champion of the known universe is ${tourneyWinner.name}!! Join us for the afterparty! B^]`);
}

playTournament(betty, chris, joseph, darci, 3);