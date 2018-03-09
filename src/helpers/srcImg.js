// Делаем строку для srcSet
const srcImg = (path) => {
	let srcSet = null;
	if (path) {
		const dot = path.indexOf('.');
		srcSet = `${path.slice(0, dot)}@2x${path.slice(dot)} 2x,
		${path.slice(0, dot)}@3x${path.slice(dot)} 3x`;
	}
	return srcSet;
}

export default srcImg;