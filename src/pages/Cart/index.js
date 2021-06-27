import React from 'react';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import { Container, ProductTable, Total, Frete } from './styles';
import images from '../../services/list-image';

export default function Cart() {
    const total = useSelector((state) =>
        formatPrice(
            state.cart.reduce((totalSum, product) => {
                return totalSum + 10 + product.price * product.amount;
            }, 0)
        )
    );

    const shipping = useSelector((state) =>
        formatPrice(
            state.cart.reduce((totalSum, product) => {
                return totalSum + 10 * product.amount;
            }, 0)
        )
    );

    const cart = useSelector((state) =>
        state.cart.map((product) => ({
            ...product,
            subtotal: formatPrice(product.price * product.amount),
        }))
    );

    const dispatch = useDispatch();

    function increment(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount + 1)
        );
    }

    function decrement(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount - 1)
        );
    }

    function Image({ productId }) {
        const imageMovie = images.find((image) => image.id === productId);
        return <img src={imageMovie.url} alt={imageMovie.image} />;
    }

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th aria-label="-" />
                        <th>Produto</th>
                        <th>Qtd</th>
                        <th>Subtotal</th>
                        <th aria-label="-" />
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => (
                        <tr>
                            <td>
                                <Image productId={product.id} />
                            </td>
                            <td>
                                <strong>{product.name}</strong>
                                <span>{product.priceFormatted}</span>
                            </td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => decrement(product)}
                                    >
                                        <MdRemoveCircleOutline
                                            size={20}
                                            color="#166536"
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={product.amount}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => increment(product)}
                                    >
                                        <MdAddCircleOutline
                                            size={20}
                                            color="#166536"
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{product.subtotal}</strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() =>
                                        dispatch(
                                            CartActions.removeFromCart(
                                                product.id
                                            )
                                        )
                                    }
                                >
                                    <MdDelete size={20} color="#FF0B2B" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedido</button>
                <Frete>
                    <p>Frete: </p>
                    <strong>{shipping}</strong>
                </Frete>
                <Total>
                    <span>Total</span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    );
}
