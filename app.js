const typedText=document.querySelector('.typed-text');

const words=["Awsome","Fun","Marvelous" ,"Tricky","Fantastic"];
let wordIndex=0;
let charIndex=0;
let typingSpeed=200;
let erasingSpeed=100;
let delayBetweenWords=2000;

document.addEventListener("DOMContentLoaded",()=>{
  setTimeout(type,delayBetweenWords);

})

function type(){
  if(charIndex<words[wordIndex].length)
{
  typedText.innerHTML+=words[wordIndex].charAt(charIndex);
  charIndex++;
  setTimeout(type,typingSpeed);
}
else{
  setTimeout(erase,delayBetweenWords);
}}
function erase(){
  if(charIndex>0)
  {
    typedText.innerHTML=words[wordIndex].substring(0,charIndex-1);
    charIndex--;
    setTimeout(erase,erasingSpeed);
  }
  else{
    wordIndex++;
    if(wordIndex>=words.length)
    wordIndex=0;
    setTimeout(type,delayBetweenWords);
  }
}