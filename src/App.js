import DetailBoxes from "./components/DetailBox/DetailBoxes";
import PerformanceChart from "./components/ChartComponent/PerformanceChart";
import Grouped from "./components/ThreeComponents/Grouped";
import Tasks from "./components/TasksFolder/Tasks";
import ManagedTable from "./components/ManagementTableFolder/ManagedTable";
import NavBarComponent from "./components/NavBarFolder/NavBarComponent";
function App() {
  
  return (
    <div className="app">
      <NavBarComponent/>
      <div className="components-section">
      <PerformanceChart />
      <DetailBoxes />
      <Grouped />
      <div className="task-list-table-flex">
      <Tasks />
      <ManagedTable />
      </div>
      </div>
    </div>
  );
}

export default App;
