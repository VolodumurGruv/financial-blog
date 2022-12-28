const key = () => {
	let count = 1;
	return () => count++;
};

export default key();
