import React from 'react';

import { Container } from './styles';

function ProductItem({ data }) {
  return (
    <Container>
      {data.name}
    </Container>
  );
};

export default ProductItem;
