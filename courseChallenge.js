//challenge 1

function isvalidPassword(username,password){
    if(password.length >8 && password.indexOf(' ')===-1){
        if(password != username){
            console.log('true');
        }
    }else{ console.log('false')};
}

isvalidPassword('poorvi','poiuytrewq')



//challenge 2

function average(arr){
    const sum = arr.reduce((acc,curr)=> (acc + curr) ,0);
    const avg = sum/arr.length;
    console.log(avg);
}

average([1,2,3,4,5]);


//challenge 3

function isPangram(str){
    const strg = str.toLowerCase();
    const chr = 'abcdefghijklmnopqrstuvwxyz';

    for (let ch of chr){
        if(strg.indexOf(ch) === -1){
            console.log(false);
            return;
        }
    }
    console.log(true)
    return;

}
isPangram('hey poorvi this side')
isPangram('the quick brown fox jumps over the lazy dog')



function isAPangram(str){
    strg = str.toLowerCase();
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    for(let al of alph){
        if(!str.includes(al)){
            console.log(false);
            return;
        }
    }
    console.log(true);
}

isAPangram('hey poorvi this side')
isAPangram('the quick brown fox jumps over the lazy dog')

