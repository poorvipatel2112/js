const btn = document.querySelector('button');

btn.addEventListener('click' , function(){
    console.log("you clicked me")
});


btn.addEventListener('click' , function(){
    console.log('second time...')
});

btn.addEventListener('mouseover' , function(){
    btn.innerText = "hey there";
});

btn.addEventListener('mouseout' , function(){
    btn.innerText = "Click me";
});

window.addEventListener('scroll',function(){
    console.log("stop scrolling")
});