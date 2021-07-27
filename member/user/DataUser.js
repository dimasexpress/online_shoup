import {fet} from '../../lib/swr-fetcer'
export default function dat(){
    const {data, error}= fet();
    if(error){
        return <div>
            Error loading
        </div>
    }if(!data){
        return <div>
            loading
        </div>
    }
    //const {dtUsr} = data;
    console.log(data);
    return(
             
        <div style={{marginLeft : "50px"}}> 
        <h3>DATA USER</h3>
        <table className ="table">
            <thead>
                <tr>
                    <th>Nim</th>
                    <th>Nama</th>
                    <th>Alamat</th>
                    <th>Password</th>
                  
                </tr>
            </thead>
        <tbody>
            {data.map((usr, idx)=>(
                <tr key ={idx}>
                    <td>
                        {usr.nim}
                    </td>
                    <td>
                        {usr.nama}
                    </td>
                    <td>
                        {usr.alamat}
                    </td>
                    <td>
                        {usr.password}
                    </td>
                    
                </tr>
            ))
            }
            </tbody>
            </table>
    </div>
    )
}