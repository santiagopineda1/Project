
/*
import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
    <React.StrictMode>
        <App />
        <div>
            <p>
                Nuevo App Reserva Hotel
            </p>
        </div>
    </React.StrictMode>, 
    document.getElementById('app')
);


function App() {
    return (
        <div>
            <h1>
                Hemos configurado una aplicacion React a mano, en un entorno local.
                console.log(Hemos configurado una aplicacion React a mano, en un entorno local.)            
            </h1>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app')
);
*/

class App extends React.component {
    render() {
        return <h1> Hola rojas </h1>
    }
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
