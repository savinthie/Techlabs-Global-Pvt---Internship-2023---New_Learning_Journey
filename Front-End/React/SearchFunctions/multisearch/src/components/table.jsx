import React from "react";
const table=({userdata}) =>{
return(

    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>email</th>
            </tr>
            
                {userdata.map((user)=>(
                    <tr key={userdata.id}>
                     <td>{user.first_name}</td>
                     <td>{user.last_name}</td>
                     <td>{user.email}</td>
                    </tr>
                ))}
                
        </tbody>
    </table>
);

}

export default table;