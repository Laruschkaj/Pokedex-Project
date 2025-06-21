// src/Pokegame.js

/**
 * Pokegame Component: Manages the game logic for two Pokedex hands.
 * It shuffles a default list of Pokemon and distributes them into two hands.
 * It also calculates the total experience for each hand and determines the winner.
 */
function Pokegame() {
    // Get the default list of Pokemon from Pokedex.defaultProps
    // This is a common pattern to centralize data if it's primarily used by a specific component
    const allPokemon = Pokedex.defaultProps.pokemon;

    // 1. Shuffle the array of all Pokemon
    // Create a copy of the array to avoid modifying the original defaultProps
    let shuffledPokemon = [...allPokemon];

    // Fisher-Yates shuffle algorithm
    for (let i = shuffledPokemon.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffledPokemon[i], shuffledPokemon[j]] = [shuffledPokemon[j], shuffledPokemon[i]];
    }

    // 2. Assign them into two hands of 4 cards each
    const hand1 = shuffledPokemon.slice(0, 4); // First 4 Pokemon
    const hand2 = shuffledPokemon.slice(4, 8); // Next 4 Pokemon

    // 3. Calculate the total experience for each hand
    // Use the .reduce() array method to sum up base_experience for each hand
    const exp1 = hand1.reduce((acc, pokemon) => acc + pokemon.base_experience, 0);
    const exp2 = hand2.reduce((acc, pokemon) => acc + pokemon.base_experience, 0);

    // 4. Determine the winner
    const isHand1Winner = exp1 > exp2;
    const isHand2Winner = exp2 > exp1; // Could also be !isHand1Winner if no ties

    return (
        <div className="Pokegame">
            {/* Render the first Pokedex component for Hand 1 */}
            <Pokedex pokemon={hand1} exp={exp1} isWinner={isHand1Winner} />
            {/* Render the second Pokedex component for Hand 2 */}
            <Pokedex pokemon={hand2} exp={exp2} isWinner={isHand2Winner} />
        </div>
    );
}