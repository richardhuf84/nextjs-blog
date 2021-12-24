import styled from 'styled-components';
import { borders, colors, layout } from 'styled-system';

const
  TextInput = styled('input')(
    {
      padding: 16,
      borderSize: 2,
      borderColor: 'black',
      height: 12,
      display: 'inline-block',
      marginRight: 16
    },
    borders,
    colors,
    layout
  );

export default TextInput;