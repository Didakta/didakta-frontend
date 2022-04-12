import "../styles/dashboard.css";

import Syllabus from "./Syllabus";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboardContainer">
        <Syllabus className="syllabus" />
      </div>
    </div>
  );
};

export default Dashboard;
