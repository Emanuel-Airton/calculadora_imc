import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components';

const Pagina = styled.SafeAreaView`
  flex: 1;
  flexDirection: column;
  padding-top: 10px;
  padding-left: 20px;
`;

const Cabecalho = styled.Text`
margin-top: 10px;
font-size: 25px;
padding: 10px 50px 10px 50px
font-weight: bold;
`;
const Texto = styled.Text`
margin-top: 10px;
font-size: 18px;
padding: 10px 50px 10px 50px
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 20px;
  background-color: #c9c9c9;
  border-radius: 15px
  padding: 10px 20px 10px 20px
  align-items: center;
`;

const ItemResultado = styled.Text`
  font-size: 22px;
  color: #ffffff;
  margin-bottom: 30px;
`;

const AreaResultados = styled.View`
  width: 350px;
  height: 130px;
  margin-top: 100px;
  padding: 10px 50px 0px 10px;
  border-radius: 15px;
  align-items: center;
`;
const Espaco = styled.View`
  padding: 10px 50px 10px 50px;
`;

export default () => {

  const [altura, valorAltura] = useState('0');
  const [peso, valorPeso] = useState('0');
  var imc;
  function valorImc() {
    imc = (peso / (altura.replace(',', '.') * altura.replace(',', '.'))).toFixed(2);
    if (imc < 18.5) {
      console.log('Magreza')
      return <AreaResultados style={{ backgroundColor: '#d4c00d' }}><ItemResultado>Seu IMC: {imc}</ItemResultado><ItemResultado>Classificação: Magreza</ItemResultado></AreaResultados>
    } else if (imc >= 18.5 && imc <= 24.9) {
      console.log('Normal')
      return <AreaResultados style={{ backgroundColor: '#3ca0e8' }}><ItemResultado>Seu IMC: {imc}</ItemResultado><ItemResultado>Classificação: Normal</ItemResultado></AreaResultados>
    } else if (imc >= 25.0 && imc <= 29.9) {
      console.log('Sobrepeso')
      return <AreaResultados style={{ backgroundColor: '#ff8c00' }}><ItemResultado>Seu IMC: {imc}</ItemResultado><ItemResultado>Classificação: Sobrepeso</ItemResultado></AreaResultados>
    } else if (imc >= 30.0 && imc <= 39.9) {
      return <AreaResultados style={{ backgroundColor: '#ff4800' }}><ItemResultado>Seu IMC: {imc}</ItemResultado><ItemResultado>Obesidade grau 2</ItemResultado></AreaResultados>

    } else if (imc >= 40) {
      return <AreaResultados style={{ backgroundColor: '#ff1900' }}><ItemResultado>Seu IMC: {imc}</ItemResultado><ItemResultado>Obesidade grau 3</ItemResultado></AreaResultados>

    }

    else {
      return <ItemResultado>Preencha os valores</ItemResultado>
    }
    return imc
  }
  console.log('valor do imc: ' + valorImc())
  return (
    <Pagina>
      <Cabecalho>Calculadora de IMC</Cabecalho>
      <Texto>Altura</Texto>
      <Input placeholder='Informe sua altura ex: 1.70' keyboardType="numeric" onChangeText={(altura) => (valorAltura(altura))}
      />
      <Texto>Peso</Texto>
      <Input placeholder='Informe seu peso' keyboardType="numeric" onChangeText={(peso) => (valorPeso(peso))}
      />
      <Espaco></Espaco>
      {console.log(altura)}
      
      <ItemResultado>{valorImc()}</ItemResultado>

    </Pagina>
  )
}