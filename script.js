const jokeButton = document.getElementById('jokeButton');
const jokeText = document.getElementById('jokeText');

jokeButton.addEventListener('click', () => {
    console.log('button clicked');  // check if the button is getting referenced when clicked
    const url = 'https://api.chucknorris.io/jokes/random';  // Chuck Norris API
    fetch(url)
        .then(res => {
            return res.json()
        }).then(data => {
            console.log(data.value);
            jokeText.innerHTML = data.value;
        })
});