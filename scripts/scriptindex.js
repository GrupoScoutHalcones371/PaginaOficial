var html = document.getElementsByTagName("html")[0],
	scrollvalue = html.scrollTop;
var teloner=false;
const body = document.getElementById("body");

const	modal1=document.getElementById('modal1');
const	modal2=document.getElementById('modal2');

const botonsubir = document.getElementById('scrolltop');

function om(modalo){
	switch(modalo){
		case 1:
			modal1.style.display='block';
			modaler(0);		
		break;
		case 2:
			modal2.style.display='block';
			modaler(0);
		break;
	}
}
function cm(modalc) {
	teloner=true;
	switch(modalc){
		case 1:
			modal1.style.display='none';
			modaler(1);
		break;
		case 2:
			modal2.style.display='none';
			modaler(1);
		break;
	}
}

function start(){
	animate();
}

function modaler(opt){
	if(opt==0){
		body.style.overflow='hidden';
		document.getElementById("telon").style.display='block';
		teloner=true;
		botonsubir.style.cursor='none';
		botonsubir.style.opacity=0;
	}else{
		body.style.overflow='auto';
		document.getElementById("telon").style.display='none';
		teloner=false;
		botonsubir.style.cursor='pointer';
		botonsubir.style.opacity=1;
	}
}

botonsubir.addEventListener('click',()=>{
	window.scroll({top:0, behavior:'smooth'});
})

function animate(){
	window.requestAnimationFrame(animate);
	scrollvalue=html.scrollTop;
	if(teloner==false){
		if(scrollvalue>0){
			botonsubir.style.cursor='pointer';
			botonsubir.style.opacity=1;
		}else{
			botonsubir.style.cursor='none';
			botonsubir.style.opacity=0;
		}
	}
}