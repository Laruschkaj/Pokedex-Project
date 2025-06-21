// src/Pokedex.js

/**
 * Pokedex Component: Represents a hand/deck of Pokemon cards.
 * It receives an array of pokemon objects, total experience, and a boolean for win status.
 */
function Pokedex(props) {
    // Determine the CSS class for the winner message based on isWinner prop
    const winnerClass = props.isWinner ? 'Pokedex-winner' : 'Pokedex-loser';

    return (
        <div className="Pokedex">
            {/* Display the title for this hand/deck */}
            <h2 className="Pokedex-title">Pokemon Hand</h2>
            {/* Display the total experience for this hand */}
            <p className="Pokedex-exp">Total Experience: {props.exp}</p>
            {/* Conditionally display the winner message */}
            <p className={winnerClass}>{props.isWinner ? 'THIS HAND WINS!' : 'This hand loses!'}</p>

            {/* Container for the Pokecard components */}
            <div className="Pokedex-cards">
                {/* Loop through the 'pokemon' array provided via props */}
                {/* For each pokemon object, render a Pokecard component */}
                {props.pokemon.map(p => (
                    <Pokecard
                        key={p.id} // Use a unique ID for the key prop
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        base_experience={p.base_experience}
                    />
                ))}
            </div>
        </div>
    );
}

// Define the default list of Pokemon for Pokedex using defaultProps
// This list will be used if no 'pokemon' prop is explicitly passed to Pokedex
Pokedex.defaultProps = {
    pokemon: [
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
        { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, 'name': 'Gengar', type: 'poison', base_experience: 225 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]
};