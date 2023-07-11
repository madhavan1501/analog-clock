const hours=document.querySelector(".hrs");
const minutes=document.querySelector(".min");
const seconds=document.querySelector(".sec");
const root=document.querySelector(':root');
const btn=document.querySelector('.btn');
setInterval(clock,100);
clock();
function clock(){
    const time=new Date();
    const sec=(time.getSeconds())/60;
    const min=(sec+time.getMinutes())/60;
    const hrs=(min+time.getHours())/12;
    seconds.style.setProperty('--rotate-3',sec*360);
    hours.style.setProperty('--rotate-3',hrs*360);
    minutes.style.setProperty('--rotate-3',min*360);
    if(btn.classList.contains('color')){
        root.style.setProperty('--white','white');
        root.style.setProperty('--black','black');
    }
    else{
        root.style.setProperty('--white','black');
        root.style.setProperty('--black','white');
    }
    
}
btn.addEventListener('click',()=>{
    btn.classList.toggle('color');
});



















