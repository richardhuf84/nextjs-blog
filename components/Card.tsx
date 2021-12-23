import React from 'react';
import styled from 'styled-components';
import Box from './Box';

// extend Box component
const Card = styled(Box)({
  borderRadius: '4',
  boxShadow: '0 2px 4px thba(0, 0, 0, 0.4)',
  padding: '4'
});

export default Card;