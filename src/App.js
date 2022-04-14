import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtistLayout from "./Artists/Layout";
import ArtistDashboard from "./Artists/Dashboard";
import ArtistLogin from "./Artists/Login";
import ArtistRegister from "./Artists/Register";
import AddProject from "./Artists/AddProject";
import ArtistLandingPage from "./Artists/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/artists/" element={<ArtistLayout />}>
            <Route index element={<ArtistLandingPage />} />
            <Route path="login" element={<ArtistLogin />} />
            <Route path="register" element={<ArtistRegister />} />
            <Route path="dashboard" element={<ArtistDashboard />} />
            <Route path="projects/new" element={<AddProject />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
