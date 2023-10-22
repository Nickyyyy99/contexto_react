import React, { useContext } from 'react'
import CurrentUserContext from '../Context/CurrentUserContext';
import Button from './Button';

export default function LoginButton() {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

    if (currentUser.name !== "") {
      return <p>Hola {currentUser.name}, te esperábamos.</p>;
    }
  return (
    <Button
    onClick={() => {
      setCurrentUser({ name: "Nicky" });
    }}
  >
    Log in
  </Button>
  )
}
