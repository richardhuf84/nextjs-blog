import styled from 'styled-components';
import { color, space, layout, flexbox, borders } from 'styled-system';

const Box = styled.div`
  boxSizing: 'border-box'
  minWidth: 0
  ${color}
  ${space}
  ${layout}
  ${flexbox}
`;

export default Box;