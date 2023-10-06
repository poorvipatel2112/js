const btn = document.querySelector('button');
//normal approach
setTimeout(() =>{
    btn.style.transform = `translateX(100px)`;
    setTimeout(() =>{
        btn.style.transform = `translateX(200px)`;
    },2000);
},1000);


//better approach
const moveX = (element,amount,delay, callback) =>{
    setTimeout (() =>{
        element.style.transform = `translateX(${amount}px)`;
        if(callback) callback();
    },delay);
}

moveX(btn,100,1000, () =>{
    moveX(btn,200,2000,() =>{
        moveX(btn,300,3000,() =>{
            moveX(btn,400,4000);
        });
    });
});