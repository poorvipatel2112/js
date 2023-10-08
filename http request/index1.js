//using axios

axios
    .get('https://swapi.co/api/planets/')
    .then((res) =>{
        //we don't need to parse the json
        console.log(res.data);
    })
    .catch((err) =>{
        console.log('in catch block');
        console.log(err);
    });

axios
    .get('https://swapi.co/api/planets/fhgugv') //bad url
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log('in catch block');
        console.log(err);
    });


//chaining request using axios

const fetchNextPlanets = (url = 'https://swapi.co/api/planets/')=>{
    console.log(url);
    return axios.get(url);
};

const printPlanets = ({data}) =>{
    console.log(data);
    for(let planet of data.results){
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
}

fetchNextPlanets()
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(printPlanets)
    .catch((err) =>{
        console.log('error!!' , err);
    });