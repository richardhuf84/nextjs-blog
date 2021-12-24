import styled from 'styled-components';
import { borders, colors, layout, space } from 'styled-system';

const
  TextInput = styled('input')(
    {
      border: 0,
      borderRadius: 4,
      display: 'inline-block',
      height: 16,
      padding: 16,
    },
    borders,
    colors,
    layout,
    space
  );

export default TextInput;