const form = document.querySelector('#signup-form');

const ename = document.querySelector('#name');
const termsCond = document.querySelector('#terms');
const technology = document.querySelector('#tech');

//ok-okay way

form.addEventListener('submit', function(e){
    alert('Form Submitted Successfully');
    console.log('name', ename.value);
    console.log('terms', termsCond.value);
    console.log('tech', technology.value);
    //it prevents error from mapping login as we haven't coded that
    e.preventDefault();

    //send form data to do something
    //append something to  page using form data
});



ename.addEventListener('input', e =>{
    console.log('name changed', e);
    FormData['cc'] =e.target.value;

});

termsCond.addEventListener('input',e =>{
    console.log('terms and conditions are updated',e);
    FormData['terms'] = e.target.checked;
});

technology.addEventListener('input' , e=>{
    console.log('technology assigned' ,e);
    FormData[tech] = e.target.value;
});


//efficient way

const FormData ={};
for(let input of [ename,termsCond ,technology]){
    input.addEventListener('input', e =>{
        console.log(e.target.name , 'changed');
    });
}
