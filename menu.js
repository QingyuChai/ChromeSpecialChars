var tempInput = document.createElement("input");
var content = document.getElementById("content");

var sub = document.getElementById("sub");
var cur = "None selected";
var textNode = document.createTextNode(cur);
sub.appendChild(textNode);

const charlist = "()[]=≈≠<≤≥>+−*±×⋅÷/—√%‰ÆΑαΒβΓγΔδΕεΖζΗηΘθΙιΚκΛλΜμΝνΞξΟοΠπΡρΣσ/ςΤτΥυΦφΧχΨψΩω";


for (var i = 0; i < charlist.length; i++) {
  	const char = charlist.charAt(i);
  	const button = document.createElement("button");
	
	button.innerHTML = char;
	button.id = i.toString(10);

	button.onclick = function() {
		// alert(char);

		content.appendChild(tempInput);
		tempInput.setAttribute('value', char);
		tempInput.select();

		textNode.nodeValue = char + " selected";
		
		document.execCommand('copy');
		content.removeChild(tempInput);
	}
	content.appendChild(button);
}




