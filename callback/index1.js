const btn = document.querySelector('button');
//normal approach
setTimeout(() =>{
    btn.style.transform = `translateX(100px)`;
    setTimeout(() =>{
        btn.style.transform = `translateX(200px)`;
    },2000);
},1000);


// better approach
const moveX = (element,amount,delay, callback) =>{
    const bodyBoundary =document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currLeft = element.getBoundingClientRect().left;
    if(elRight + amount > bodyBoundary){
        console.log('Done- cannot go that far');
    }
    else{
        setTimeout (() =>{
            element.style.transform = `translateX(${amount}px)`;
            if(callback) callback();
        },delay);
    }
};

moveX(btn,100,1000, () =>{
    moveX(btn,200,2000,() =>{
        moveX(btn,300,3000,() =>{
            moveX(btn,400,4000);
        });
    });
});



// const moveX = (element, amount,delay,successCallback,failCallback) =>{
//     setTimeout(() =>{
//         const max = document.body.clientWidth;
//         const dimensions = element.getBoundingClientRect();
//         const currentRight = dimensions.x + dimensions.width;
//         if(currentRight + amount>max){
//             failCallback();
//         }
//         else{
//             element.style.transform = `translateX(${currentRight + amount}px)`;
//             successCallback();
//         }
//     },delay);
// };