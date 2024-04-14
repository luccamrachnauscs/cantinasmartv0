import React from 'react';
import { NavbarSimpleColored } from './NavbarSimpleColored';
import { ButtonCantinas } from './CadastroCantina';

function cadastroCantinaInicio() {
  return (
    <><div className='container-principal'>
        <div>
          <NavbarSimpleColored /> 
        </div>
        <div className='container-central'>
          <ButtonCantinas />
        </div>
      </div></>
  );
}

export default cadastroCantinaInicio;