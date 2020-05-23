// That class i responsible for displaying results on the game page.
// That class is created for storing the results of game so that class will check if the displayed images are the winers or not. 
// That class does not need constructor beause the class won't need any instance that class will store just two methodes without creating instance -the methodes will be:
// 1. Method which returns the result with winning conditions
// 2. Is telling us what the user won.


// 1. Crete class Result
class Result {
    // In that class we will use the static method because of not using instance of that class
    // First method static - static method is showing us that the method is availible only from the level of the class the method is created
    // // Created to show how works the static method
    // static show() {
    //     console.log('pokazuje')
    // }
    //  Now the method used - the method which returns our money
    static moneyWonQuantity(result, bid) { //result is returning  true or false as in our game we have two parameters win and type where win is the boolean
            // Bid means the money quantity which we assumed
            //  Now implementation
            //  Now we can implement the condition statement
            if (result) return 5 * bid; // if we win than return the sum of bit multiply by 5.
            //  In every other case
            else return 0;
        }
        //  Now the rules of winning - where we assign the array from the Draw method
    static checkWinnerResult(draw) {
        // conditional statement responsible for determination of winning rules
        if (draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[0] !== draw[2] && draw[1] !== draw[2]) return true;
        // If there is no such a result than
        else return false;
    }

}
// // The code below is needed onlu for check it the methodes are working
// // For check we can callback the result method
// // Result.show();
// // Check if the moneyWonQuantity method works
// //  If we won
// console.log(Result.moneyWonQuantity(true, 4))
//     //  If we lose
// console.log(Result.moneyWonQuantity(false, 8))
//     // check if the second method works
// console.log(Result.checkWinnerResult([{ link: 1, name: 2 }, { link: 1, name: 2 }, { link: 1, name: 2 }]));
// // or
// console.log(Result.checkWinnerResult([{ link: 1, name: 1 }, { link: 2, name: 2 }, { link: 3, name: 3 }]));
// // If condition is not met
// console.log(Result.checkWinnerResult([{ link: 2, name: 2 }, { link: 1, name: 1 }, { link: 2, name: 2 }]));