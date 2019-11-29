import React from 'react';
import "./radiobox.scss"
import styled from "styled-components";



const Radiobox = ({ name, labelText, ...props}) => (
    <Item className="radioboxLabel">
        <RadioButton type="radio" name={name} {...props} />
        <RadioButtonLabel />
        <div className="radioboxText">{labelText}</div>
    </Item>);



const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  right: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #cc548e;
  border: 1px solid #bebebe;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  right: 3px;
    position: absolute;
    cursor: pointer;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  &:checked + ${RadioButtonLabel} {
    background: #db7290;
    border: 1px solid #db7290;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: white;
    }
  }
`;



export default Radiobox;