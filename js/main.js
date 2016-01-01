
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


// examination

// function iOSversion() {
//   if (/iP(hone|od|ad)/.test(navigator.platform)) {
//     // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
//     var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
//     return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
//   }
// }

// function iOSversion() {
//   if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
//     // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
//     var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
//     return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
//   }
// }

// function changeContentLineHeigh () {
// 	// var targetElecment = document.getElementsByClassName('designer-draft-subtitle');
// 	document.getElementsByClassName('designer-draft-subtitle').style.color = "blue";
// }




// function iOSversionDetecting(){
// 	 ver = iOSversion();
// 	 if (ver[0] < 9) {
// 	 	alert('this is running iOS 5 or later')
// 	 };
// }





























