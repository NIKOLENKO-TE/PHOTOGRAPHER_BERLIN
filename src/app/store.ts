import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userProductsReducer from '../features/user/wishProducts/productsSlice';
import productsReducer from '../features/products/productsSlice';
import userDateReducer from '../components/MyAccount/UserSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
	reducer: {
		userProducts: userProductsReducer,
		userDate: userDateReducer,
		products: productsReducer,
		auth: authReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
