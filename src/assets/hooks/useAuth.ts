import { useDispatch, useSelector } from 'react-redux';
import IStore from '@redux/types/redux-types';
import { changeUuid } from '@redux/reducers/authSlice';

type UseAuthHook = {
  isLogged: boolean;
  uuid: string | null;
  signUp: (uuid: string | null) => void;
};

const useAuth = (): UseAuthHook => {
  const uuid: string | null = useSelector((state: IStore) => state.auth.uuid);
  const isLogged = uuid !== null;
  const dispatch = useDispatch();

  return {
    isLogged: isLogged,
    uuid,
    signUp: (uuid) => dispatch(changeUuid(uuid)),
  };
};

export default useAuth;
