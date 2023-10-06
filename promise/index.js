const HappyOrNot = new Promise((resolve ,reject) => {
    const prob = Math.random;
    if(prob<0.5){
        resolve();
    }
    else{
        reject();
    }
});

HappyOrNot.then(() => {
    console.log('Happy!!!!');
});

HappyOrNot.catch(() =>{
    console.log('Sad....');
});

