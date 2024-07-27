let score = 0;

document.querySelector('.coin').addEventListener('click', () => {
    score++;
    document.getElementById('score').innerText = score;
});
