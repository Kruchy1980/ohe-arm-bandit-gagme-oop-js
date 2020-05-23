// Here is the class which will display all the stats about the drqaw results
// It will be the:
//1. How much have you win/lost - the value added / deducted to / from wallet.
//2. Games summary
//3. Winnigs - total
//4. Lost  - total
class Statistics {
    // Theh method constructor will create us the array which will be an array of results
    constructor() {
            // will be created empty array where thanks to methohdes we will insert theh results
            // On the beginning for tests we can add couple objects inside the property array
            // The object will have 2 datas if win and the value of bid - on the beginning theh values will be fixed
            // this.gameResults = [{ win: true, bid: 5 }, { win: false, bid: -10 }];
            this.gameResults = [];
            // later for game not fixed objects
            // this.gameResults = [];
        }
        // Just because the araray is not the private variable we can create the methodes as a prototype not a  inside theh constructor
        // The method for add the results - true or false
    addResultsToStats(win, bid) {
            // Create the object with specified data - the method now containes the result og sinfular game
            let gameResult = {
                    // Just because the name is the same as parameter we do not need to write the elements in object like win: win etc.
                    win,
                    bid,
                }
                //check what will be our result
            console.log(gameResult);
            // Push to our array the result
            this.gameResults.push(gameResult);
        }
        // Method which shows game statustics
    showGameStatistics() {
        //  Variable of the array length which is equal to total games
        let games = this.gameResults.length;
        // Wins Quantity - filter the array by the win === true
        let wins = this.gameResults.filter(element => element.win).length;
        // check
        console.log(wins);
        // Loses Quantity - filter the array by the win !== true
        let lost = this.gameResults.filter(element => !element.win).length;
        // check
        console.log(lost)
            // By this method we want just to show the total games, total wins and total losses in our display window
        return [games, wins, lost];
    }
}
// Now needed in finished game so we can comment that
// ----------------------------------------------
// // Check if the class is working by creating the instance
// const stats = new Statistics();
// // log it for check
// console.log(stats);
// // Check if the add Results mthod is working
// console.log(stats.addResultsToStats(true, 8));
// // Check if the add Results mthod is working for false
// console.log(stats.addResultsToStats(false, -3));
// // check if our array is updated
// console.log(stats.gameResults);
// // check if game results length is displayed correctly
// console.log(stats.gameResults.length);
// // Check if the wins and looses will be displayed
// console.log(stats.showGameStatistics());