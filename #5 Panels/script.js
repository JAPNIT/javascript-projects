const panels = document.querySelectorAll(".panel")
panels.forEach(panel => panel.addEventListener("click",open))
panels.forEach(panel => panel.addEventListener("transitionend",textin))


function open(e){
	this.classList.toggle('open')
}

function textin(e){
	if (e.propertyName == "text-shadow"){
		this.classList.toggle('text-in')
	}
}
