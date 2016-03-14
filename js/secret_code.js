 function keyWordSearch () {
 	document.getElementById("inputBox1").focus();
 	var urlHead = "https://www.zhihu.com/search?type=question&q=";
 	document.onkeydown=keyListener;
		function keyListener () {
			if (event.keyCode==13) {
				var searchKey = document.getElementById("inputBox1").value;
 				var newKey = urlHead + searchKey;
 				window.open(newKey, '_blank');
			};
	}
}
window.onload = keyWordSearch;

