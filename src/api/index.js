// API URL
const BaseUrl = "https://app.pokemon-api.xyz/"

export const getPokemon = async () => {
  const data = await fetch(`${BaseUrl}pokemon/random`)
  const pokemon = data.json();
  return pokemon;
}