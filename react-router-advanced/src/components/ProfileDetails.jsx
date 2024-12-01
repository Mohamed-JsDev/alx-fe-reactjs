import { useParams } from "react-router-dom";

const ProfileDetails = () => {
  const link = useParams();
  return <div>${link}</div>;
};

export default ProfileDetails;
