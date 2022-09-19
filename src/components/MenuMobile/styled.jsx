import styled, { css } from "styled-components";

export const Container = styled.section`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--navbar);
    
    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);

    .user {
        display: flex;
        flex-direction: column;
        font-size: 1.4rem;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 80%;
        margin: auto;
        color: var(--azulmarinho);
    }

    .conta {
        position: absolute;
        left: 60px;
        top: 0;
    }
    

    .icon-user{
        transform: translate(-45px, 35px);
    }



    .shopping-cart-container{
        position: absolute;
        top: 35vh;
        left: 15px;
        display: flex;
        flex-direction: column;
        align-itens: center;
        justify-content: center;
    }

    .icon-cart{
        display: flex;
        flex-direction: column;
        align-self: center;
        justify content: center;
        transform: translate(0,-100px);
    }

    .icon-cart span {
        margin-left: 20px;
    }

    .svg {
        position: absolute;
        top: 0;
        right: 0;
        color: var(--azulmarinho);
    }

    .mobile {
        position: absolute;
        top: 5px;
        right 5px;
        font-size: 30px;
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);
        
        .mobile {
            display: none !important;
        }

        .user {
            display: flex !important;
        }
    `}
`;
