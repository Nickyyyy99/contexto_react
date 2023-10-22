import './index.css';
import { useState } from 'react';
import CurrentUserContext from './Context/CurrentUserContext';
import Form from './Components/Form';
import { useEffect } from 'react';
import AppRouter from './Routes/AppRoutes';
import { PruebaContext } from './Context/PruebaContext';

function App() {
const [currentUser, setCurrentUser] = useState ({name: ""})
const [user, setUser] = useState({ nombre: "", email: "" });

useEffect(() => {
  const storedUser = localStorage.getItem("usuario");
  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
}, []);

useEffect(() => {
  localStorage.setItem("usuario", JSON.stringify(user));
}, [user]);


  return (
    <div>
     <h1>Ejercicio 1</h1>
     <p>Contexto react</p>
     <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      <Form  />
     </CurrentUserContext.Provider>

     <h1>Ejercicio 2</h1>
     <PruebaContext.Provider value={{user, setUser}}>
      <AppRouter />
     </PruebaContext.Provider>
    </div>

  );
  }

export default App;
