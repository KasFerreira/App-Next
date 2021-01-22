import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle `
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html, body, #root{
    max-height: 100vh;
    max-width:100vw;
    background:var(--white);

    width:100%;
    height:100%;
}
*, button, input{
    border:0;
    background:none;
    font-family: -apple-system, system-ui, sans-serif;
}

html {
    background:var(--white);
}

:root {
    --primary : #000;
    --hblue: #228a95;
    --sblue: #187680;
    --white: white;
    --fonte:#777777;
    --orange: #ef9c4b;
    --sorange:#fd8030;
    --bg: #f8f8f8;
   
}
`

