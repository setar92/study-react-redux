import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { RootState, AppDispatch } from '../../store/index';

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };
