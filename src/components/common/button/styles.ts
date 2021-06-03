import styled from 'styled-components';

interface IViewProps {
  kind: 'primary' | 'secondary';
}
export const Button = styled.button<IViewProps>`
  font-size: 14px;
  padding: 10px;
  color: ${(props) => (props.kind === 'primary' ? 'white' : 'blue')};
`;
