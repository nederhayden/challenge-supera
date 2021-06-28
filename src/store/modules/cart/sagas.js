import { toast } from 'react-toastify';
import { all, select, call, put, takeLatest } from 'redux-saga/effects';
import { addToCartSuccess, updateAmountSuccess } from './actions';
import { formatPrice } from '../../../util/format';
import api from '../../../services/api';

function* addToCart({ id }) {
    const productExists = yield select((state) =>
        state.cart.find((p) => p.id === id)
    );

    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if (productExists) {
        yield put(updateAmountSuccess(id, amount));
        toast.success('Quantidade alterada com sucesso');
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        };

        yield put(addToCartSuccess(data));
        toast.success('Produto adicionado com sucesso');
    }
}

function* updateAmount({ id, amount }) {
    if (amount <= 0) return;

    yield put(updateAmountSuccess(id, amount));
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
