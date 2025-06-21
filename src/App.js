// src/App.js

/**
 * App Component: The main entry point for the React application.
 * It primarily renders the Pokegame component.
 */
function App() {
    return (
        <div>
            {/* Main title for the application */}
            <h1 className="App-title">Pokedex Game</h1>
            {/* Render the Pokegame component, which handles the game logic and rendering two Pokedex hands */}
            <Pokegame />
        </div>
    );
}

// Render the App component into the root div in index.html
ReactDOM.render(<App />, document.getElementById('root'));