import 'react-alice-carousel/lib/alice-carousel.css';
import React from 'react'
import AliceCarousel from "react-alice-carousel";

const handleDragStart = (element: { preventDefault: () => any; }) => element.preventDefault();

const items = [
    <img src='https://github.com/VanessaIsabella.png' onDragStart={handleDragStart} role="presentation" />,
    <img src='https://github.com/thaismelim.png' onDragStart={handleDragStart} role="presentation" />,
    <img src='https://github.com/Pddro1.png' onDragStart={handleDragStart} role="presentation" />,
    <img src='https://github.com/viniciuslopes98.png' onDragStart={handleDragStart} role="presentation" />,
    <img src='https://github.com/ruriemiguel.png' onDragStart={handleDragStart} role="presentation" />,
    <img src='https://github.com/marianadsm.png' onDragStart={handleDragStart} role="presentation" />,
    <img src='https://github.com/anabiax.png' onDragStart={handleDragStart} role="presentation" />,
];

const Gallery = () =>{
    return(
        <AliceCarousel mouseTracking items={items} />
    );
}

