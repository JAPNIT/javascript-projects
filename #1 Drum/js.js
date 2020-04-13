window.addEventListener('keydown',playsound)

function playsound(e){
	console.log(e)
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

	if (!audio) return
	
	audio.currentTime = 0
	audio.play()
	const randomColor = Math.floor(Math.random()*16777215).toString(16)
	key.style.background = "#" + randomColor
	key.classList.add('key-change')

}

function removestyle(key){
	if (key.propertyName != "transform") return
	this.classList.remove('key-change')
	this.style.background = "grey"
	

}

const keys = document.querySelectorAll('.key')
keys.forEach(k => k.addEventListener('transitionend',removestyle))