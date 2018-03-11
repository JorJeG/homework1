// Делаем строку для src
const srcImg = (path) => {
	let src = null;
	if (path) {
		const dot = path.indexOf('.');
		src = `${path.slice(0, dot)}@2x${path.slice(dot)}`;
	}
	return src;
}

export default srcImg;