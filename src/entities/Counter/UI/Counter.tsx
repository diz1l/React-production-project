import React from 'react';
import { ButtonEl } from 'shared/UI';
import { useDispatch, useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { getCaunterValue } from '../model/selector/getCaunterValue/getCaunterValue';
import { counterActions, counterReducer } from '../model/slice/counterSlice';

const initialReducers: ReducersList = {
    counter: counterReducer,
};

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
        <DynamicModuleLoader reducers={initialReducers}>
            <div>
                <h1 data-testid="value-title">
                    value=
                    {counterValue}
                </h1>
                <ButtonEl data-testid="increment-btn" onClick={increment}>+</ButtonEl>
                <ButtonEl data-testid="decrement-btn" onClick={decrement}>-</ButtonEl>
            </div>
        </DynamicModuleLoader>
    );
};
