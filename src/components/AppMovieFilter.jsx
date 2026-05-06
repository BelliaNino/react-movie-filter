import { useState, useEffect } from 'react';

export default function AppMovieFilter({ movie }) {

    // imposto la use state con 'tutti' i generi
    const [genereSelezionato, setGenereSelezionato] = useState('Tutti');

    // useState per i film filtrati 
    const [filmFiltrati, setFilmFiltrati] = useState(movie);

    // useEffect si attiva ogni volta che cambia genereSelezionato
    useEffect(() => {

        if (genereSelezionato === 'Tutti') {
            setFilmFiltrati(movie);
        } else {
            setFilmFiltrati(movie.filter(film => film.genre === genereSelezionato));
        }

    }, [genereSelezionato]);

    // array con tutti i generi non duplicati più 'tutti'
    const generi = ['Tutti', ...new Set(movie.map(item => item.genre))];


    return (
        <div className="container mt-5">

            <h1>Movie Filter</h1>

            <select
                value={genereSelezionato}
                onChange={e => setGenereSelezionato(e.target.value)}
            >
                {generi.map(genre => (
                    <option key={genre} value={genre}>{genre}</option>
                ))}
            </select>

            <ul>
                {filmFiltrati.map(film => (
                    <li key={film.title}>
                        <span>{film.title}</span>
                        <span>{film.genre}</span>
                    </li>
                ))}
            </ul>

            <p>
                {filmFiltrati.length} film trovati
            </p>

        </div>
    );
}