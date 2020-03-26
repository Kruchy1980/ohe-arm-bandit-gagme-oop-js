// Here will be wallet created - is independend class
// The object wallet should store our actual state of money
//it will be the only one wallet object
class Wallet {
    // first create method constructor
    constructor(money) {
        // Money in our wallet is a private data
        let _money = money;
        // methode which lets us use our _money method it needs to be created in constructor method not prototype
        //Getting the wallet content
        this.getWalletValue = () => _money; // arrow function returns the parameter.variable we want to use so now we can use it to check what is our wallet account

        // Check if there is enough money for seet the bid
        // The method will check if there is enough money by comparing bid from input and our wallet value
        this.checkPlayingPossibility = value => {
                // Just because we are returning one parameter there is no need to use the curly brackets
                if (_money >= value) return true;
                return false
            }
            // The third method is checking and updating our wallet if we win or loose
            // The second parameter type is responsible for incrementing or decerementing the value of wallet - defined on incrementing
        this.changeWalletContent = (value, type = "+") => {
            // first we need to check if value is number - it should be because we have input type number but nobody knows how willl it be;)
            // So if value is a number and is not a NaN
            if (typeof value === 'number' && !isNaN(value)) {
                // if type = + it means that we want to add the value to our wallet
                if (type === '+') {
                    // than increase our wqallet by the bid value
                    return _money += value;
                    // else  if our type  = - 
                } else if (type === '-') {
                    // Than decrease our wallet by the bid value
                    return _money -= value;
                    // If not any of cses above
                } else {
                    // throw an error to console
                    throw new Error(`${typeof type} Działanie nieprawidłowe`);
                }
                // continuation of first if so if the value won't be a number
            } else {
                // show in console type of value
                // console.log(typeof value);
                // and throw an error as well
                throw new Error(`${typeof value} - To nie jest numer!`);
            }
        }
    }

}

// In a game usage we do not need that this is only fo checking when the game is under construction

// // Here we can set the instance of wallet for check and create our basic first wallet
const wallet = new Wallet(1000);
// // Checking and logging the wallet value by usung on object the methoode  getWalletValue
// console.log(wallet.getWalletValue());
// // Just for now checking if the checkPlayuinPossibility method is working
// // We will check the border values from top extreme
// console.log(wallet.checkPlayingPossibility(1001));
// console.log(wallet.checkPlayingPossibility(1000));
// console.log(wallet.checkPlayingPossibility(999));
// // Check the change wallet content
// // Incremential
// console.log(wallet.changeWalletContent(10, '+'));
// // Decremential
// console.log(wallet.changeWalletContent(100, '-'));
// // Error check of inner data - comment if you want to notice next error
// // console.log(wallet.changeWalletContent(10, 'cos'));
// // Error check of input data  != Number - comment if you want to notice next error
// // console.log(wallet.changeWalletContent('10', '+'));
// // Check if NaN will be errored as well - comment if you want to check the methodes corredt work
// // console.log(wallet.changeWalletContent(NaN, '+'));