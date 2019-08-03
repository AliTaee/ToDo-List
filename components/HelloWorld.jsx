import React from 'react';
import { useCounterContext } from '../context/store';

export default function HelloWorld() {
    const { massege } = useCounterContext();
    return (
        <p>
            {massege}
        </p>
    );
}
