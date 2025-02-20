import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { ServicesProvider } from "./context/ServicesProvider.jsx";
import { SubServicesProvider } from "./context/SubServicesProvider.jsx";
import { lazy, Suspense } from "react";

const queryClient = new QueryClient();

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Location = lazy(() => import("./pages/Location/Location.jsx"));
const ServiceDetails = lazy(() =>
  import("./pages/ServiceDetails/ServiceDetails.jsx")
);
const Welcome = lazy(() => import("./pages/Welcome/Welcome.jsx"));
const Reviews = lazy(() => import("./pages/Reviews/Reviews.jsx"));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ServicesProvider>
        <SubServicesProvider>
          <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/home" element={<Home />} />
              <Route path="/service/:id" element={<ServiceDetails />} />
              <Route path="/location" element={<Location />} />
              <Route path="/reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </SubServicesProvider>
      </ServicesProvider>
    </QueryClientProvider>
  );
}

export default App;
