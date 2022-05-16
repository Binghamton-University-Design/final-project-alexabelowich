/**
 CHANGE THIS ONE 
 **/
var gifLengths = [4.5, 5, 5, 5, 25, 25];



var isFinished = false, totalScroll;



boot();



function boot(){

	setTimeout(() => {
		isFinished = true;
		document.getElementById("AnimationWrapper").children[0].children[1].style.opacity = "0";
	}, gifLengths[0]*1000);

	setTimeout(() => {
		isFinished = true;
	}, gifLengths[0]*1000);

	document.getElementById("MainWrapper").addEventListener('mousedown', (e) => {
		if(isFinished == true){
			document.getElementById("MainWrapper").scrollTop = window.innerHeight;
			isFinished = false;
			setTimeout(() => {
				document.getElementById("AnimationWrapper").children[1].children[5].style.opacity = "0";
			}, gifLengths[2]*1000);
		}
	});

	document.getElementById("MainWrapper").addEventListener('scroll', (e) => {
		e.preventDefault();
	});

	document.getElementById("ChoiceOne").onmousedown = (e) => {
		document.getElementById("AnimationWrapper").children[1].children[1].src = "images/b-pill.gif";
		document.getElementById("AnimationWrapper").children[1].children[2].style.opacity = "0";
		document.getElementById("AnimationWrapper").children[1].children[3].style.opacity = "0";
		document.getElementById("AnimationWrapper").children[1].children[4].style.opacity = "0";
		setTimeout(() => {
			e.target.parentNode.children[0].style.opacity = "0";
		}, gifLengths[4]*1000);
	}

	document.getElementById("ChoiceTwo").onmousedown = (e) => {
		document.getElementById("AnimationWrapper").children[1].children[1].src = "images/y-pill.gif";
		document.getElementById("AnimationWrapper").children[1].children[2].style.opacity = "0";
		document.getElementById("AnimationWrapper").children[1].children[3].style.opacity = "0";
		document.getElementById("AnimationWrapper").children[1].children[4].style.opacity = "0";
		setTimeout(() => {
			document.getElementById("AnimationWrapper").children[1].children[1].style.opacity = "0";
		}, gifLengths[4]*1000);
	}

}

