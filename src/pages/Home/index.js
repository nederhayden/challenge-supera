import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { formatPrice } from '../../util/format';
import { ProductList, Select } from './styles';
import api from '../../services/api';
import images from '../../services/list-image';

import * as CartActions from '../../store/modules/cart/actions';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [sortType, setSortType] = useState('name');

    const dispatch = useDispatch();

    useEffect(() => {
        async function loadProducts(type) {
            const response = await api.get('products');
            const types = {
                name: 'name',
                price: 'price',
                score: 'score',
            };
            const sortProperty = types[type];

            const data = response.data
                .sort((a, b) => (a[sortProperty] < b[sortProperty] ? -1 : 1))
                .map((product) => ({
                    ...product,
                    priceFormatted: formatPrice(product.price),
                }));

            setProducts(data);
        }

        loadProducts(sortType);
    }, [sortType]);

    function handleAddProducts(id) {
        dispatch(CartActions.addToCartRequest(id));
    }

    function Image({ productId }) {
        const imageMovie = images.find((image) => image.id === productId);
        return <img src={imageMovie.url} alt={imageMovie.image} />;
    }

    return (
        <>
            <Select>
                <select onChange={(e) => setSortType(e.target.value)}>
                    <option value="name">Ordem Alfabética</option>
                    <option value="price">Preço</option>
                    <option value="score">Popularidade</option>
                </select>
            </Select>
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
                            <span>Adicionar ao carrinho</span>
                        </button>
                    </li>
                ))}
            </ProductList>
        </>
    );
}
