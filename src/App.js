import './App.css';
import {useState} from "react";


function App() {
    const [title, setTitle] = useState('Wall-E');

    let msg = '';
    if (title.length < 3) {
        msg = 'Title is too short';
    } else if (title.length >= 3 && title.length < 15) {
        msg = 'Title is OK';
    } else {
        msg = 'Title is too long';
    }

    const movies = [
        {title: "Wall-E"},
        {title: "Pulp Fiction"},
        {title: "Matrix"},
        {title: "1670"},
    ];

    return (
        <div>
            <h1> My favourite movies to watch</h1>
            <h2> Titles</h2>
            <ul>

                {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}

            </ul>
            <h2> My favourite movie for today is {title}</h2>
            {
                title.length > 0 && <div>{msg}</div>
            }
            <input type="text" onChange={(event) => setTitle(event.target.value)}/>
            <button onClick={() => alert(title)}>Show film title</button>
        </div>
    );
}

export default App;
