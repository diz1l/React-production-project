import React from 'react';
import { ButtonEl } from 'shared/UI';
import { useDispatch, useSelector } from 'react-redux';
import { getCaunterValue } from '../model/selector/getCaunterValue/getCaunterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCaunterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                value=
                {counterValue}
            </h1>
            <ButtonEl data-testid="increment-btn" onClick={increment}>+</ButtonEl>
            <ButtonEl data-testid="decrement-btn" onClick={decrement}>-</ButtonEl>
        </div>
    );
};
