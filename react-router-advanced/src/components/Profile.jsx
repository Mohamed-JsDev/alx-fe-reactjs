// src/components/Profile.jsx
import { Route, Link, Switch,Routes } from "react-router-dom";
import ProfileSettings from "./ProfileSettings";
import ProfileDetails from "src/components/ProfileDetails.jsx";
import { useRouteMatch } from "react-router-dom";
// I not what problem
const Profile = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Profile</h2>
      <ul>
        <li>
          <Link to={`${url}/ProfileDetails`}>Profile</Link>
        </li>
        <li>
          <Link to={`${url}/ProfileSettings`}>Settings</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select an option.</h3>
        </Route>
        <Route path={`${path}/ProfileDetails`}>
          <ProfileDetails />
        </Route>
        <Route path={`${path}/ProfileSettings`}>
          <ProfileSettings />
        </Route>
      </Switch>
    </div>
  );
};

export default Profile;
