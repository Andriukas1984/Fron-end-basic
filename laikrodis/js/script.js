const sekRod = document.querySelector('.sek-rod');
const minRod = document.querySelector('.min-rod');
const valRod = document.querySelector('.val-rod');

function setDate(){

    const now = new Date();

    const sek = now.getSeconds(); 
    const sekLaipsniai =((sek/60)*360+90);
    sekRod.style.transform = `rotate(${sekLaipsniai}deg)`;

    const min = now.getMinutes(); 
    const minLaipsniai =((min/60)*360+90);
    minRod.style.transform = `rotate(${minLaipsniai}deg)`;

    const val = now.getHours(); 
    const valLaipsniai =((val/60)*360+90);
    valRod.style.transform = `rotate(${valLaipsniai}deg)`;

    //console.log(sek);
}
setInterval(setDate, 1000);


