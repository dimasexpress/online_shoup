//@ts-check
import {fet} from '../../lib/swr-fetcer'
import Link from 'next/link'
import {mutate} from 'swr';
import Router from 'next/router';
export default function datus(){
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
    //console.log(data);

     async function DeletUser(nim){
  
        var res = await fetch(`/api/deluser?nim=${nim}`, { method : 'DELETE' })
        var json = await res.json()
       
        if(!res.ok) throw Error(json.message)
                mutate('/api/deluser')
             alert("Wes Beres Bos")
             Router.push('/admin/datauser')
    }
    return(
             
        <div className='container w-75 mx-auto py-4'> 
        <h3 className='font-bold'>DATA USER</h3>
        <table className ="table">
            <thead>
                <tr>
                    <th>Nim</th>
                    <th>Nama</th>
                    <th>Alamat</th>
                    <th>Password</th>
                    <th>Aksi</th>
                    <th>Hapus</th>
                  
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
                    <td> 
                        <div className='d-flex justify-content-between'>
                        <Link href={`/admin/updateusr?nim=${usr.nim}&nama=${usr.nama}&alamat=${usr.alamat}&password=${usr.password}`}>
                            <a>Edit</a>
                        </Link>

                        </div>
                            </td>
                            <td>
                            <button type='button' value={usr.nim} onClick={(e)=>DeletUser(e.target.value)}>Delete</button>
                            </td>
                </tr>
            ))
            }
            </tbody>
            </table>
    </div>
    )
}