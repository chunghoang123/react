import { useParams } from "react-router-dom";

function Team() {
  const { teamId } = useParams();
  return (
    <div>
      <h2>Chi tiết Team</h2>
      <p>Bạn đang xem team có ID: {teamId}</p>
    </div>
  );
}

export default Team;