
import a from './App.css';
import s from './search.module.css';
import {Users} from './user';
import {useState} from 'react';


function App() {

const [query, setQuery]= useState('');


    return(
        <div className={a.app}>
           <div className={s.search_container}>
            <input type='text' placeholder='Search...' 
            onChange={(e)=>setQuery(e.target.value)}/>
            
            <ul className="list">
            {
                Users.filter(user=>user.first_name.toLowerCase().includes(query)).map((user)=>(
                    <li key={user.id} className="listItem">
                        {user.first_name}
                        </li>
                ))}

            </ul>
    
           
           

               
        </div>
        </div>
    );
 
}

export default App;
