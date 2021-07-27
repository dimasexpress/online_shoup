//@ts-check
import {nota} from '../../lib/swr-fetcer'
export default function datnot(){
    const {data, error}= nota();
    if(error){
        return <div>
            Error loading
        </div>
    }if(!data){
        return <div>
            loading
        </div>
    }
   
    const {dtUsr} = data;
    console.log(data);

    return(
             
        <div className='container w-75 mx-auto py-4'> 
        <h3 className='font-bold'>DATA NOTA</h3>
        <table className ="table">
            <thead>
                <tr>
                    <th>id_nota</th>
                    <th>id_user</th>
                    <th>id_barang</th>
                    <th>harga</th>
                    <th>order_by</th>
                  
                  
                </tr>
            </thead>
        <tbody>
            {data.map((usr, idx)=>(
                <tr key ={idx}>
                    <td>
                        {usr.id_nota}
                    </td>
                    <td>
                        {usr.id_user}
                    </td>
                    <td>
                        {usr.id_barang}
                    </td>
                    <td>
                        {usr.harga}
                    </td>
                    <td>
                        {usr.order_by}
                    </td>
                           
                            
                </tr>
            ))
            }
            </tbody>
            </table>
    </div>
    )
}