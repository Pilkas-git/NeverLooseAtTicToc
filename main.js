function loadScript(url){

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
            }
        };
    } else {  //Others
        script.onload = function(){
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
$(document).ready(function() {
	$("#x").click(function() {
		document.getElementsByClassName('center')[0].style.display = 'block';
	  });
	  $("#o").click(function() {
		loadScript("https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.min.js");
		loadScript("draw.js");
		loadScript("tic2.js");
	  });
});