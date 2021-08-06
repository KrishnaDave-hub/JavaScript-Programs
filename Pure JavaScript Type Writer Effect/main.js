// const TypeWriter = function (txtElement, words, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }

// // Type Method
// TypeWriter.prototype.type = function () {
//     // Current Index of Word
//     const current = this.wordIndex % this.words.length;
//     // Get Full Text of Current Word
//     const fullTxt = this.words[current];

//     // Check If Deleting
//     if (this.isDeleting) {
//         // Remove Char
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//         // Add Char
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     // Insert txt Into Element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//     // Init Type Speed
//     let typeSpeed = 300;

//     if (this.isDeleting) {
//         typeSpeed / 2;
//     }

//     // if word is complete
//     if (!this.isDeleting && this.txt === fullTxt) {
//         // Make pause at end
//         typeSpeed = this.wait;
//         // Set delete to true
//         this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         // Move to next word
//         this.wordIndex++;
//         // Pause Before start typing
//         typeSpeed = 500;
//     }

//     setTimeout(() => this.type(), typeSpeed);
// }


// ES6 Class
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    type() {
        // Current Index of Word
        const current = this.wordIndex % this.words.length;
        // Get Full Text of Current Word
        const fullTxt = this.words[current];

        // Check If Deleting
        if (this.isDeleting) {
            // Remove Char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add Char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt Into Element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Init Type Speed
        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed / 2;
        }

        // if word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause Before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}
// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = JSON.parse(txtElement.getAttribute('data-wait'));
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}