document.body.style.transition = 'background-color 0.5s, color 0.5s';

const button = document.createElement('button');
button.innerText = 'Toggle Dark Mode';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
document.body.appendChild(button);

button.addEventListener('click', () => {
    const isDarkMode = document.body.style.backgroundColor === 'rgb(51, 51, 51)';
    if (isDarkMode) {
        document.body.style.backgroundColor = '#f4f4f9';
        document.body.style.color = '#333';
        document.querySelector('.cv-container').style.backgroundColor = '#fff';
    } else {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#f4f4f9';
        document.querySelector('.cv-container').style.backgroundColor = '#444';
    }
});