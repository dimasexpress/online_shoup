//@ts-check
import {useEffect, useState} from 'react';
import Router, {useRouter} from 'next/router';

export default function updt(){
    const [_id_nota, setIdnota]= useState('');
    const [_id_user, setIduser]= useState('');
    const [_id_barang, setIdbarang]= useState('');
    const [_harga, setHarga]= useState('');
    const [_order_by, setOrderby]= useState('');

    const router = useRouter();
    const { id_nota, id_user, id_barang, harga, order_by} = router.query;
    useEffect(()=>{
    if(typeof id_nota == 'string'){
        setIdnota (id_nota); 
            }
        if(typeof id_user == 'string'){
        setIduser (id_user); 
            }
            if(typeof id_barang == 'string'){
        setIdbarang (id_barang); 
            }
            if(typeof harga == 'string'){
        setHarga (harga); 
            }
        if(typeof order_by == 'string'){
            setOrderby (order_by); 
            }
      },[id_nota, id_user, id_barang, harga, order_by],
)
    
   async function Upp(e){
    e.preventDefault()
    try{
        const res = await fetch('/api/nota/updatedatanota',{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json', },
             body : JSON.stringify({
                id_nota :   _id_nota, 
                id_user:    _id_user, 
                id_barang:  _id_barang, 
                harga:      _harga,
                order_by:   _order_by
             }
             ),
        })
        const json = await res.json()
        if(!res.ok) throw Error(json.message)
         alert("Wes Beres Bos")
         Router.push('/admin/nota/datanota')
         
    }catch (e){
     throw Error(e.message)
}
    }




    return(
        <div>   
            <div className='container mt-4'>
        <form className='w-50 mx-auto' onSubmit={Upp}>
            <h3 className='font-bold' >Edit</h3>
            <div className='form-floating'>
                <input className='form-control mb-2'
                        id='id_nota' type='text' placeholder='Id Nota' required
                        value = {_id_nota} onChange ={(e) => setIdnota(e.target.value)} />

                    <label htmlFor='id_nota'>ID Nota</label>
            </div>
            <div className='form-floating'>
                <input className='form-control mb-2'
                        id='id_user' type='text' placeholder='Id User' required
                        value = {_id_user} onChange ={(e) => setIduser(e.target.value)} />

                    <label htmlFor='id_user'>ID User</label>
            </div>
            <div className='form-floating'>
                <input className='form-control mb-2'
                        id='id_barang' type='text' placeholder='Id Barang' required
                        value = {_id_barang} onChange ={(e) => setIdbarang(e.target.value)} />

                    <label htmlFor='id_barang'>ID Barang</label>
            </div>
            <div className='form-floating'>
                <input className='form-control mb-2'
                        id='harga' type='text' placeholder='Harga' required
                        value = {_harga} onChange ={(e) => setHarga(e.target.value)} />

                    <label htmlFor='harga'>Harga</label>
            </div>
            <div className='form-floating'>
                <input className='form-control mb-2'
                        id='order_by' type='text' placeholder='Order By' required
                        value = {_order_by} onChange ={(e) => setOrderby(e.target.value)} />

                    <label htmlFor='order_by'>Order By</label>
            </div>
                    <div className='d-flex-row-reverse'>
                    <input type='submit'  value='Edit' className='btn btn-primary' />
                    </div>
        </form>
    
</div>
            </div>

        
    )
}