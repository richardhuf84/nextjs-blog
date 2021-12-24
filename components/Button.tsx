import styled from 'styled-components';
import { border, color, space, layout, typography, variant } from 'styled-system';

const Button = styled('button')(
  {
    appearance: 'none',
    border: 0,
    fontFamily: 'Sans-serif',
    borderRadius: 4
  },
  color,
  space,
  layout,
  typography,
  border,
  variant({
    variants: {
      primary: {
        p: ['small', 'medium'],
        bg: 'primary',
        color: 'onPrimary',
        fontSize: 'body'
      },
      secondary: {
        p: 'small',
        bg: 'secondary',
        color: 'onSecondary',
        fontSize: 'body'
      }
    }
  })
)

// p={[2, 3]}
// radius={2}
// bg="teal"
// fontSize={4}
// fontWeight='bold'
// borderRadius={4}



export default Button;




