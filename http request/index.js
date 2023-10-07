const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function(){
    console.log('It worked!!!');
    //this will give response in json format
    console.log(this.responseText);
});

firstReq.addEventListener('load', function(){
    console.log('It worked!!!');
    //this will give response in javaScript
    const data = JSON.parse(this.responseText);
    console.log(data);
});

//has issue: showing data.results is not iterable
firstReq.addEventListener('load', function(){
    console.log('It worked!!!');
    //this will give response in javaScript then iterating over it and printing data
    const data = JSON.parse(this.responseText);
    for(let planet of data.results){
        console.log(planet.name);
    } 
});


firstReq.addEventListener('error', ()=>{
    console.log('Error....');
});

firstReq.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
firstReq.send();
console.log('Request sent!');