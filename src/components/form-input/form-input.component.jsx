import {Group,FormInputLabel,Input}from'./form-input.styles'
const FormInputs = ({ label, ...otherProps }) => {
  return (
      <Group>
        <Input {...otherProps} />
        {label && (<FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>)}
   
    </Group>
  );
};
export default FormInputs;
