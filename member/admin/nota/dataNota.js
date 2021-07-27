//@ts-check
import {nota} from '../../../lib/swr-fetcer'
import Link from 'next/link'
import {mutate} from 'swr';
import Router from 'next/router';
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

    async function DeletNota(id_nota){
  
        var res = await fetch(`/api/nota/delnota?id_nota=${id_nota}`, { method : 'DELETE' })
        var json = await res.json()
       
        if(!res.ok) throw Error(json.message)
                mutate('/api/nota/delnota')
             alert("Wes Beres Bos")
             Router.push('/admin/nota/datanota')
    }
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
                    <td>
                    <div className='d-flex justify-content-between'>
                        <Link href={`/admin/nota/updatenota?id_nota=${usr.id_nota}&id_user=${usr.id_user}&id_barang=${usr.id_barang}&harga=${usr.harga}&order_by=${usr.order_by}`}>
                            <a>Edit</a>
                        </Link>

                        </div>
                            </td>
                            <td>
                            <button type='button' value={usr.id_nota} onClick={(e)=>DeletNota(e.target.value)}>Delete</button>
                            </td>
                            
                </tr>
            ))
            }
            </tbody>
            </table>
    </div>
    )
}