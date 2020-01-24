let form = document.querySelector('.create-form'),
    inputs = form.querySelectorAll('INPUT'),
    mail = document.querySelector('.create-unit-mail'),
    mailInput= mail.querySelector('INPUT'),
    pass = document.querySelector('.create-unit-pass'),
    passInput = pass.querySelector('INPUT');
function inputCheck(){
    let formSub = document.querySelector('.create-submit');
    let cnt = 0;
    for (let i = 0; i < inputs.length; i++){
        if(inputs[i].value){
            cnt++;
        }
    }
    if(cnt == 4){
        formSub.classList.add('create-submit-active');
    } else {
        formSub.classList.remove('create-submit-active');
    }
}

mailInput.addEventListener('change',function (el) {
    let mailCheck = mailInput.checkValidity();
    if(mailCheck == true){
        mail.classList.remove('create-unit-error');
    } else {
        mail.classList.add('create-unit-error')
    }
});
passInput.addEventListener('change',function (el) {
    if(passInput.value.length >= 8){
        pass.classList.remove('create-unit-error');
    } else {
        pass.classList.add('create-unit-error')
    }
});

let inputArr = document.querySelectorAll('.create-unit-input');
for(let i = 0; i < inputArr.length; i++){
    let unit = inputArr[i].parentElement;
    inputArr[i].onfocus = function (){
        unit.classList.add('create-unit-active')
    };
    inputArr[i].onblur = function (){
        if((!inputArr[i].value) && (!unit.classList.contains('create-unit-error'))){
            unit.classList.remove('create-unit-active')
        }
    }
}

document.addEventListener('click',function (el) {

    let clickTarget = el.target;
    for(let i = 0; i < inputArr.length; i++){
        if(clickTarget != inputArr[i]){
            let unit = inputArr[i].parentElement;
            if((!inputArr[i].value) && (!unit.classList.contains('create-unit-error'))){
                unit.classList.remove('create-unit-active')
            }
        }
    }

    let passBut = document.querySelector('.create-unit-pass-button'),
        passButIcon = passBut.querySelector('i');
    if(clickTarget == passButIcon){
        let passInput = passBut.previousElementSibling;
        if(passInput.getAttribute('type') == 'password'){
            passInput.setAttribute('type','text')
        } else {
            passInput.setAttribute('type','password')
        }
    }

    let select = document.querySelector('.create-unit-select'),
    selectSpan = select.querySelector('SPAN'),
    selectIcon = select.querySelector('I');
    if((clickTarget == select) || (clickTarget == selectSpan) || (clickTarget == selectIcon)){
        select.classList.add('create-unit-select-active');
    } else {
        select.classList.remove('create-unit-select-active');
    }
    let selectItem = select.querySelectorAll('.create-unit-select-item');
    for(let i = 0; i < selectItem.length; i++){
        if(clickTarget == selectItem[i]){
            select.classList.remove('create-unit-select-active');
            let selectHead = select.querySelector('.create-unit-select-head'),
                selectInput = select.querySelector('INPUT'),
                selectItemValue = selectItem[i].getAttribute('data-value');
            selectHead.textContent = selectItem[i].textContent;
            selectInput.setAttribute('value',selectItemValue);
            inputCheck();
        }
    }
    let formSub = document.querySelector('.create-submit'),
        formSubArr = formSub.querySelectorAll('SPAN');
    for(let i = 0; i < formSubArr.length; i++){
        if((clickTarget == formSubArr[i]) || (clickTarget == formSub)){
            let mail = document.querySelector('.create-unit-mail');
            let mailCheck = mail.checkValidity;
            if(!mailCheck){
                mail.classList.add('create-unit-error');
                mail.classList.add('create-unit-active')
            }
            let pass = document.querySelector('.create-unit-pass'),
                passInput = pass.querySelector('INPUT');
            if(passInput.value.length < 8){
                pass.classList.add('create-unit-error');
                pass.classList.add('create-unit-active')
            }
        }
    }
});
inputs.forEach(function (el) {
    el.addEventListener('change',function (elem) {
        inputCheck();
    })
});
