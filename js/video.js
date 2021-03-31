var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.getElementById("volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {    
		video.muted = true;
		console.log("muting");
		document.querySelector("#mute").innerHTML = "Unmute"
	}
	else {
		video.muted = false;
		console.log("unmuting");
		document.querySelector("#mute").innerHTML = "Mute"
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("changing to old school class");
	video.classList.add("oldSchool");
	console.log("adding vintage");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("changing to old school class");
	video.classList.remove("oldSchool");
	console.log("removing vintage");
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*1.05;
	console.log(video.playbackRate);
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate/1.05;
	console.log(video.playbackRate);
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.querySelector("#slider").value / 100;
	console.log(video.volume);
	document.getElementById("volume").innerHTML = document.querySelector("#slider").value + "%";
	console.log(document.querySelector("#slider").value);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("original location " + video.currentTime);
	video.currentTime += 15;
	if(video.currentTime>67.40){
		console.log("go back to beginning");
		video.currentTime = 0;
	}
	console.log("new location " + video.currentTime);
});