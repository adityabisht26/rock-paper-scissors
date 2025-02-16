let score= JSON.parse(localStorage.getItem('score'));
        
        // let computerMove='';  {it is a global variable but returning a variarble is more prefered because scope can help us preventing naming conflicts.}

               if(score === null) {
                score = {
                wins:0,
                losses:0,
                ties:0
              };
             } 

            UpdateScoreElement();

            let isAutoPlaying  = false;
            let intervalId;

            // const autoplay = () => {};

            // but regular function here is best suitable because it is easier to read and this function syntax
            // enables Hoisting.

            function autoplay() {
                if(!isAutoPlaying) {
                    // intervalId = setInterval(function() { 
                    intervalId = setInterval(()  => {           //  Here, we are passing a function into another 
                        const playerMove = pickComputerMove();  //  function so it's recommended to use an Arrow
                        playGame(playerMove);                   //  function.
                    }, 1000);

                    isAutoPlaying= true;
                }

                else {
                    clearInterval(intervalId);
                    isAutoPlaying = false;
                }
                
            }

            function playGame(playerMove) {
                const computerMove= pickComputerMove();

                let result='';

                if(playerMove==='scissors') {
    
                if(computerMove === 'rock') {
                    result='You Lose!';
                }
                else if(computerMove === 'paper') {
                    result='You Win!';
                }
                else if(computerMove === 'scissors') {
                    result='Tie!';
                 }
                }
                
                else if(playerMove==='paper') {

                    if(computerMove === 'rock') {
                        result='You Win!';
                    }
                    else if(computerMove === 'paper') {
                        result='Tie!';
                    }
                    else if(computerMove === 'scissors') {
                        result='You Lose!';
                    }
                }

                else if(playerMove==='rock') {

                if(computerMove === 'rock') {
                    result='Tie!';
                }
                else if(computerMove === 'paper') {
                    result='You Lose!';
                }
                else if(computerMove === 'scissors') {
                    result='You Win!';
                }
            }

            if(result==='You Win!') {
                score.wins += 1;
            }

            else if(result==='You Lose!') {
                score.losses += 1;
            }

            else if(result==='Tie!') {
                score.ties += 1;
            }
            
            localStorage.setItem('score', JSON.stringify(score));

            // localStorage only support Strings and score is an object that's why we are converting this to string by JSON.stringify();

            UpdateScoreElement();

            document.querySelector('.js-result')
                .innerHTML= `Result: ${result}`;

            document.querySelector('.js-moves')
                .innerHTML= ` You <img src="Assests/${playerMove}-emoji.png" alt="" class="move-icon">
            <img src="Assests/${computerMove}-emoji.png" alt="" class="move-icon">
            System`;


//                 alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// wins: ${score.wins}, loses: ${score.losses}, tie: ${score.ties}`);
            }

            function UpdateScoreElement() {
                document.querySelector('.js-score')
                .innerHTML= `wins: ${score.wins}, loses: ${score.losses}, tie: ${score.ties}`;

            }

            function pickComputerMove() {
                const randomNumber= Math.random();

                let computerMove='';   
                if(randomNumber >= 0 && randomNumber < 1/3) {
                    computerMove= 'rock';
                }
                else if(randomNumber >=1/3 && randomNumber<2/3) {
                    computerMove= 'paper';
                }
                else if(randomNumber>=2/3 && randomNumber<1) {
                    computerMove= 'scissors';
                } 
                return computerMove;
            }
        
        
