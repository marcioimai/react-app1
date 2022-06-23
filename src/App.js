import { Outlet } from "react-router-dom";
import ValidateSession from "./Auth/ValidateSession";
import Header from './Pages/Header';

export default function App() {

  const handleLogout = () => {
    localStorage.clear();
  }

  return (
    <ValidateSession>
      <Header onLogout={handleLogout} />
      <Outlet />
    </ValidateSession>
  );

}
