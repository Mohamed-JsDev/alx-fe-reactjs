import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"profile/:agadg"}>profileDetails</Link>
        </li>
        <li>
          <Link to={"profileSetting"}>profileSetting</Link>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
