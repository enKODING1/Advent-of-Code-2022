function getNumArray(section_id) {
    let id = section_id.split('-')
    let start = parseInt(id[0]);
    let end = parseInt(id[1]);
    let idArray = [];


    for (let i = start; i <= end; i++) {
        idArray.push(i);
    }

    return idArray;
}

function getPairValue(pair1, pair2) {
    let false_count = 0;
    pair1.filter((word) => {
        if(!pair2.includes(word)){
            false_count++;
        }
    })
    
    if(false_count == pair1.length){
        return 0;
    }
    return 1;
}

function getPairScore(pair1, pair2) {
    if (pair1.length < pair2.length) 
    {
  
        return getPairValue(pair1, pair2);
        
    } 
    else if (pair1.length === pair2.length) 
    {
       
        return getPairValue(pair1, pair2);

    }
   
    return getPairValue(pair2, pair1);
}


let section_id = $0.innerText.split('\n');

let sum = 0;

for(let i=0 ;i < section_id.length-1 ;i++){
    let id = section_id[i].split(',');

    let id1 = getNumArray(id[0]);
    let id2 = getNumArray(id[1]);
    
    sum += getPairScore(id1 , id2);
    console.log(`>> ${id1}, ${id2}`);
}

console.log(`result >>> ${sum}`);

 