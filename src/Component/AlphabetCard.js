import { useDrag } from 'react-dnd';
import './AlphabetCard.css';

const AlphabetCard = ({ alphabet, basket, setBasket }) => {
    const { name, _id } = alphabet;
    const [{ isDragging }, dragRef] = useDrag({
        type: 'alphabet',
        item: { _id, name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    const handelDeleteButton = id => {
        const url = `http://localhost:5000/equationData/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const remaining = basket.filter(item => item._id !== id);
                setBasket(remaining);
            });
    }

    return (
        <div>
            {
                basket ? <div className='mirror-box shadow d-flex align-items-center justify-content-center'>
                    <h6>{name}</h6>
                    <div className='d-flex align-items-end justify-content-end'>
                        <h6>
                            {
                                basket && <button onClick={() => handelDeleteButton(_id)} className='border-0 delet-button fw-bold'>X</button>
                            }
                        </h6>

                    </div>
                </div> : <div ref={dragRef} className='box shadow d-flex align-items-center justify-content-center'>
                    <h6>{name}</h6>
                    {isDragging && '😱'}
                </div>
            }
        </div>
    );
};

export default AlphabetCard;