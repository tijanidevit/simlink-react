import { Outlet, Link } from "react-router-dom";

const ArtistLayout = () => {
  return (
    <>
      <div>ArtistLayout Here</div>
      <nav>
        <ul>
          <li>
            <Link to="/artists">Home</Link>
          </li>
          <li>
            <Link to="/artists/login">Login</Link>
          </li>
          <li>
            <Link to="/artists/register">Register</Link>
          </li>
          <li>
            <Link to="/artists/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/artists/projects/new">Add Project</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default ArtistLayout;
