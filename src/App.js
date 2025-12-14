import './App.css';
import {useState} from "react";


function App() {
    const [title, setTitle] = useState('Wall-E'); //stan

    function handleChange(event) {
        setTitle(event.target.value); //zachowanie
    }

    let msg = '';
    if (title.length < 3) {
        msg = 'Title is too short';
    } else if (title.length >= 3 && title.length < 15) {
        msg = 'Title is OK';
    } else {
        msg = 'Title is too long';
    }

    return (
        <div>
            <h1> My favourite movies to watch</h1>
            <h2> My favourite movie for today is {title}</h2>
            {
                title.length > 0 && <div>{msg}</div>
            }
            <input type="text" onChange={handleChange}/>
        </div> //struktura
    );
}

export default App;
