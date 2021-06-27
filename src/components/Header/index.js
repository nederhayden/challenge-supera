import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Cart } from './styles';
import cartIcon from '../../assets/cart-icon.svg';

export default function Header() {
    const cartSize = useSelector((state) => state.cart.length);

    return (
        <Container>
            <Link to="/">
                <h1>E-Commerce Games</h1>
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <img src={cartIcon} alt="Cart Icon" />
            </Cart>
        </Container>
    );
}
