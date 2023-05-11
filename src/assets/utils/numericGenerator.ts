const numericGenerator = (length: number): number[] => {
	if (length < 0) {
		throw new Error('Generator length have to be positive digit');
	}

	return [...Array(length).keys()];
};

export default numericGenerator;
