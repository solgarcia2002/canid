import React from 'react';
import CustomTable from './components/customTable';

function App() {
  const vaccinationColumns= [
      {id:0, label: 'VACCINE'},
      {id:1, label:'BIRTH'},
      {id:2, label:'1 MONTH'},
      {id:3, label:'2 MONTHS'},
      {id:4, label:'4 MONTHS'},
      {id:5, label:'6 MONTH'},
      {id:6, label:'12 MONTHS'},
      {id:7, label:'15 MONTHS'}
  ];
  const vaccinesRows=[
      {label: 'Hep B', content:['1st dose',null, '2nd dose', null ]},
      {label: 'Rotavirus*', content:['1st dose',null, '2nd dose', null ]},
      {label: 'DTaP', content:[null, null, '1st dose',null, '2nd dose', null ]},
  ];
  return (
    <div className="App">
      <header className="App-header">

        <CustomTable rows={vaccinesRows} columns={vaccinationColumns}/>

      </header>
    </div>
  );
}

export default App;
