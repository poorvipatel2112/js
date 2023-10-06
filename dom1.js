const colors = ['red', 'yellow','orange','blue','green','black'];

const changeColor = function(){

    const h1 = document.querySelector('h1');
    h1.style.color = this.style.backgroundColor;

    console.log(this);
    console.log(this.style.backgroundColor);
}


const container = document.querySelector('#boxes');

for(let color of colors){
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click' ,changeColor)
}

// for(let color of colors){
//     container.addEventListener('click',function(){
//         alert(color)
//     });
// }


const input = document.querySelector('#username');
input.addEventListener('keydown',function(e){
    console.log('KEY DOWN!');
});


input.addEventListener('keyup',function(e){
    console.log('KEY UP!');
});

input.addEventListener('keypress',function(e){
    console.log('KEY PRESS!');
});

const addItem = document.querySelector('#addItem');
const items = document.querySelector('#items');

addItem.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        if(!this.value) return
        //add a new item to list
        const newItemText = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newItemText;
        items.appendChild(newItem);
        this.value = '';

    }
})

