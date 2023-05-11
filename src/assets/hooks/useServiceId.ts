import { useSearchParams } from 'react-router-dom';

const useServiceId = (): number => {
	const [getParams, setParams] = useSearchParams();

	const idFromParams = getParams.get('serviceId');

	if (idFromParams === null) {
		return -1;
	}

	return parseInt(idFromParams);
};

export default useServiceId;
