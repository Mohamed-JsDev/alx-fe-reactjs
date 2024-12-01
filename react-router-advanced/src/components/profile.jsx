import { Link } from "react-router-dom";

const profile = () => {
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

export default profile;
