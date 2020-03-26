// Theh Draw class is a class whhich will creates us a new object each time wi click the button "Zakręć"'

// For te purpose for drawin the fruits - we will see later
// <img src="./images/fruits.jpeg" alt="Kosz Owoców">
// <img src="./images/seven.png" alt="Numer Siedem">
// <img src="./images/apple.jpeg" alt="Jabłko">
// <img src="./images/banana.jpeg" alt="Banan">
// <img src="./images/cherry.jpeg" alt="Wiśnia">
// <img src="./images/tomato.jpeg" alt="Pomidor">
class Draw {
    // the constructor returns new object which will have theh access to our variable _result, where will be stored objects drawed in the drawResult() method.
    constructor() {
            // Te array with our objects of our  
            this.options = [{
                    link: './images/fruits.jpeg',
                    name: 'Kosz Owoców',
                },
                {
                    link: './images/seven.png',
                    name: 'Numer Siedem',
                },
                {
                    link: './images/apple.jpeg',
                    name: 'Apple',
                },
                {
                    link: './images/banana.jpeg',
                    name: 'Banana',
                },
                {
                    link: './images/cherry.jpeg',
                    name: 'Wiśnia',
                },
                {
                    link: './images/tomato.jpeg',
                    name: 'Pomidor',
                },
            ];
            // the variable which will store the score of our drawing
            // Hhere we can pass the results from the draw result method.
            let _result = this.drawResult();
            // Methode created inside constructor for having n acces to the _result variable
            this.getDrawResult = () => _result;
        }
        // Methodes inside prototype which lets to the other methodes access to the information it containes;
    drawResult() {
        // The get results will be forwarded to the variable created inside the drawResult method
        let images = [];
        // Now through the for loop we are building the array of drawed objects from options
        for (let i = 0; i < 3; i++) {
            // Now we need to draw the index in that loop
            const optionsIndex = Math.floor(Math.random() * this.options.length);
            // Now we need to get specified object from the options array
            const image = this.options[optionsIndex];
            // check if it works
            console.log(image);
            // And now we need to push the drawed object with image parameters into the images array.
            images.push(image);
        }
        // That method only returns the images and pass them to the _result variable.
        return images;
    }
}


// For checking if it works we need to crreate an instance of tat class
// const drawedImage = new Draw();