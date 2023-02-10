import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { search, setSearch, error: searchError } = useSearch()
  const { movies, loading, error: getMoviesError, getMovies } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => setSearch(event.target.value)

  return (
    <div className='page'>
      <header>
        <h1>Movie Search</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input
            type='text'
            name='search'
            placeholder='Avengers, Star Wars, The Godfather...'
            style={{
              border: '1px solid transparent',
              borderColor: searchError ? 'red' : 'transparent',
              boxShadow: searchError ? '0 0 0 1px red' : 'none'
            }}
            value={search}
            onChange={handleChange}
          />
          <button type='submit'>Search</button>
        </form>
        {searchError && <p className='error'>{searchError}</p>}
      </header>

      <main>
        {loading ? <p>Loading...</p> : <Movies movies={movies} error={getMoviesError} />}
      </main>
    </div>
  )
}

export default App
