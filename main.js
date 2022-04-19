/**
 CHANGE THIS ONE 
 **/
var gifLengths = [6];



var gifStep = 0, isFinished = false, totalScroll;



boot();



function boot(){

	setTimeout(() => {
		isFinished = true;
		gifStep++;
	}, gifLengths[gifStep]*1000);

	document.getElementById("MainWrapper").addEventListener('scroll', (e) => {
		console.log(document.getElementById("MainWrapper").scrollTop, parseInt(window.innerHeight)*gifStep);
		if(isFinished){
			if(document.getElementById("MainWrapper").scrollTop >= parseInt(window.innerHeight)*gifStep){
				isFinished = false;
			}
			setTimeout(() => {
				isFinished = true;
				gifStep++;
			}, gifLengths[gifStep]*1000);
		} else{
			document.getElementById("MainWrapper").scrollTop = parseInt(window.innerHeight)*gifStep;
		}
	});
}