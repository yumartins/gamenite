import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

    html {
        box-sizing: border-box;
        font-family: 'TT Norms', sans-serif !important;
        background-color: #030616;
    }

    #root {
        display: flex;
        width: 100vw;
        position: relative;
    }

`;

export default Global;