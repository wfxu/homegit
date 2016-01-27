//nochange.js
function computercost() {
	var tom = document.getElementById("tom").value;
	var hallen = document.getElementById("hallen").value;
	var jam = document.getElementById("jam").value;
	if (isNaN(tom)){
		alert("please input number in tom :");
		return false;
	} else if (tom == "") {
		alert("pelase input in tom :");
	}
	document.getElementById("cost").value = tom * 2.9 + hallen * 2.1 + jam * 3.2;
}
function draw() {
	var dom = document.getElementById("myca");
	if (dom.getContext) {
		var context = dom.getContext('2d');
		context.filRect(100,100,200,200);
		context.clearRect(150,150,100,100);
		context.strokeRect(180,180,40,40);
		context.fillRect(195,195,10,10);
	}
}