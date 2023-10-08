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


//using fetch

fetch('https://api.api-ninjas.com/v1/planets/').then((response) =>{
    if(!response.ok)
        throw new Error(`Status code error: ${response.status}`);


    response.json().then((data)=>{
        for(let planet of data.results){
            console.log(planet.name);
        }
    });
})

.catch((err) =>{
    console.log('something went wrong with fetch');
    console.log(err);
});

//chaining multiple requests

fetch('urls')
    .then((response) =>{
        if(!response.ok)
            throw new Error(`status code error: ${response.status}`);

            return response.json();
    })
    .then((data)=>{
        console.log('Fetched all planets(first 10)');
        const filmURL = data.results[0].films[0];
        return fetch(filmURL);
    })
    .then((response) =>{
        if(!response.ok)
            throw new Error(`status code error : ${response.status}`);

            return response.json();
    })
    .then((data) =>{
        console.log('fetched first film, based on first planet');
        console.log(data.title);
    })
    .catch((err) =>{
        console.log('something went wrong with fetch');
        console.log(err);
    });


//refactoring fetch chains
const checkStatusAndParse = (response) =>{
    if(!response.ok) throw new Error(`status code error ${response.status}`);
    return response.json();
};

const printPlanets = (data) =>{
    console.log('loaded 10 more planets...');
    for(let planet of data.results){
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
};

const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
    return fetch(url);
};

fetchNextPlanets()
    .then(checkStatusAndParse)
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(checkStatusAndParse)
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(checkStatusAndParse)
    .then(printPlanets)
    .catch((err) =>{
        console.log('something went wrong with fetch');
        console.log(err);
    });