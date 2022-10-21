import './App.css';

import DataTable from './components/DataTable';
import data from '../data/data.json';

function App() {
  
  return (
    <div className="App">
      <DataTable
      columns={data.columns}
      rowsData={data.rows}
      pageSize={5}
      rowsPerPage={5}/>  
    </div>
  )
}

export default App
