import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';
import {AppDispatch, RootState} from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useState: TypedUseSelectorHook<RootState> = useReduxSelector;
