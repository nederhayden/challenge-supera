import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;

    a {
        text-decoration: none;
    }

    h1 {
        color: #fff;
    }
`;

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;

    &:hover {
        opacity: 0.7;
    }

    img {
        height: 20%;
        width: 20%;
    }

    div {
        text-align: right;
        margin-right: 10px;

        strong {
            display: block;
            color: #fff;
        }

        span {
            font-size: 12px;
            color: #999;
        }
    }
`;
