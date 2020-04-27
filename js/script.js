var el = document.getElementById("mycanvas");
var ctx = el.getContext("2d");
var isDrawing;

el.onmousedown = function(e) {
	  isDrawing = true;
	  ctx.moveTo(e.clientX, e.clientY);
};
el.onmousemove = function(e) {
	  if (isDrawing) {
		      ctx.lineTo(e.clientX, e.clientY);
		      ctx.stroke();
		    }
};
el.onmouseup = function() {
	  isDrawing = false;
};

function download_image() {
  var canvas = document.getElementById("mycanvas");
  image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  var link = document.createElement('a');
  link.download = "my-image.png";
  link.href = image;
  link.click();
}