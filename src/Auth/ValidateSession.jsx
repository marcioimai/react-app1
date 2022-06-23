import { useEffect, useState } from 'react';
import Login from './Login';

export default function ValidateSession(props) {

  const [isAuthenticated, setIsAuthenticated] = useState();

  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    if (!tokenString) return null;
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  }

  const setToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
        console.log(criarTempoRestanteStr());
      if (!!getToken()) setIsAuthenticated(true);
      else setIsAuthenticated(false);
    }, 500);
    return () => clearInterval(intervalId);
  });

  return (
    isAuthenticated == null ? <></> :
    !isAuthenticated ? <Login setToken={setToken} /> :
    props.children
  );

}

const validade = new Date("2022-06-22 17:00");
function criarTempoRestanteStr() {
    const tms = +validade - +(new Date());
    const tempo = Math.floor(tms / 1000);
    if (!!tempo) {
        let minutos = '' + Math.floor(tempo / 60);
        let segundos = '' + tempo % 60;
        if (minutos.length < 2) {
            minutos = '0' + minutos;
        }
        if (segundos.length < 2) {
            segundos = '0' + segundos;
        }
        return `${minutos}:${segundos}`;
    }
}