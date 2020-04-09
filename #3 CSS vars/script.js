function changecss(e){
	//console.log(e)
	console.log(this.value)
	
    if (this.name === "blur") {
    	let temp =  this.value + "px"
    	document.documentElement.style.setProperty('--blur',temp);
    }

    else if (this.name === "spacing") {
    	let temp =  this.value + "px"
    	document.documentElement.style.setProperty('--spacing',temp);
    }

    else {
    	console.log(`${this.value}`)
    	document.documentElement.style.setProperty('--base-color', this.value);
    }


}

const inputs = document.querySelectorAll(".controls input")
console.log(inputs)

inputs.forEach(input => input.addEventListener("change",changecss))
inputs.forEach(input => input.addEventListener("mousemove",changecss))