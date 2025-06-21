// src/Pokecard.js

// Base URL for Pokemon sprites from PokeAPI
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

/**
 * Pokecard Component: Displays a single Pokemon card.
 * It receives props for id, name, type, and base_experience.
 */
function Pokecard(props) {
    // Construct the image source URL using the Pokemon's ID
    const imgSrc = `${POKE_API}${props.id}.png`;

    return (
        // Each Pokecard has a unique class for styling
        <div className="Pokecard">
            {/* Display the Pokemon's name */}
            <h1 className="Pokecard-title">{props.name}</h1>
            {/* Display the Pokemon's image */}
            <div className="Pokecard-image">
                <img src={imgSrc} alt={props.name} />
            </div>
            {/* Display the Pokemon's type */}
            <p className="Pokecard-data">Type: {props.type}</p>
            {/* Display the Pokemon's base experience */}
            <p className="Pokecard-data">EXP: {props.base_experience}</p>
        </div>
    );
}