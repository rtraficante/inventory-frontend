import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth0ProviderWithHistory from "./auth0Provider";
import Navbar from "./components/nav/Navbar";
import Dashboard from "./routes/Dashboard";
import Root from "./routes/Root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <Auth0ProviderWithHistory>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </QueryClientProvider>
    </Auth0ProviderWithHistory>
  );
}

export default App;
