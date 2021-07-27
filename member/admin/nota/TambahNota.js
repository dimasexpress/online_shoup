//@ts-check
import {useState} from 'react'
import Router, {useRouter} from 'next/router';

export default function tU(){
    const [id_nota, setIdnota]= useState('');
    const [id_user, setIduser]= useState('');
    const [id_barang, setIdbarang]= useState('');
    const [harga, setHarga]= useState('');
    const [order_by, setOrderby]= useState('');
    // const [foto, setFoto] = useState(null);
    // const [SelectedFile, setSelectedFile] = useState('');
    // const [file, setFile] = useState('');

    
   async function submitHandler(e){
       e.preventDefault()
       try{
           const res = await fetch('http://localhost:3000/api/nota/tambahnota',{
               method: 'POST',
               headers: {'Content-Type': 'application/json', },
                body : JSON.stringify({
                    id_nota, 
                    id_user, 
                    id_barang, 
                    harga,
                    order_by
                   
                }
                ),
           })
           const json = await res.json()
           if(!res.ok) throw Error(json.message)
            alert("Wes melbu Bos")
            Router.push('/admin/nota/datanota')
       }catch (e){
        throw Error(e.message)
   }
}
    return(
        <div>
                 <div className='container mt-4'>
                    <form className='w-50 mx-auto' onSubmit={submitHandler}>
                        <h3>Tambah Nota</h3>
                       
                        <div className='form-floating'>
                            <input className='form-control mb-2'
                                    id='id_nota' type='text' required placeholder='Id Nota'
                                    value = {id_nota} onChange ={(e) => setIdnota(e.target.value)} />

                                <label htmlFor='id_nota'>ID Nota</label>
                        </div>
                        <div className='form-floating'>
                            <input className='form-control mb-2'
                                    id='id_user' type='text' required placeholder='Id User'
                                    value = {id_user} onChange ={(e) => setIduser(e.target.value)} />

                                <label htmlFor='id_user'>ID User</label>
                        </div>
                        <div className='form-floating'>
                            <input className='form-control mb-2'
                                    id='id_barang' type='text' required placeholder='Id Barang'
                                    value = {id_barang} onChange ={(e) => setIdbarang(e.target.value)} />

                                <label htmlFor='nim'>ID Barang</label>
                        </div>
                        <div className='form-floating'>
                            <input className='form-control mb-2'
                                    id='harga' type='text' required placeholder='Harga'
                                    value = {harga} onChange ={(e) => setHarga(e.target.value)} />

                                <label htmlFor='harga'>Harga</label>
                        </div>
                        <div className='form-floating'>
                            <input className='form-control mb-2'
                                    id='order_by' type='text' required placeholder='Order By'
                                    value = {order_by} onChange ={(e) => setOrderby(e.target.value)} />

                                <label htmlFor='order_by'>Order By</label>
                        </div>
                                <div className='d-flex-row-reverse'>
                                <input type='submit'  value='simpan' className='btn btn-primary' />
                                </div>
                    </form>
                
            </div>
        </div>
    )
}