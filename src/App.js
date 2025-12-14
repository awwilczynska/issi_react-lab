import './App.css';
import {useState} from "react";


function App() {
    const [title, setTitle] = useState('Wall-E'); //stan

    // function handleChange(event) {
    //     setTitle(event.target.value); //zachowanie
    // }
    //
    // function handleOnClick(event) {
    //     alert(title); //zachowanie
    // }

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
            {/*<input type="text" onChange={handleChange}/>*/}
            <input type="text" onChange={(event)=>setTitle(event.target.value)}/>
            {/*<button onClick={handleOnClick}>Show film title</button>*/}
            <button onClick={()=>alert(title)}>Show film title</button>
        </div> //struktura
    );
}

export default App;
