// document.getElementById("titulo1").innerHTML = "commlab";
//  function miFuncion()


var player = document.getElementById("player");

var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var stopBtn = document.getElementById("stopBtn");

playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
stopBtn.addEventListener("click", stopAudio);

function playAudio(){
  player.play();
}

function pauseAudio(){
  player.pause();
  }

  function stopAudio(){
    player.currentTime = 0;
    player.pause();
}


function commentBox(){
	var name=document.getElementById('name').value;
	var comment=document.getElementById('comment').value;

	if(name =="" || comment ==""){
		alert("Porfavor introduce la informacion requerida!");
	}else{
		var parent=document.createElement('div');
		var el_name=document.createElement('h5');
		var el_message=document.createElement('p');
		var el_line=document.createElement('hr');
		var txt_name=document.createTextNode(name);
		var txt_message=document.createTextNode(comment);
		el_name.appendChild(txt_name);
		el_message.appendChild(txt_message);
		el_line.style.border='1px solid #000';
		parent.appendChild(el_name);
		parent.appendChild(el_line);
		parent.appendChild(el_message);
		parent.setAttribute('class', 'pane');
		document.getElementById('result').appendChild(parent);

		document.getElementById('name').value="";
		document.getElementById('comment').value="";
	}

}
