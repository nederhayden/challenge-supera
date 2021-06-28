import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 10px 0;
`;

export const Select = styled.select`
    background: #191920;
    color: #00e7f9;
    border: 1px solid #00e7f9;
    border-radius: 4px;
    transition: background 0.2s;
    height: 40px;
`;

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        background: #222;
        border-radius: 4px;
        padding: 20px;
        color: #fff;

        img {
            align-self: center;
            max-width: 250px;
        }

        > strong {
            font-size: 16px;
            line-height: 20px;

            margin-top: 5px;
        }

        > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
        }

        button {
            background: #00e7f9;
            color: #222;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            margin-top: auto;
            display: flex;
            align-items: center;
            transition: background 0.2s;
            height: 40px;

            &:hover {
                background: #222;
                color: #00e7f9;
                border: 1px solid #00e7f9;
            }

            div {
                display: flex;
                align-items: center;
                padding: 12px;
                background: rgba(0, 0, 0, 0.1);

                svg {
                    margin-right: 5px;
                }
            }

            span {
                flex: 1;
                text-align: center;
                font-weight: bold;
                padding: 2px;
            }
        }
    }
`;
