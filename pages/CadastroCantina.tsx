import React from 'react';
import { Button } from '@mantine/core';

export function ButtonCantinas() {
  return (
    <div style={{ display: 'flex-row', justifyContent: 'center' }}>
      <Button>Unidade: Campus Centro</Button>
      <Button>Unidade: Campus Conceição</Button>
      <Button>Unidade: Campus Barcelona</Button>
      <Button>Gerenciar Unidades</Button>
    </div>
  );
}

export default ButtonCantinas;
