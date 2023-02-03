import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth0ProviderWithHistory from "./auth0Provider";
import Navbar from "./components/nav/Navbar";
import Dashboard from "./routes/Dashboard";
import Root from "./routes/Root";

function App() {
  return (
    <Auth0ProviderWithHistory>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Auth0ProviderWithHistory>
  );
}

export default App;
