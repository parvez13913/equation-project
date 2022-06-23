import React from 'react';
import './SecondSection.css';

const SecondSection = () => {
    return (
        <div className='mt-4'>
            <div class="d-flex">
                <div className='operator shadow d-flex align-items-center justify-content-center' draggable="true">
                    <span className='h5 fw-bold text-center'>+</span>
                </div>
                <div className='operator shadow d-flex align-items-center justify-content-center ' draggable="true">
                    <span className='h5 fw-bold text-center'>-</span>
                </div>
                <div className='operator shadow d-flex align-items-center justify-content-center ' draggable="true">
                    <span className='h5 fw-bold text-center'>*</span>
                </div>
                <div className='operator shadow d-flex align-items-center justify-content-center ' draggable="true">
                    <span className='h5 fw-bold text-center'>/</span>
                </div>
                <div className='d-flex mx-4'>
                    <div className='shadow d-flex align-items-center justify-content-center comparator' draggable="true">
                        <span className='h5 fw-bold text-center'>
                            &lt;
                        </span>
                    </div>
                    <div className='shadow d-flex align-items-center justify-content-center comparator' draggable="true">
                        <span className='h5 fw-bold text-center'>
                            &gt;
                        </span>
                    </div>
                </div>
                <div className='shadow d-flex align-items-center justify-content-center rsh-integer p-4 rhs-interger' draggable="true">
                    <span className='h5 fw-bold'>RHS Integer</span>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;