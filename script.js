const img = document.querySelector('img');

let count = 1;

img.addEventListener('click', function(){
    if (count > 11) {
        count = 1;
    }

    img.setAttribute('src', `../Memes/meme${count}.png`);
    count++;
});