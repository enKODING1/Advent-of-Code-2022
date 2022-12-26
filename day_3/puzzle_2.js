class Finder {

    constructor(str1, str2, str3) {

        this.str =
            [{ str: str1.split(""), len: str1.length },
            { str: str2.split(""), len: str2.length },
            { str: str3.split(""), len: str3.length }];

        this.value = undefined;
        this._sort();
        this._getAlphabet();


    }

    _sort() {
        this.str.sort((a, b) => { return a.len - b.len });
    }


    _getAlphabet() {
        const str1 = this.str[0].str;
        const str2 = this.str[1].str;
        const str3 = this.str[2].str;

        let set = [];
        str1.filter((word) => { 
            if(str2.includes(word)){
                set.push(word);
            }
        });

        set.filter((word)=>{
            if(str3.includes(word)){
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

let sum = 0;
let finder = [];

for (let i = 0; i < key_length-1; i+=3) {
    finder.push(new Finder(key_array[i],key_array[i+1],key_array[i+2]));
    console.log(`${i} >> ${key_array[i]}`);
}

for (let i = 0; i < finder.length ; i++) {
    sum += getScore(finder[i].value);
}

console.log(`result >> ${sum}`);