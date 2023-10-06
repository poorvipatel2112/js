//very basic program of promise
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

//using delay of 5sec

const YesOrNot = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        const prob = Math.random();
    if(prob<0.5){
        resolve();
    }
    else{
        reject();
    }
    },5000);
});

YesOrNot.then(() => {
    console.log('Yeahh!!!!');
});

YesOrNot.catch(() =>{
    console.log('Nooo....');
});

//another way of writing same thing
const makeNewpromise = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const prob = Math.random();
        if(prob<0.5){
            resolve();
        }
        else{
            reject();
        }
        },5000);
    });
}

makeNewpromise.then(() => {
    console.log('yup..');
});

makeNewpromise.catch(() => {
    console.log('nope');
});


//resolving and rejectiong with values;
const fakeRequest = (url) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
                const pages = {
                    '/users' : [
                        {id : 1, username : 'poorvi'},
                        {id: 2,username:'rachit'}
                    ],
                    '/about' : 'This is the about page'
                };
                const data = pages[url];
                if(data){
                    resolve({status: 200, data});
                }else{
                    reject({status : 404});
                }
        },3000)
    });
};

fakeRequest('/users').then((res) =>{
    console.log('status code' , res.status)
    console.log('data', res.data)
    console.log('real one')
}).catch((res) =>{
    console.log(res.status);
    console.log('fake one')
});

fakeRequest('/dogs').then((res) =>{
    console.log('status code' , res.status)
    console.log('data', res.data)
    console.log('real one')
}).catch((res) =>{
    console.log(res.status);
    console.log('fake one')
});