import React from 'react';
import Title from './Title';
import PokemonList from './pokemonList';

const RemoteButton = React.lazy(() => import('remote/Button'));
const RemoteFooter = React.lazy(() => import('sharedComponent/Footer'));
const RemoteHeader = React.lazy(() => import('sharedComponent/Header'));

const App = () => (
  <div>
    <React.Suspense fallback="Loading Footer">
      <RemoteHeader />
    </React.Suspense>
    <Title text="Mon Titre" />
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
    <PokemonList />
    <React.Suspense fallback="Loading Footer">
      <RemoteFooter />
    </React.Suspense>
  </div>
);

export default App;
