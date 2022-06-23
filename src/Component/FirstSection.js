import React from 'react';
import './FirstSection.css';

const FirstSection = () => {
    return (
        <div className='w-50'>
            <div class="d-flex">
                <div className='box d-flex align-items-center justify-content-center' draggable="true">
                    <span className='h5'>A</span>
                </div>
                <div className='box d-flex align-items-center justify-content-center ' draggable="true">
                    <span className='h5'>B</span>
                </div>
                <div className='box d-flex align-items-center justify-content-center ' draggable="true">
                    <span className='h5'>C</span>
                </div>
                <div className='box d-flex align-items-center justify-content-center ' draggable="true">
                    <span className='h5'>D</span>
                </div>
                <div className='box d-flex align-items-center justify-content-center ' draggable="true">
                    <span className='h5'>E</span>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;