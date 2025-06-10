const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const DOM = {
    guess: $('#guess'),
    submit: $('#submit'),
    result: $('#result'),
};

const randomNumber = Math.floor(Math.random() * 100) + 1;

function judgeGuess(guess) {
    if (guess < 1 || guess > 100) {
        return '1から100の範囲で入力してください。';
    } else if (guess < randomNumber) {
        return 'もっと高い数字です！';
    } else if (guess > randomNumber) {
        return 'もっと低い数字です！';
    } else {
        return '正解です！おめでとうございます！';
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const guess = parseInt(DOM.guess.value, 10);
    const result = judgeGuess(guess);
    DOM.result.textContent = result;
    DOM.guess.value = '';
}

function init() {
    DOM.submit.addEventListener('click', handleSubmit);
    DOM.guess.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
// This JavaScript code implements a simple number guessing game.
