import React from 'react';
import styled from 'styled-components';
import Label from '../atoms/Label';

const BoxStyled = styled.div`
  width: 80%;
  border: 1px gray solid;
  border-radius: 5px;
  font-size: 20px;
  padding: 0 10px;
  margin-bottom: 10px;
  color: white;
`;

export default function Box(props) {
  return (
    <BoxStyled>
      <Label text={"Nombre del producto: " + props.name + '\n'} />
      <Label text={"Tipo de cafe: " + props.kind + '\n'} />
      <Label text={"Origen del cafe: " + props.origen + '\n'} />
      <Label text={"Stock: " + props.stock + '\n'}/>
      <Label text={"Altura: " + props.high} />
    </BoxStyled>
  );
};