# Pokedex-Project
A  React application (Pokedex) demonstrating component hierarchy, props, conditional rendering, and dynamic list generation to simulate a Pokemon card game with two randomized hands.

# **React Props: Pokedex**

**This exercise lets you pratice using React components and properties.**

## Steps

Create a pokemon application (a “pokedex”) that displays an interface that looks like this:

![Screen Shot 2023-05-08 at 3.59.31 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/556adb66-c855-4ee2-a1fb-b422b8d4b852/Screen_Shot_2023-05-08_at_3.59.31_PM.png)

To create the pokedex, you should use 3 components:

**App :** This should just render a single Pokedex. (It’s common for the top-level app to not have direct logic in it, but to render the top application object — this becomes useful when you build sites that compose several different parts together.)

**Pokecard :** Shows a single Pokemon, with their name, image, and type. 

**Pokedex : I**s provided, via props, an array of objects describing different pokemon, and renders a sequence of ***Pokecard*** components.

Use the defaultProps feature of ***Pokedex*** to provide a default list of Pokemon characters to show. You can use this list for a good set of defaults:

```jsx
[
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
]
```

For each pokemon, their image source should be:***https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png***
.

## **Further Study: More Pokemon!**

### **Pokegame Component**

Modify your component hierarchy so that ***App*** renders a component called ***Pokegame***. ***Pokegame*** should take your list of 8 pokemon and randomly assign them into two hands of 4 cards each. It should then render two ***Pokedex*** components, one for each hand.

Once you’ve got this working, modify your ***Pokegame*** so that it also calculates the total experience for each hand of pokemon. It should pass this total to the ***Pokedex***.

Next, have the ***Pokegame*** component determine which hand is the “winner,” where the winning hand is the one with the higher total experience. Then modify the ***Pokedex*** component one more time so that it accepts a prop of ***isWinner***. If the ***Pokedex*** is the winning one, it should display the message “THIS HAND WINS!” at the bottom of the deck.

Now when you load the page, you should see two different hands with a randomly changing winner every time you refresh.

### **Styling**

Add styling to your components — perhaps you can do interesting things when hovering over a Pokecard, or have them smoothly transition into the page, all via CSS?
