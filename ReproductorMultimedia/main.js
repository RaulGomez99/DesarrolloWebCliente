
//document.getElementById("barra").getBoundingClientRect().x  X
//document.getElementById("barra").clientWidth  Tamaño
//ev.layerX

document.oncontextmenu = function(){return false}
window.onload= function(){
    document.getElementById("barra").addEventListener("click", verImagen);
    document.getElementById("barra").addEventListener("mousemove", verImagenBien);
    document.getElementById("barra").addEventListener("mouseout", ocultarImagen);
    setInterval(avanzandoEnLaBarra,10);
    ponerPublicidad();
    document.getElementById("cerrar").addEventListener("click", cerrarPubli);
    document.getElementById("mainVideo").addEventListener("ended", reiniciar);
    document.querySelectorAll("aside *").forEach(video => video.addEventListener("click", cambVideo));
    document.getElementById("play").addEventListener("click", playVid);
    document.getElementById("silenciar").addEventListener("click", silenciar);
    document.getElementById("siguiente").addEventListener("click", siguiente);
    document.getElementById("anterior").addEventListener("click", anterior);
    document.getElementById("suma").addEventListener("click", suma);
    document.getElementById("resta").addEventListener("click", resta);
    document.getElementById("retroceder").addEventListener("click", retroceder);
    document.getElementById("barra").max=Math.floor(document.getElementById("mainVideo").duration);
    document.getElementById("barra").value=0;
}

function reiniciar(){
    ponerPublicidad();
    document.getElementById("play").src="iconos/play.svg";
    document.getElementById("silenciar").src="iconos/silenciar.svg";
    document.getElementById("mainVideo").pause();
    document.getElementById("mainVideo").volume=1;
    document.getElementById("mainVideo").muted=false;
    document.getElementById("barra").value=0;
    
}

function ocultarImagen() {
    document.getElementById("miniatura").setAttribute("hidden","");
}

function verImagen(e){
    console.log(e);
    var x = e.layerX;
    var x2 = document.getElementById("barra").clientWidth;
    var porcentaje = (x*100)/x2;

    document.getElementById("mainVideo").currentTime=(Math.floor(document.getElementById("mainVideo").duration)*porcentaje)/100;
}

function verImagenBien(e){
    console.log(e);
    var x = e.layerX;
    var x2 = document.getElementById("barra").clientWidth;
    var porcentaje = (x*100)/x2;

    var miniatura = document.getElementById("miniatura");
    if(miniatura.hasAttribute("hidden"))miniatura.removeAttribute("hidden");
    miniatura.style.position="absolute";
    miniatura.style.left=e.x+"px";
    miniatura.style.top=(document.getElementById("barra").getBoundingClientRect().y-80)+"px";
    miniatura.style.width="12vh";
    miniatura.style.heigth="24vh";
    miniatura.style.zIndex="16";
    miniatura.src=document.getElementById("mainVideo").src;
    miniatura.currentTime=(Math.floor(document.getElementById("mainVideo").duration)*porcentaje)/100;
}

function cambVideo(){
    reiniciar();
    var vidMain = document.getElementById("mainVideo");
    var src = this.src;
    this.src=vidMain.src;
    vidMain.src=src;
    
    if(this.poster){
        if(vidMain.poster){
            var poster;
            poster = this.poster;
            this.poster = vidMain.poster;
            vidMain.poster= poster;
        }else{
            vidMain.poster= this.poster;
            this.poster="";
        }
    }else{
        
        if(vidMain.poster){
            this.poster = vidMain.poster;
            vidMain.poster="";
            
        }
    }
    setTimeout(()=>document.getElementById("barra").max=Math.floor(document.getElementById("mainVideo").duration),100);
    

}

function playVid(){
    var video = document.getElementById("mainVideo");
    if(video.paused){
         video.play();
         document.getElementById("play").src="iconos/pause.svg";
    } else{ 
        video.pause();
        document.getElementById("play").src="iconos/play.svg";
    }
}

function silenciar(){
    var video = document.getElementById("mainVideo");
    if(!video.muted){
         video.muted=true;
         document.getElementById("silenciar").src="iconos/sonido.svg";
    } else{ 
        video.muted=false;
        document.getElementById("silenciar").src="iconos/silenciar.svg";
    }
}

function siguiente(){
    document.getElementById("mainVideo").currentTime+=10;
}

function anterior(){
    document.getElementById("mainVideo").currentTime-=10;
}

function retroceder(){
    document.getElementById("mainVideo").currentTime=0;
}

function suma(){
    if(document.getElementById("mainVideo").volume==1) return;
    document.getElementById("mainVideo").volume+=0.1
}

function resta(){
    if(document.getElementById("mainVideo").volume==0) return;
    document.getElementById("mainVideo").volume-=0.1
}

function ponerPublicidad(){
    document.getElementById("tapaTodo").removeAttribute("hidden");
    document.getElementById("adv").style.opacity="1";
    ponerContador(1);
}

function ponerContador(num){
    if(num==0){ 
        document.getElementById("cerrar").removeAttribute("hidden");
        return;
    }
    num--;
    document.getElementById("adv").innerText="Podrás quitar la publicidad despues de "+num+" segundos";
    setTimeout(function(){ponerContador(num)},1000);
}

function cerrarPubli() {
    document.getElementById("tapaTodo").setAttribute("hidden", "");
    document.getElementById("adv").style.opacity="0";
    document.getElementById("cerrar").setAttribute("hidden", "");
}

function avanzandoEnLaBarra(){
    document.getElementById("barra").value=document.getElementById("mainVideo").currentTime;
}