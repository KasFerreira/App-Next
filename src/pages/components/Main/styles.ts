import styled, {css }from 'styled-components';

import { AccountBalanceWallet } from '../../../styles/Icons'

export const Container = styled.div `
display: flex;
flex-direction: column;
align-items:center;
width:100%;
background:var(--white);


`
export const Header = styled.div `
z-index: 2;
position: sticky;
top: 0 ;
background: var(--hblue);
color: var(--white);

width:100%;
height: 40px;
justify-content:center;

text-align:center;

display: flex;
align-items: center;
padding:8px 0 9px 13px;

/* @media(min-width:800px){
 width:2000px;
 justify-content:center;
 text-align:center;

} */


`
export const Cadastro = styled.div `
display: flex;
flex-direction: inline;
align-items:center;
width:100%;
color:var(--fonte);
justify-content:center;

background:var(--white);


>form button {
    padding: 8px;
    margin: 10px;
    background: var(--orange);
    border-radius: 9%;
    width:100px;
    color: var(--white);
    font-weight:bold;
    

    outline: 0;
    cursor: pointer;

    &:hover {
        background: var(--sblue);
    }
}

> form input {
    border: 1px solid var(--bg);
    height:30px;
    background: var(--bg);
    text-align:center;
    width: 200px;
}

> form input::-webkit-outer-spin-button,
> form input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

> input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}

`

export const FloatBox = styled.div `
display: flex;
flex-direction: inline;
align-items:left;
width:100%;
color:var(--sblue);
background:var(--white);
position: relative;
left:min-width(200px);
margin-left:200px;

> h1 {
    padding-top:100px;
    padding-left:20px;
    width:200px;
    word-spacing:0px;
    justify-content:center;
   
}


`


// export const BackIcon = styled(ArrowLeft) `
// width:24px;
// height:24px;


// `
export const Tabledata = styled.div `

 table {
    border-spacing: 0;
    border: 1px solid black;
    margin-top:100px;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      color:var(--orange);

      :last-child {
        border-right: 0;
      }
    }
  }



`


const iconCSS = css`
width:90px;
height:90px;

cursor: pointer;

fill: var(--orange);

&:hover,
&active{
    fill: var(--twitter);
}
`

export const Wallet = styled(AccountBalanceWallet)`
position:relative;
/* margin-left:270px; */
margin-top:90px;
color:var(--font);
${iconCSS}

`


export const Teste = styled.div `
display: flex;
flex-direction: column;
align-items:center;
width:100%;
background:var(--white);


`

/* export const BellIcon = styled(Notifications)`
${iconCSS}`;
export const EmailIcon = styled(Email)`
${iconCSS}`;
export const SearchIcon = styled(Search)`
${iconCSS}`; */
