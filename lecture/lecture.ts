let numberOne: number = Math.ceil(Math.random() * 9);
let numberTwo: number = Math.ceil(Math.random() * 9);

let result: number = numberOne + numberTwo;

const word1: HTMLDivElement = document.createElement('div');
word1.textContent = `${numberOne} 곱하기 ${numberTwo} ;`;
document.body.append(word1);

const form: HTMLFormElement = document.createElement('form');
const input: HTMLInputElement = document.createElement('input');
input.type = 'number';
form.append(input);
const button: HTMLButtonElement = document.createElement('button');
button.textContent = '입력!';
form.append(button);
document.body.append(form);
const resultDiv: HTMLDivElement = document.createElement('div');
document.append(resultDiv);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (Number(input.value) === result) {
        resultDiv.textContent = '딩동댕';
        numberOne = Math.ceil(Math.random() * 9);
        numberTwo = Math.ceil(Math.random() * 9);
    } else {
        resultDiv.textContent = '땡';
        input.textContent = '';
        input.focus();
    }
});