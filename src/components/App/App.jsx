// import { useState } from 'react';
// import clsx from 'clsx';
// import css from './App.module.css';
import Profile from '../Profile/Profile';
import userData from '../../userData.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};
export default App;
