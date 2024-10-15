import React, { useState } from 'react';
function App() {
    const [input, setInput] = useState('');
    const [reversed, setReversed] = useState('');
    const reverseArray = () => {
        const array = input.split(',');
        let result = '';
        for (let i = array.length - 1; i >= 0; i--) {
            if (i < array.length - 1) result += ','; 
            result += array[i]; }
        setReversed(result); };
    return (
        <div><h1>Array Reverser</h1>
<input type="text" value={input}onChange={(e) => setInput(e.target.value) }placeholder="Elements with commas" />
            <button onClick={reverseArray}>Reverse</button>
            <p>Reversed: {reversed}</p></div> );}
export default App;
