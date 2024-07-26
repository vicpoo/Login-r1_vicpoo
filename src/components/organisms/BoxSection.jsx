import React, { useState } from 'react';
import { data } from '../../dataBase/data';
import Box from '../molecules/Box';
import Button from '../atoms/Button';
import './BoxSection.css'

export default function ProductionSection() {
  const [productos, setProductos] = useState([]);

  const handleShowClick = () => {
    const productosComponentes = data.data.map((producto) => (
      <Box  name={producto.nombre} stock={producto.cantidad} high={producto.altura} kind={producto.tipo} origen={producto.origen}/>
    ));
    setProductos(productosComponentes);
  };

  return (
    <div className="production-section">
      <Button onClick={handleShowClick} text="Ver Almacen" className="button-margin" />
      {productos}
    </div>
  );
}