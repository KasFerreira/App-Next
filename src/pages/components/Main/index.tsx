// import { Container } from 'next/app';
import React, { useState } from 'react';
var _ = require('lodash/core');
import { useRouter } from 'next/router'



const data = require('../../../api/api.json')

import {
    Container,
    Header,
    Cadastro,
    FloatBox,
    Wallet,
    Tabledata,
    Teste
} from './styles';




const Main: React.FC = () => {
    const [valor, setValue] = useState("");
    const [showResults, setShowResults] = React.useState(false)
    const router = useRouter()

    function Redirect() {
    if (typeof window !== 'undefined') {
        router.push('../usuarios/')
        console.log(router)
      }
    }

    function handlesubmit(e) {
        e.preventDefault();
        setShowResults(true);
        console.log(valor)

    }

    function handleClick(e) {

        console.log("OII")
        Redirect()
        
    }

    // console.log(data.rateTable[0])
    // console.log("-----")
    // console.log(data.rateTable[1])
    // console.log(data.client)


        // _.find(data.client, function(o){
        //     if(o.name == "")
        // })

    let tab1 = data.rateTable[0];
    let tab2 =  data.rateTable[1];


    return (
        <Container>
            <Header>


                <strong>Lucas Ferreira</strong>

            </Header>
            <FloatBox>  
                <Wallet /><h1>Simulações de taxas</h1>
            </FloatBox>
            <Cadastro>
                <form onSubmit={handlesubmit} >

                    <input type='number' min="300" max="10000,00" step="any" onChange={e => setValue(e.target.value)} value={valor} id="loan" placeholder="R$0,00" name="loan"></input>

                    <button >
                        Clique
              </button>
                </form>
            </Cadastro>

            {showResults && <>
                <Tabledata  onClick={(e)=>{handleClick(e)}} id='table1'>
                 <table>
                            <tr><th>Parcela</th>
                                <th>Juros Da Parcela</th>
                                <th>Valor da Parcela</th>
                                <th>Valor Total</th>
                                <th>Comissão Parceiro</th>
                                
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>{tab1.installments[0].installmentInterest}%</td>
                                <td>{tab1.installments[0].installmentValue}</td>
                                <td>{tab1.installments[0].fullValue}</td>
                                <td>{tab1.installments[0].comission}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>{tab1.installments[1].installmentInterest}%</td>
                                <td>{tab1.installments[1].installmentValue}</td>
                                <td>{tab1.installments[1].fullValue}</td>
                                <td>{tab1.installments[1].comission}</td>
                            </tr>
                </table>
                       

                </Tabledata>
                <Tabledata onClick={handleClick} id='table2' >
                <table>
                            <tr><th>Parcela</th>
                                <th>Juros Da Parcela</th>
                                <th>Valor da Parcela</th>
                                <th>Valor Total</th>
                                <th>Comissão Parceiro</th>
                                
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>{tab2.installments[0].installmentInterest}%</td>
                                <td>{tab2.installments[0].installmentValue}</td>
                                <td>{tab2.installments[0].fullValue}</td>
                                <td>{tab2.installments[0].comission}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>{tab2.installments[1].installmentInterest}%</td>
                                <td>{tab2.installments[1].installmentValue}</td>
                                <td>{tab2.installments[1].fullValue}</td>
                                <td>{tab2.installments[1].comission}</td>
                            </tr>
                </table>


                </Tabledata></>}

        </Container>
    );
}

export default Main;