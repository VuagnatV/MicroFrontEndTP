import LocalButton from './Button';
import React from 'react';
import Members from './Members';

const RemoteFooter = React.lazy(() => import('sharedComponent/Footer'));
const RemoteHeader = React.lazy(() => import('sharedComponent/Header'));

const App = () => (
  <div>
    <React.Suspense fallback="Loading Footer">
      <RemoteHeader />
    </React.Suspense>
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LocalButton />
    <React.Suspense fallback="Loading Footer">
      <RemoteFooter />
    </React.Suspense>
  </div>
);

export default App;
