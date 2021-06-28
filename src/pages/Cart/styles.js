import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px;
    background: #222;
    border-radius: 4px;

    footer {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            background: #00e7f9;
            color: #222;
            border: 0;
            border-radius: 4px;
            padding: 12px 20px;
            font-weight: bold;
            text-transform: uppercase;
            transition: background 0.2s;
            height: 40px;

            &:hover {
                background: #222;
                color: #00e7f9;
                border: 1px solid #00e7f9;
            }
        }
    }
`;

export const ProductTable = styled.table`
    width: 100%;

    thead th {
        color: #fff;
        text-align: left;
        padding: 12px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    img {
        height: 100%;
    }

    strong {
        color: #eee;
        display: block;
    }

    span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
    }

    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid #ddd;
            text-align: center;
            border-radius: 4px;
            color: #555;
            padding: 6px;
            width: 50px;
        }
    }

    button {
        background: none;
        border: 0;
        padding: 6px;
    }
`;

export const Frete = styled.div`
    display: flex;
    align-items: baseline;

    p {
        color: #eee;
        font-weight: bold;
    }

    strong {
        font-size: 20px;
        margin-left: 5px;
        color: #fff;
    }
`;

export const Total = styled.div`
    display: flex;
    align-items: baseline;

    span {
        color: #eee;
        font-weight: bold;
    }

    strong {
        font-size: 28px;
        margin-left: 5px;
        color: #fff;
    }
`;
