//@ts-check
import {barang} from '../../../lib/swr-fetcer'
import Link from 'next/link'
import {mutate} from 'swr';
import Router from 'next/router';
export default function dat(){
    const {data, error}= barang();
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

    async function DeletBarang(id_barang){
  
        var res = await fetch(`/api/barang/delbarang?id_barang=${id_barang}`, { method : 'DELETE' })
        var json = await res.json()
       
        if(!res.ok) throw Error(json.message)
                mutate('/api/barang/delbarang')
             alert("Wes Beres Bos")
             Router.push('/admin/barang/databarang')
    }
    return(
             
        <div className='container w-75 mx-auto py-4'> 
        <h3 className='font-bold'>DATA BARANG</h3>
        <table className ="table">
            <thead>
                <tr>
                    <th>ID Barang</th>
                    <th>Nama Laptop</th>
                    <th>Harga</th>
                    <th>Spek Laptop</th>
                    <th>Foto</th>
                  
                  
                </tr>
            </thead>
        <tbody>
            {data.map((usr, idx)=>(
                <tr key ={idx}>
                    <td>
                        {usr.id_barang}
                    </td>
                    <td>
                        {usr.nama_laptop}
                    </td>
                    <td>
                        {usr.harga}
                    </td>
                    <td>
                        {usr.spek_laptop}
                    </td>
                    <td>
                        <img src={usr.foto}
                        alt="foto"
                        style= {{width: "100px", height:"100px"}} />
                    </td>
                    <td>
                    <div className='d-flex justify-content-between'>
                        <Link href={`/admin/barang/updatebarang?id_barang=${usr.id_barang}&nama_laptop=${usr.nama_laptop}&harga=${usr.harga}&spek_laptop=${usr.spek_laptop}&foto=${usr.foto}`}>
                            <a>Edit</a>
                        </Link>

                        </div>
                            </td>
                            <td>
                            <button type='button' value={usr.id_barang} onClick={(e)=>DeletBarang(e.target.value)}>Delete</button>
                            </td>
                            
                </tr>
            ))
            }
            </tbody>
            </table>
    </div>
    )
}