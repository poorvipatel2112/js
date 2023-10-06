const repeat = (str , times) =>{
    let result = '';
    for(let i = 0; i < times ; i++){
        result += str;
    }
    return result;
}

const scream = (str) =>{
    return str.toUpperCase() + '!!!';
}

const getRantText = (phrase) =>{
    let text = scream(phrase);
    let rant = repeat(text, 4);
    return rant;
}


const makeRant =(phrase , el) =>{
    const h1 = document.createElement('h1');
    h1.innerText = getRantText(phrase);
    el.appendChild(h1);
}

makeRant('hey there', document.body);
makeRant('good morning',  document.body);