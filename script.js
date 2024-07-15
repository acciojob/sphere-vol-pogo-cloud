let radiusVal=document.querySelector("#radius");
let volval=document.querySelector("#volume");
function volume_sphere(event) {
	event.preventDefault();
    let rad=radiusVal.value;
	let vol=volval.value;
	if(rad<0){
		return;
	}
	let v=(4/3) * Math.PI * Math.pow(radius, 3);
	v=v.toFixed(4);
	vol.innertext=v;
	
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
