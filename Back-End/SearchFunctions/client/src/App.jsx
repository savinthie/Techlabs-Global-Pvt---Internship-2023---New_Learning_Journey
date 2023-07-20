import logo from './logo.svg';
import './App.css';
import {Users} from './user';
import {useState} from 'react';
import Table from './components/table';
import axios from 'axios';

function App() {

const [query,setQuery] = useState('');
const [data,setData]=useState([]);

useEffect(()=>{
  const fetchUsers =async()=>{
    const res = await axios.get(`http://localhost:4000?q=${query}`)
    setData(res.data);
  };
  fetchUsers()
},[query]);




  return (
   <div className="app">
    <div className="search_container">
      <input type='text' placeholder='search...'
      onChange={(e)=>setQuery(e.target.value)}
      />
      {
      <Table  userdata={data}/>
      }
      
    </div>
   </div>
  );
}

export default App;

