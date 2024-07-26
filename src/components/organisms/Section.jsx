import React, { useState } from 'react';
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import './Section.css';
import { data} from '../../dataBase/data';

function Section() {
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [origen,setOrigen] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [altura, setAltura] = useState('');

    const producto = {
        nombre,
        tipo,
        origen,
        cantidad,
        altura
    };


    const handleButtonClick = () => {
        data.data.push(producto);
        console.log(data.data);
        alert('Se a guardado todo en el almacen');
    };

    return (
        <div id="product_section">
            <Field type="text" placeholder="E.j Latte Macchiato" text="Nombre del cafe" value={nombre} onChange={(event) => setNombre(event.target.value)} />
            <Field type="text" placeholder="E.j Mocca" text="Tipo del cafe" value={tipo} onChange={(event) => setTipo(event.target.value)} />
            <Field type="text" placeholder="E.j Ocosingo" text="Origen del cafe" value={origen} onChange={(event) => setOrigen(event.target.value)} />
            <Field type="text" placeholder="Ej. 10" text="Cantidad del cafe" value={cantidad} onChange={(event) => setCantidad(event.target.value)} />  
            <Field type="text" placeholder="Ej. 1500 metros" text="Altura del cafe" value={altura} onChange={(event) => setAltura(event.target.value)} />    
            <Button onClick={handleButtonClick} text="Guardar Producto" />
        </div> 
    );
}

export default Section;