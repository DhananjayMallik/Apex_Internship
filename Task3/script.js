// get reference all the required things
const carousel = document.getElementById('carousel');
const images = document.querySelectorAll('#carousel img');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let counter = 0; 
// add event listener when next button was clicked
nextBtn.addEventListener('click',()=>{
    counter++;
    if(counter >= images.length) counter = 0; // if counter value greater than or equal to image length 
    updateCarousel();
});
prevBtn.addEventListener('click',()=>{
    counter--;
    if(counter < 0) counter = images.length-1; // if counter value less than 0 then update the counter value
    updateCarousel();
});
function updateCarousel(){
    carousel.style.transform = `translateX(${-counter * 100}%)`;
}

// API Joke Section
const jokeButton = document.getElementById('Api-btn');
const jokeText = document.getElementById('jokeText');
// fetch joke data
jokeButton.addEventListener('click' , ()=>{
     async function jokeFetch(){
     const JokeApi = "https://icanhazdadjoke.com/slack";
    const res = await fetch(JokeApi);
    const data = await res.json();
    const joke = data.attachments[0].fallback;
    jokeText.textContent = joke; // Show joke in the UI
    console.log(joke);
   }
   jokeFetch();
});