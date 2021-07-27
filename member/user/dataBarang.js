//@ts-check
import {barang} from '../../lib/swr-fetcer'
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
                   
                            
                </tr>
            ))
            }
            </tbody>
            </table>
    </div>
    )
}