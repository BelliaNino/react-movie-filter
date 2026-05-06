
import AppMovieFilter from "./components/AppMovieFilter";

const movie = [
    { title: 'Inception ',     genre: 'Fantascienza' },
    { title: 'Il Padrino ',    genre: 'Thriller'     },
    { title: 'Titanic ',       genre: 'Romantico'    },
    { title: 'Batman ',        genre: 'Azione'       },
    { title: 'Interstellar ',  genre: 'Fantascienza' },
    { title: 'Pulp Fiction ',  genre: 'Thriller'     },
];



function App() {
  

  return (
    <>
     <AppMovieFilter movie={movie}/>
    </>
  )
}

export default App
