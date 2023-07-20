import logo from './logo.svg';
import './App.css';
import {Users} from './user';
import {useState} from 'react';
import Table from './components/table';

function App() {

const [query,setQuery] = useState('');


const searchFunction = (userdata) =>{
  return userdata.filter((item)=>item.first_name.toLowerCase().includes(query)||item.last_name.toLowerCase().includes(query)||item.email.toLowerCase().includes(query));

};

  return (
   <div className="app">
    <div className="search_container">
      <input type='text' placeholder='search...'
      onChange={(e)=>setQuery(e.target.value)}
      />
      
      <Table  userdata={searchFunction(Users)}/>

      
    </div>
   </div>
  );
}

export default App;
