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



//

function stopScale(){
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		var meta = document.createElement('meta');
		meta.content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1";
		meta.name="viewport";
		document.getElementsByTagName('head')[0].appendChild(meta);
	};
}

function setNormalStyle(){
	var link = document.createElement('link');
    link.type="text/css";
    link.rel="stylesheet";
    link.href="../../css/content_artical.css";
    document.getElementsByTagName('head')[0].appendChild(link);
}

function setMobileStyle(){
	var link = document.createElement('link');
	link.type="text/css";
	link.rel="stylesheet";
	link.href="../../css/content_artical_mobile.css";
	document.getElementsByTagName('head')[0].appendChild(link);
}

function stylePicker(){
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		setMobileStyle();
	}
	else{
		setNormalStyle();
	};
}






