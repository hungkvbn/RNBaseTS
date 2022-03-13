import {useContext, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {AuthenticationContext} from '../services/auth/authentication';
import {DashboardAsyncActions, DashboardSelectors} from '../services/dashboard';
import {useAppDispatch} from '../store/hooks';

const useGetProfile = () => {
  const dispatch = useAppDispatch();
  const authcontext = useContext(AuthenticationContext);
  const useProfile = useSelector(DashboardSelectors.selectProfile);
  useEffect(() => {
    if (authcontext?.accessToken) {
      dispatch(
        DashboardAsyncActions.fetchProfile({
          accessToken: authcontext.accessToken,
        }),
      );
    }
  }, [dispatch, authcontext]);

  return [useProfile];
};

export {useGetProfile};
