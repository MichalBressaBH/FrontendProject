import { AddCard } from "./../components/AddCard";
import { Header } from "./../components/Header";
import { Card } from "./../components/Card";
import { useState } from "react";
import { CircularProgress, Paper, Switch } from "@mui/material";
import "./../index.scss";
import { PokemonType, PokemonCard, TypeSlot, pokemonTypes, errorContainer} from "./../utils/types";
//import { appTheme } from "./utils/themes";
import { ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material';
import Alert from '@mui/material/Alert';


export default function AddCards() {

  const [cardList, setCardList] = useState<PokemonCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState<PokemonType>("X");
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState<errorContainer>({status: false, message:''});

const appTheme = createTheme({
  palette: {
    mode: darkMode ? 'dark' : 'light',
    primary: {
      main: '#f30006',
    },
    secondary: {
      main: '#3d5afe',
    },
  },
  typography: {
    h1: {
      fontSize: '6rem',
    },
  },
});

  const addCard = async (input: string) => {
    try {
      if (!Number(input)) {
        input.toLowerCase;
      }
      setIsLoading(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${input}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch resource");
      }
      const data = await response.json().finally(() => setIsLoading(false));

      const pokemonCard: PokemonCard = {
        name: data.name,
        id: data.id,
        types: data.types,
        image: data.sprites.front_default,
        hp: data.stats[0].base_stat,
        weight: data.weight,
        height: data.height,
      };

      const found = cardList.find((card) => card.name === pokemonCard.name);
      if(found)
      {
        setError({status: true, message: "Can't add duplicate cards"});
        return;
      }

      setCardList([...cardList, pokemonCard]);

    } catch (error) {
      setIsLoading(false);
      alert("Couldn't fetch the pokemon, sorry!");
      console.error(error);
    }
  };

  const checkForType = (types: TypeSlot[]) => {
    if (filter === "X") return true;
    for (let i = 0; i < types.length; i++) {
      if (types[i].type.name === filter) return true;
    }
    return false;
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Paper sx={{height: "100vh"}} elevation={0} square>
      <div className="app">
        <div className="header-container">
          <label htmlFor="darkModeToggle" >Toggle Dark Mode</label>
          <Switch name="darkModeToggle" id="darkModeToggle" checked={darkMode} onChange={()=> setDarkMode(!darkMode)}/>
          <Header />
          <AddCard onAdd={addCard} />
          {isLoading && <CircularProgress color="success" sx={{ mt: 3 }} />}
        </div>
        <div className="filters_container">
          {pokemonTypes.map((item) => (
            <button key={item} onClick={() => setFilter(item)} className={item}>
              {item}
            </button>
          ))}
        </div>
        <div>
          {error.status && 
            (<Alert severity="warning" onClose={() => {setError({status: false, message:''})}}>
              {error.message}
            </Alert>)}
          </div>
        <div className="cards-container">
          {cardList.map(
            (item, index) =>
              checkForType(item.types) && (
                <Card
                  key={index + item.id}
                  name={item.name}
                  image={item.image}
                  id={item.id}
                  types={item.types}
                  hp={item.hp}
                  weight={item.weight}
                  height={item.height}
                />
              )
          )}
        </div>

        </div>
      </Paper>
    </ThemeProvider>
  );
}
