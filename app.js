const firstPlace = document.querySelector('.firstPlace');
const secondPlace = document.querySelector('.secondPlace');
const signPlace = document.querySelector('.sign');

const numberButton = document.querySelectorAll('.numberButton');
const signButton = document.querySelectorAll('.signButton');
const equalButton= document.querySelector('.equalButton');
const clearButton = document.querySelector('.clearButton');
const backSpace = document.querySelector('.backSpace');
const changeSign = document.querySelector('.changeSign');
const comma = document.querySelector('.comma');
const cleatOneLineButton = document.querySelector('.cleatOneLineButton');
const odwrotnosc = document.querySelector('.odwrotnosc');

let firstNumber = true;
let changeSignOnStartFirstNumber = false;
let changeSignOnStartSecondNumber = false;
let firstNumberComma = false;
let secondNumberComma = false;

let i = 0;

const number = (eve) => {
    const numberClicked = parseInt(eve.target.dataset.buttonnr);
    
    if(firstNumber === true){
        firstPlace.innerHTML += numberClicked;
    }else{
        secondPlace.innerHTML += numberClicked;
    }
};

const sign = (eve) => {
    if(firstPlace.innerHTML.length > 0){
        const signClicked = eve.target.dataset.buttonnr;

        signPlace.innerHTML = signClicked;
    
        firstNumber = false;
    }
};

const Equal = () => {
    const first = firstPlace.innerHTML;
    const second = secondPlace.innerHTML;
    const signSelected = signPlace.innerHTML;

    const firstChange = parseFloat(first);
    const secondChange = parseFloat(second);

    if(signSelected === '+'){
        const wynik = firstChange + secondChange;
        secondPlace.innerHTML = '';
        signPlace.innerHTML = '';
        firstPlace.innerHTML = wynik;
    }else if(signSelected === '-'){
        const wynik = firstChange - secondChange;
        secondPlace.innerHTML = '';
        signPlace.innerHTML = '';
        firstPlace.innerHTML = wynik;
    }else if(signSelected === '/'){
        if(secondChange === 0){
            alert('Nie dzieli się przez 0 !');
        }else{
            const wynik = firstChange / secondChange;
            secondPlace.innerHTML = '';
            signPlace.innerHTML = '';
            firstPlace.innerHTML = wynik;
        }
    }else if(signSelected === '*'){
        const wynik = firstChange * secondChange;
        secondPlace.innerHTML = '';
        signPlace.innerHTML = '';
        firstPlace.innerHTML = wynik;
    }else if(signSelected === 'x<sup>n</sup>'){
        const wynik = Math.pow(firstChange, secondChange);
        secondPlace.innerHTML = '';
        signPlace.innerHTML = '';
        firstPlace.innerHTML = wynik;
    }else if(signSelected === 'pierwiastek'){
        const wynik = Math.pow(firstChange, 1/secondChange);
        secondPlace.innerHTML = '';
        signPlace.innerHTML = '';
        firstPlace.innerHTML = wynik;
    }else if(signSelected === '%'){
        const wynik = firstChange * (secondChange/100)
        secondPlace.innerHTML = '';
        signPlace.innerHTML = '';
        firstPlace.innerHTML = wynik;
    }


    firstNumber = true;
    changeSignOnStartSecondNumber = false;
    secondNumberComma = false;
    if(firstPlace.innerHTML[0] === '-'){
        changeSignOnStartFirstNumber = true;
    }else{
        changeSignOnStartFirstNumber = false;
    }
};

const clear = () => {
    firstPlace.innerHTML = '';
    secondPlace.innerHTML = '';
    signPlace.innerHTML = '';

    firstNumber = true;
    firstNumberComma = false;
    secondNumberComma = false;
    changeSignOnStartSecondNumber = false;
    if(firstPlace.innerHTML[0] === '-'){
        changeSignOnStartFirstNumber = true;
    }else{
        changeSignOnStartFirstNumber = false;
    }
};

const backspace = () => {
    if(firstNumber === true){
        const backSpaceNumber = firstPlace.innerHTML.slice(0, -1);
        firstPlace.innerHTML = backSpaceNumber;
    }else{
        const backSpaceNumber = secondPlace.innerHTML.slice(0, -1);
        secondPlace.innerHTML = backSpaceNumber;
    }
};

