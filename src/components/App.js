import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import Login from './LoginComp/Login';
import Signup from './LoginComp/Signup';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
