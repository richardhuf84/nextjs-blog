import styled from 'styled-components';
import { color, space, layout, flexbox, borders } from 'styled-system';

const Box = styled.div`
  boxSizing: 'border-box'
  minWidth: 0
  fontFamily: 'Sans serif'
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${borders}
`;

export default Box;