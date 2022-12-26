 
class Finder {

    constructor(str) {
        this.str = str;
        this.str_len = str.length;
        this.front = [];
        this.rear = [];
        this.value = undefined;
        this._getAlphabet()
    }

    _setHalfStr() {

        for (let i = 0; i < this.str_len; i++) {
            if (i < this.str_len / 2) {
                this.front.push(this.str[i]);
                continue;
            }

            this.rear.push(this.str[i]);
        }

    }



    _getAlphabet() {
        this._setHalfStr();

        this.front.filter((word) => {
            if (this.rear.includes(word)) {
                this.value = word;
            }
        })
    }
}



function getScore(letter) {
    let charCode = letter.charCodeAt();
 
    if (charCode >= 97 && charCode <= 122) {
        return charCode - 96;
    }

    if (charCode >= 65 && charCode <= 90) {
        return charCode - 38;
    }
}

let key_array = $0.innerText.split('\n');

let key_length = key_array.length;
let sum =0;
let finder = [];

for(let i = 0 ; i < key_length ;i++){
    finder.push(new Finder(key_array[i]));    
}

for(let i = 0 ; i < key_length-1 ;i++){
    sum += getScore(finder[i].value);
}


console.log(`>> ${sum}`);