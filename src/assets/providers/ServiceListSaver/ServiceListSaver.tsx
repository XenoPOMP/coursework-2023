import cn from 'classnames';
import { FC, useEffect } from "react";
import styles from './ServiceListSaver.module.scss';
import { ServiceListSaverProps } from './ServiceListSaver.props';
import { ProviderProps } from '@providers/Provider.props';
import useAppSettings from '@hooks/useAppSettings';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { initialServiceList, loadServicesFromLocalStorage, ServiceIcon } from "@redux/reducers/serviceListSlice";
import { useDispatch, useSelector } from "react-redux";
import IStore from "@redux/types/redux-types";

const ServiceListSaver: FC<ProviderProps> = ({ children }) => {
  const { cookiePrefix } = useAppSettings();
  const dispatch = useDispatch();

  // Service list
  const [getCookieServices, setCookieServices] = useLocalStorage<Array<{
    isFavorite: boolean,
    icon: ServiceIcon,
    index: number,
  }>>(
    `${cookiePrefix.get()}-services`,
    initialServiceList.services,
  );

  // Items to save
  const servicesFromRedux: Array<{
    isFavorite: boolean,
    icon: ServiceIcon,
    index: number,
  }> = useSelector((state: IStore) => state.serviceList.services);

  // Save items to local storage
  useEffect(() => {
    setCookieServices(servicesFromRedux)
  }, [servicesFromRedux]);

  // Items to load
  useEffect(() => {
    dispatch(loadServicesFromLocalStorage(getCookieServices));
  }, []);

  return <>{children}</>;
};

export default ServiceListSaver;
