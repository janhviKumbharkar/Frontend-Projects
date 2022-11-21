const closeFace = document.querySelector('.close');
const openFace = document.querySelector('.open');

// Add event Listener
closeFace.addEventListener('click',() =>{
	if(openFace.classList.contains('open')){
		openFace.classList.add('active');
		closeFace.classList.remove('active');
	}
});

openFace.addEventListener('click',() =>{
	if(closeFace.classList.contains('close')){
		closeFace.classList.add('active');
		openFace.classList.remove('active');
	}
});


