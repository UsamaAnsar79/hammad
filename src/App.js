import { useState } from "react";
import DetailBoxes from "./components/DetailBox/DetailBoxes";
import PerformanceChart from "./components/ChartComponent/PerformanceChart";
import Grouped from "./components/ThreeComponents/Grouped";
import Tasks from "./components/TasksFolder/Tasks";
import ManagedTable from "./components/ManagementTableFolder/ManagedTable";
import NavBarComponent from "./components/NavBarFolder/NavBarComponent";
import SalesComponent from "./components/GlobalSalesSection/SalesComponent";
import SideBarComponent from "./components/SideBarFolder/SideBarComponent";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="app">
      <NavBarComponent />
      <SideBarComponent isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="components-section">
        <PerformanceChart />
        <DetailBoxes />
        <Grouped />
        <div className="task-list-table-flex">
          <Tasks />
          <ManagedTable />
        </div>
        <SalesComponent />
      </div>
    </div>
  );
}

export default App;
