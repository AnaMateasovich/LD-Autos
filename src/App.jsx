import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { ServicesProvider } from "./context/ServicesProvider.jsx";
import { SubServicesProvider } from "./context/SubServicesProvider.jsx";
import Home from "./pages/Home/Home.jsx";
import Location from "./pages/Location/Location.jsx";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails.jsx";
import Welcome from "./pages/Welcome/Welcome.jsx";
import Reviews from "./pages/Reviews/Reviews.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ServicesProvider>
        <SubServicesProvider>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/service/:id" element={<ServiceDetails />} />
            <Route path="/location" element={<Location />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </SubServicesProvider>
      </ServicesProvider>
    </QueryClientProvider>
  );
}

export default App;
