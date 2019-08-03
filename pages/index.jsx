import React from 'react';
import { useCounterContext } from '../context/store';
import HelloWorld from '../components/HelloWorld';

function Index() {
    return (
        <useCounterContext.Provider>
            <div>
                <HelloWorld />
                <style jsx global>
                    {`
                    body {
                        background: #212121;
                        color: #fefefe;
                    }
                `}
                </style>
            </div>
        </useCounterContext.Provider>
    );
}

export default Index;
