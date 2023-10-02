import styled, { css } from "styled-components";
// $sub-color: grey;
// $main-color: black;
const subColor = "grey";
const mainColor = "black";
// @mixin shrinkLabel {
//   top: -14px;
//   font-size: 12px;
//   color: $main-color;
// }
const shrinkLabelStyle = css`
  top: -14px;
  font-size: 12px;
  color: $main-color;
`;
export const FormInputLabel = styled.label`
  color: $sub-color;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyle};
  //     &.shrink {
  //       @include shrinkLabel();
  //     }
`;
export const Input = styled.input`
  background: none;
  background-color: white;
  color: $sub-color;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid $sub-color;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyle}
  }
`;
export const Group = styled.div`
  position: relative;
  margin: 45px 0;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;


