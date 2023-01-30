let video=document.querySelector('video');
let playBoton = document.getElementById("play");
let pauseBoton= document.getElementById("pause");
let mostrarNota;

playBoton.addEventListener('click',()=>{
    video.play()
    let duracionVideo= video.duration

    let tiempoEnSeg=duracionVideo / 100
    console.log(tiempoEnSeg.toFixed(2))
    document.querySelector("#duracion").innerText=`${tiempoEnSeg.toFixed(2)}`

    mostrarNota=setInterval(()=>{
        let porcentaje=parseInt(video.currentTime*100/duracionVideo)
        
        document.querySelector(".carga").style.width=`${porcentaje}%`
    },100)

});

pauseBoton.addEventListener('click',()=>{
    video.pause();
    flag=false;
    let duracionVideo= video.duration 

    clearInterval(mostrarNota)
    let porcentaje=parseInt(video.currentTime*100/duracionVideo)
    
    document.querySelector(".carga").style.width=`${porcentaje}%`

});
