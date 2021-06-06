import styled from 'styled-components';
import { Button } from 'react-bootstrap';

interface IViewProps {
  kind: 'primary' | 'secondary';
}
export const ButtonStyle = styled(Button)<IViewProps>`
  font-size: 14px;
  text-align: center;
  width: 100px;
  border-radius: 20px;
  padding-bottom: 10px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  background-color: ${(props) => (props.kind === 'primary' ? '#11998e' : '#0D47A1')};
  color: ${(props) => (props.kind === 'primary' ? 'white' : 'blue')};
`;
