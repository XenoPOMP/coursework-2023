import DeviceType from '@type/DeviceType';
import { isDesktop, isMobile } from 'react-device-detect';

const useDeviceType = (): DeviceType => {
	if (isMobile) {
		return 'mobile';
	}

	if (isDesktop) {
		return 'desktop';
	}

	return 'desktop';
};

export default useDeviceType;
