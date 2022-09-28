import styled from 'styled-components';

export const Form = styled.form`
  display: block;
  width: 100%;
  padding: ${props => `${props.theme.space[2]}px`};
  background-color: ${props => props.theme.colors.bgComponent};
  border-radius: ${props => props.theme.radii.normal};
  box-shadow: ${props => props.theme.shadows.basic};
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  padding: ${props => `${props.theme.space[1]}px`};
`;

export const Input = styled.input`
  width: 75%;
  padding: ${props => `${props.theme.space[1]}px`};
  &:not(:last-child) {
    margin-bottom: ${props => `${props.theme.space[2]}px`};
  }
`;
