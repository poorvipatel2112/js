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