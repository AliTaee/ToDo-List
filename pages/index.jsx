import React from 'react';
import { useCounterContext } from '../context/store';
import HelloWorld from '../components/HelloWorld';
import '../styles/style.scss';

function Index() {
    return (
        <useCounterContext.Provider>
            <div>
                <HelloWorld />
            </div>
        </useCounterContext.Provider>
    );
}

export default Index;
