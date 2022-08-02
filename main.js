let who = ['My dog', 'My grandma', 'My cat', 'A car'];
let action = ['ate', 'pissed', 'crushed', 'broked'];
let what = ['my homework', 'the keys', 'the car', 'my notes'];
let time = ['before the class', 'during my lunch', 'riding in the car', 'while drinking coffee'];

const sentenceOfEveryList = (array) => {
    let position = Math.floor(Math.random()*array.length);
    return position;
}
const sentenceGenerator = (who, action, what, time) => { 
    let sentence = `${who[sentenceOfEveryList(who)]} ${action[sentenceOfEveryList(action)]} ${what[sentenceOfEveryList(what)]} ${time[sentenceOfEveryList(time)]}`;
    return sentence;
}
window.onload = () => {
    let excuse = document.querySelector("#excuse");
    excuse.innerHTML = sentenceGenerator(who, action, what, time);
}
