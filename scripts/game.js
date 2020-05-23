// This class connects all the other classes together to make the game working
// That class will need a lot of properties, and methohdes eg changeable HTML Elements, other classes methodes
// Class Game
class Game {
    // Constructor method which collects all the elemetnwe need in here
    constructor(start) {
            // Properties which is needed to created the instances as wallet and statiscics
            // The refresh button
            const restart = document.querySelector('.restart');
            restart.addEventListener('click', () => {
                window.location.reload();
            });
            // Modal window instruction add
            const instruction = document.querySelector('.legend');
            instruction.addEventListener('click', modalToggle);
            //  class Statistics
            this.stats = new Statistics();
            // class Wallet with the money property for the bginning
            this.wallet = new Wallet(start);

            // All needed elements to display;
            // 1. We need to upload the creted button and qdd an event listener to the start button which is reffered to the start game method.
            // We need to rememgber to bind this to this method to have not problems with callback the startGame method later in this class method prototype
            document.getElementById('start').addEventListener('click', this.startGame.bind(this));
            // now we need to uplosd some elements
            // 2. Wallet and assign to the variable to assign it to the property of span wallet
            this.spanYourWallet = document.querySelector('.info span.your-wallet');
            // 3. Images exchanged frome noe aray to the common rray
            this.imagesBoard = [...document.querySelectorAll('.image')];
            // 4. Input
            this.bidInput = document.getElementById('bid');
            // 5. The Game/Score result
            this.spanResult = document.querySelector('.score span.result');
            //6. The Total Games
            this.spanTotalGames = document.querySelector('.score span.total-games');
            //7. The Win Games
            this.spanWinGames = document.querySelector('.score span.win-games');
            //8. The Lost Games
            this.spanLostGames = document.querySelector('.score span.lost-games');

            // And for the end of constructor we need to create the refference to our method render
            this.render();
        }
        // The render method which is responsible for rendering/displaying elements.  With defined initial wallet quantity - will be updated as in the game.
    render(images = [{ link: './images/play.png', name: 'start' }, { link: './images/play.png', name: 'start' }, { link: './images/play.png', name: 'start' }], money = this.wallet.getWalletValue().toFixed(2), result = '', stats = [0, 0, 0], wonQuantity = 0, bid = 0) {
            // Check if it is working
            // console.log('Do dzieła');
            // 1.Initial images in windows of game
            this.imagesBoard.forEach((image, index) => {
                image.innerHTML = `<img class="image" src="${images[index].link}" alt="${images[index].name}" title="${images[index].name}">`;
            });
            // Let's on the beginning when the page will be displayed eg:
            // 2.We can add the wallet render with the initial value
            this.spanYourWallet.textContent = money;
            // 3.Result - empty as initial - will depend on result so it is good to use the conditional statement in here
            if (result) {
                result = `Wygrałeś: ${wonQuantity} $.`
            } else if (!result && result !== '') {
                result = `Przegrałeś ${bid} $.`
            }
            // displaying in the browser
            this.spanResult.textContent = result;
            // 4.Total Games - initial value
            this.spanTotalGames.textContent = stats[0];
            // 5. Winning Games - initial value
            this.spanWinGames.textContent = stats[1];
            // 6. Winning Looses - initial value
            this.spanLostGames.textContent = stats[2];
            // 7. As well we can clear our content of input after every draw
            this.bidInput.value = 'Podaj stawkę';
        }
        // Method which executes all the elements of game without the render methohd so will not display the elements on the page
        // Tah method will be called back every time we push te button 'Zagraj'
    startGame() {
        // 1. Ceck if te rate is larer on equal to our wallet value
        // Just beacuse of using the reference to bidInput here we can not use the 'this' because 'this' in here is not the game class 
        // Check what the 'this' is in here without binding
        // console.log(this);
        // Without binding the eventListener we need to use such a code
        // if (game.bidInput.value < 1) return alert('Kwota, którą chcesz grać jest za mała - Minimalna stawka to 1 $');
        // When we use the bind method in event Listener we are reffering to the clas properties so we can use 'this' in that method as well
        if (this.bidInput.value < 1) return alert('Minimalna stawka to 1 $');
        // We can use rounding rate if someone would like to set the rate with decimals - better to lower value bedause there is never now if user would like to set more than he can beside MAth method will change our string to number;
        const bid = Number(this.bidInput.value);
        // Chek what kind of type the bid is
        console.log(bid, typeof bid);
        // 2. Now we can use another statement which will check if the user can play or not
        // if can not
        if (!this.wallet.checkPlayingPossibility(bid)) return alert(`
        Nie masz tylu pieniędzy - ${bid.toFixed(2)} :( ! 
        Spróbuj  postawić inną stawkę.
        `);
        // 3. Now is the time to gather money by mavhine for bet
        this.wallet.changeWalletContent(bid, '-'); // type  = - because we are paying for game !!! it is not a result of winning or loose
        // 4. Now we create the instance of draw class
        this.draw = new Draw();
        // 5. Now after creating object we can get the result array and assign it to variable which will be used for two things:
        // a. Render drawed images
        // b. Checking if the user has won or not.
        const images = this.draw.getDrawResult();
        // ad b. check the drawing result !!! just because the Result class uses the sttic method, we need to call all class not only methodes
        const win = Result.checkWinnerResult(images);
        // now we can check the game result
        console.log(win);
        // 6. Now we can use the second static method from result class which is responsible for updating the wallet.
        // Use the varible because will be used in couple places
        const moneyWon = Result.moneyWonQuantity(win, bid);
        // Check if and what we won
        console.log(moneyWon);
        // 7. Updating wallet by adding the moneyWon we do not need to use other statement because we are adding 0 or wining result to our wallet
        this.wallet.changeWalletContent(moneyWon);
        // 8. Now time for statistics update 
        this.stats.addResultsToStats(win, bid);
        // 9 No3 ie time for rendering all the elementw we want to render
        this.render(images, this.wallet.getWalletValue().toFixed(2), win, this.stats.showGameStatistics(), moneyWon, bid);
    }
}

// // That all will be executed when we create the instance of that object start is start money
// const game = new Game(200);