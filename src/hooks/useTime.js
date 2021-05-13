import { useEffect, useState } from "react";

let interval;
export const useTime = ({ updateTimeWhen, baseTime = 10, cb, isSelected }) => {
  const [_baseTime, setBaseTime] = useState(baseTime);
  const [_updateTimeWhen, setUpdateTimeWhen] = useState(updateTimeWhen);
  const [time, setTime] = useState(_baseTime);
  const realoadInterval = () => {
    stopInterval();
    clearInterval(interval);
    setTime(_baseTime);
    interval = setInterval(() => setTime((prevStime) => prevStime - 1), 1000);
  };

  const stopInterval = () => {
    clearInterval(interval);
  };

  useEffect(() => {
    realoadInterval();
    setTime(_baseTime);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    clearInterval();
    realoadInterval();
    setTime(_baseTime);
    return () => {
      clearInterval(interval);
    };
  }, [..._updateTimeWhen, _baseTime]);
  useEffect(() => {
    if (time === 0 && cb && !isSelected) {
      cb();
    }
    return () => {};
  }, [time]);

  return {
    time,
    baseTime: _baseTime,
    setBaseTime,
    realoadInterval,
    stopInterval,
  };
};
