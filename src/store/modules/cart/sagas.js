import { all, select, call, put, takeLatest } from 'redux-saga/effects';
import { addToCartSucess, updateAmountSucess } from './actions';
import { formatPrice } from '../../../util/format';
import api from '../../../services/api';

function* addToCart({ id }) {
    const productExists = yield select((state) =>
        state.cart.find((p) => p.id === id)
    );

    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if (productExists) {
        yield put(updateAmountSucess(id, amount));
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        };

        yield put(addToCartSucess(data));
    }
}

function* updateAmount({ id, amount }) {
    if (amount <= 0) return;

    yield put(updateAmountSucess(id, amount));
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
