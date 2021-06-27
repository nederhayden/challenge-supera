import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../util/format';
import { ProductList } from './styles';
import api from '../../services/api';
import images from '../../services/list-image';

import * as CartActions from '../../store/modules/cart/actions';

export default function Home() {
    const [products, setProducts] = useState([]);

    const amount = useSelector((state) =>
        state.cart.reduce((sumAmount, product) => {
            sumAmount[product.id] = product.amount;

            return sumAmount;
        }, {})
    );

    const dispatch = useDispatch();

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('products');

            const data = response.data.map((product) => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));
            setProducts(data);
        }

        loadProducts();
    }, []);

    function handleAddProducts(id) {
        dispatch(CartActions.addToCartRequest(id));
    }

    function Image({ productId }) {
        const imageMovie = images.find((image) => image.id === productId);
        return <img src={imageMovie.url} alt={imageMovie.image} />;
    }

    return (
        <ProductList>
            {products.map((product) => (
                <li key={product.id}>
                    <Image productId={product.id} />
                    <strong>{product.name}</strong>
                    <p>{`Score: ${product.score}`}</p>
                    <span>{product.priceFormatted}</span>
                    <button
                        type="button"
                        onClick={() => handleAddProducts(product.id)}
                    >
                        <div>{amount[product.id] || 0}</div>
                        <span>Adicionar ao carrinho</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
}
