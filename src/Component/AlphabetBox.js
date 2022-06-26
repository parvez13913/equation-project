import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import AlphabetCard from './AlphabetCard';
import './AlphabetBox.css';

const AlphabetBox = () => {
    const [alphabets, setAlphabets] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/equationData`;
        fetch(url)
            .then(res => res.json())
            .then(result => setAlphabets(result));
    }, []);
    const [basket, setBasket] = useState([]);
    const [{ isOver }, dropRef] = useDrop({
        accept: 'alphabet',
        drop: (item) => setBasket((basket) =>
            !basket.includes(item) ? [...basket, item] : basket),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    return (
        <React.Fragment>
            <div className='d-flex'>
                {alphabets.map(alphabet => <AlphabetCard
                    draggable
                    key={alphabet._id}
                    alphabet={alphabet}
                />)}
            </div>
            <div className='drop-area d-flex align-items-center justify-content-start' ref={dropRef}>
                {basket.map(alphabet => <AlphabetCard
                    key={alphabet._id}
                    alphabet={alphabet}
                    basket={basket}
                    setBasket={setBasket}
                />)}
                {isOver && <div>Drop Here!</div>}
            </div>
        </React.Fragment>
    );
};

export default AlphabetBox;