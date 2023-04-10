import useLocalization from '@hooks/useLocalization';

const useFormattedTime = (time: number): string => {
  const loc = useLocalization();

  const roundTime = (value: number) => {
    return `${parseInt(`${value * 100}`) / 100}`;
  };

  const SECONDS_IN_MINUTE = 60;
  const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60;

  if (time > SECONDS_IN_MINUTE) {
    const minutes = time / SECONDS_IN_MINUTE;
    return `${roundTime(minutes)} ${loc.useFormattedTime.min}`;
  }

  if (time > SECONDS_IN_HOUR) {
    const hours = time / SECONDS_IN_MINUTE;
    return `${roundTime(hours)} ${loc.useFormattedTime.min}`;
  }

  return `${roundTime(time)} ${loc.useFormattedTime.s}`;
};

export default useFormattedTime;
