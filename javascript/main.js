const form=document.querySelector('form'),
formInput=document.querySelector('.form_input'),
formButton=document.querySelector('.btn'),
formSpan=document.querySelector('.form-span');


form.addEventListener('click', function(e){
    e.preventDefault()

    if (formInput.value > 0) {
        formSpan.textContent= ` ${((formInput.value* 9/5) + 32).toFixed(2)} F  `
    }
})