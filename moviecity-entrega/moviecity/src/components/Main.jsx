import { useState } from 'react';

const films = [
  { title: 'Afterlife', file: 'afterlife.jpg' },
  { title: 'Transformers', file: 'transformers.jpg' },
  { title: 'Mowgli', file: 'mowgli.jpg' },
  { title: 'Shift', file: 'shift.png' },
  { title: 'Round 6', file: 'squidgame.webp' },
  { title: 'Harry Potter', file: 'harrypotter.jpg' },
];

const posterModules = import.meta.glob('../assets/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const posterByName = Object.fromEntries(
  Object.entries(posterModules).map(([path, url]) => [path.split('/').pop().toLowerCase(), url]),
);

function MovieCard({ film, index }) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageUrl = posterByName[film.file.toLowerCase()];

  return (
    <article className="movie-card" aria-label={`Filme: ${film.title}`}>
      {imageUrl && !imageFailed ? (
        <img
          src={imageUrl}
          alt={`Pôster do filme ${film.title}`}
          loading={index < 3 ? 'eager' : 'lazy'}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="poster-fallback" role="img" aria-label={`Pôster de ${film.title}`}>
          {film.title}
        </div>
      )}
    </article>
  );
}

export default function Main() {
  const showCatalog = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <main className="main" id="inicio">
      <section className="intro" id="filmes" aria-labelledby="page-title">
        <h1 id="page-title">Seus Filmes</h1>
        <p>
          Aqui, você pode escolher o filme que deseja assistir.{' '}
          Caso queira escolher mais, clique no botão.
        </p>
        <button className="more-button" type="button" onClick={showCatalog}>Mais</button>
      </section>

      <section className="cards" id="catalogo" aria-label="Filmes em destaque">
        {films.map((film, index) => <MovieCard key={film.file} film={film} index={index} />)}
      </section>
    </main>
  );
}
