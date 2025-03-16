const urlInput = document.getElementById("url");
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const openBtn = document.getElementById("open");

openBtn.addEventListener("click", () => {
	const url = urlInput.value;
	const options = [];
	if (widthInput.value) {
		options.push(`width=${widthInput.value}`);
	}
	if (heightInput.value) {
		options.push(`height=${heightInput.value}`);
	}
	if (true) {
		options.push("scrollbars=yes");
	}
	window.open(url, "window_name", options.join(","));
});
