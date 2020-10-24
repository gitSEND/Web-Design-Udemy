var video = document.getElementById('video'),
	btnPlay = document.getElementById('btnPlay'),
	icono = document.getElementById('icono'),
	tiempo = document.getElementById('tiempo'),
	volumen = document.getElementById('volumen');

tiempo.setAttribute('max', video.duration);

btnPlay.addEventListener('click', function(){
	if (icono.className == 'fa fa-play'){
		video.play();
		var intervalo = setInterval(barraTiempo, 1);
	} else {
		video.pause();
		clearInterval(intervalo);
	}

	icono.classList.toggle('fa-play');
	icono.classList.toggle('fa-pause');
});

tiempo.addEventListener('change', function(){
	video.currentTime = tiempo.value;
});

function barraTiempo(){
	tiempo.value = video.currentTime;
	if (video.ended){
		icono.className = 'fa fa-play';
	}
}

volumen.addEventListener('change', function(){
	video.volume = volumen.value;
});