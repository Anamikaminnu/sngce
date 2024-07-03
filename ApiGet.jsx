import { TableBody, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react'

const ApiGet = () => {
    var[data,setData] = useState([]);
    // axios syntax || axios.get("Api").then().catch();
// useEffect|| useEffect(()=>{},[])
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=> {
        console.log(res);
        setData(res.data);
}).catch((error)=>{
    console.log(error)
})
,[]});

return (
    <div>
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Website</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((value,index)=>{
                    return(
                        <TableRow key={Index}>
                            <Tablecell>{value.name}</Tablecell>
                            <Tablecell>{value.email}</Tablecell>
                            <Tablecell>{value.website}</Tablecell>
                        </TableRow>
                    )
                }
            )}
               </TableBody>
            </Table>
        </TableContainer>

      
    </div>
  )
}

export default ApiGet
