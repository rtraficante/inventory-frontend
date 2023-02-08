import { Route, Routes } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth0Provider";
import Dashboard from "./routes/Dashboard";
import Root from "./routes/Root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CompanyDashboard from "./routes/CompanyDashboard";

const queryClient = new QueryClient();

function App() {
  return (
    <Auth0ProviderWithHistory>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:id" element={<CompanyDashboard />} />
        </Routes>
      </QueryClientProvider>
    </Auth0ProviderWithHistory>
  );
}

export default App;
