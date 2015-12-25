// stopping user scale the page
// var meta = document.createElement('meta');
// meta.content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=0";
// meta.name="viewport"
// document.getElementsByTagName('head')[0].appendChild(meta);

// pull the normal style in
// var link = document.createElement('link');
// link.type="text/css";
// link.rel="stylesheet";
// link.href="css/main.css";
// document.getElementsByTagName('head')[0].appendChild(link);

// pull the mobile style in
// var link = document.createElement('link');
// link.type="text/css";
// link.rel="stylesheet";
// link.href="css/mobile.css";
// document.getElementsByTagName('head')[0].appendChild(link);



// code for homepage index html

function stopScale(){
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		var meta = document.createElement('meta');
		meta.content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1";
		meta.name="viewport";
		document.getElementsByTagName('head')[0].appendChild(meta);
	}
	else{

	}
}

function setNormalStyle(){
	var link = document.createElement('link');
    link.type="text/css";
    link.rel="stylesheet";
    link.href="css/main.css";
    document.getElementsByTagName('head')[0].appendChild(link);
}

function setMobileStyle(){
	var link = document.createElement('link');
	link.type="text/css";
	link.rel="stylesheet";
	link.href="css/main_mobile.css";
	document.getElementsByTagName('head')[0].appendChild(link);
}

function stylePicker(){
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		setMobileStyle();
	}
	else{
		setNormalStyle();
	}
}

// code for normal index html

function stopScaleNormalIndex(){
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		var meta = document.createElement('meta');
		meta.content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1";
		meta.name="viewport";
		document.getElementsByTagName('head')[0].appendChild(meta);
	}
	else{

	}
}

function setNormalStyleNormalIndex(){
	var link = document.createElement('link');
    link.type="text/css";
    link.rel="stylesheet";
    link.href="../../css/main.css";
    document.getElementsByTagName('head')[0].appendChild(link);
}

function setMobileStyleNormalIndex(){
	var link = document.createElement('link');
	link.type="text/css";
	link.rel="stylesheet";
	link.href="../../css/main_mobile.css";
	document.getElementsByTagName('head')[0].appendChild(link);
}

function stylePickerNormalIndex(){
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		setMobileStyleNormalIndex();
	}
	else{
		setNormalStyleNormalIndex();
	}
}

// // code for new solution to detecting device

// function stylePickerByAgent(){
// 	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
// 	{
//     	setMobileStyle();
// 	}
// 	else{
// 		setNormalStyle();
// 	}
// }

// function stopScaleByAgent(){
// 	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
// 		var meta = document.createElement('meta');
// 		meta.content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1";
// 		meta.name="viewport";
// 		document.getElementsByTagName('head')[0].appendChild(meta);
// 	}
// 	else{
		
// 	}
// }




