const changesign = () => {
    if(firstPlace.innerHTML.length > 0){
        if(firstNumber === true){
            if(changeSignOnStartFirstNumber === false){
                const numberNow = firstPlace.innerHTML;
                const signChange = '-'
                firstPlace.innerHTML = `${signChange}${numberNow}`;
                changeSignOnStartFirstNumber = true;
            }else{
                const numberNow = firstPlace.innerHTML.slice(1);
                firstPlace.innerHTML = numberNow
                changeSignOnStartFirstNumber = false;
            }
        }
    }

    if(secondPlace.innerHTML.length > 0){
        if(firstNumber === false){
            if(changeSignOnStartSecondNumber === false){
                const numberNow = secondPlace.innerHTML;
                const signChange = '-'
                secondPlace.innerHTML = `${signChange}${numberNow}`;
                changeSignOnStartSecondNumber = true;
            }else{
                const numberNow = secondPlace.innerHTML.slice(1);
                secondPlace.innerHTML = numberNow
                changeSignOnStartSecondNumber = false;
            }
        }
    }
};

const makeComma = () => {
    const commaSign = '.'

    if(firstPlace.innerHTML.length > 0){
        if(firstNumber === true){
            if(firstNumberComma === false){
                firstPlace.innerHTML += commaSign;
                firstNumberComma = true;
            }
        }
    }

    if(secondPlace.innerHTML.length > 0){
        if(firstNumber === false){
            if(secondNumberComma === false){
                secondPlace.innerHTML += commaSign;
                secondNumberComma = true;
            }
        }
    }
};

const cleatOneLine = () => {
    if(firstNumber === true){
        firstPlace.innerHTML = '';
    }else{
        secondPlace.innerHTML = '';
    }
};

const odwrotnoscLiczby = () => {
    if(firstPlace.innerHTML == 0){
       alert('Nie można dzielić przez 0!');
    }else{
        if(firstPlace.innerHTML.length > 0){
            const first = firstPlace.innerHTML;
            const firstChange = parseFloat(first);
            
            const wynik = 1/firstChange;
            
            firstPlace.innerHTML = wynik
            
            firstNumber = true;
            changeSignOnStartSecondNumber = false;
            secondNumberComma = false;
            if(firstPlace.innerHTML[0] === '-'){
                changeSignOnStartFirstNumber = true;
            }else{
                changeSignOnStartFirstNumber = false;
            }
        }
    }
};

numberButton.forEach(nrBtn => {
    nrBtn.addEventListener('click', number);
});

signButton.forEach(sBtn => {
    sBtn.addEventListener('click', sign);
});

equalButton.addEventListener('click', Equal);
clearButton.addEventListener('click', clear);
backSpace.addEventListener('click', backspace);
changeSign.addEventListener('click', changesign);
comma.addEventListener('click', makeComma);
cleatOneLineButton.addEventListener('click', cleatOneLine);
odwrotnosc.addEventListener('click', odwrotnoscLiczby);

//////////////////////////////////////

const body = document.querySelector('body');

body.addEventListener('keydown', (e) => {
    const numberClicked = parseInt(e.key);
    
    if(numberClicked === 0 || numberClicked === 1 || numberClicked === 2|| numberClicked === 3 || numberClicked === 4 || numberClicked === 5 || numberClicked === 6 || numberClicked === 7 || numberClicked === 8 || numberClicked === 9){
        if(firstNumber === true){
            firstPlace.innerHTML += numberClicked;
        }else{
            secondPlace.innerHTML += numberClicked;
        }
    }

    if(firstPlace.innerHTML.length > 0){
        const signClicked = e.keyCode;

        if(signClicked === 13){
            signPlace.innerHTML = '+';
    
            firstNumber = false;
        }else if(signClicked === 109){
            signPlace.innerHTML = '-';
    
            firstNumber = false;
        }else if(signClicked === 106){
            signPlace.innerHTML = '*';
    
            firstNumber = false;
        }else if(signClicked === 111){
            signPlace.innerHTML = '/';
    
            firstNumber = false;
        }else if(signClicked === 80){
            signPlace.innerHTML = 'pierwiastek';
            firstNumber = false;
            //P
        }else if(signClicked === 78){
            signPlace.innerHTML = 'x<sup>n</sup>';
            firstNumber = false;
            //N
        }else if(signClicked === 67){
            signPlace.innerHTML = '%';
            firstNumber = false;
            //C
        }else if(signClicked === 187){
            Equal();
            //Equal
        }else if(signClicked === 82){
            changesign();
            //R
        }else if(signClicked === 8){
            backspace();
            //BackSpace
        }else if(signClicked === 188){
            makeComma();
            //,
        }else if(signClicked === 90){
            clear();
            //Z
        }else if(signClicked === 88){
            cleatOneLine();
            //X
        }
    }
});