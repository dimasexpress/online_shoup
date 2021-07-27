//@ts-check
import {useEffect, useState} from 'react';
import Router, {useRouter} from 'next/router';

export default function updt(){
    const [_nim, setNim]= useState('');
    const [_nama, setNama]= useState('');
    const [_alamat, setAlamat]= useState('');
    const [_password, setPassword]= useState('');

    const router = useRouter();
    const { nim, nama, alamat, password} = router.query;
    useEffect(()=>{
    if(typeof nim == 'string'){
        setNim (nim); 
            }
        if(typeof nama == 'string'){
        setNama (nama); 
            }
            if(typeof alamat == 'string'){
        setAlamat (alamat); 
            }
     if(typeof password == 'string'){
          setPassword (password); 
        }
      },[nim, nama, alamat, password],
)
    
   async function Upp(e){
    e.preventDefault()
    try{
        const res = await fetch('/api/updatedatauser',{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json', },
             body : JSON.stringify({
               nim:  _nim, 
               nama:  _nama, 
               alamat:  _alamat, 
               password:  _password
             }
             ),
        })
        const json = await res.json()
        if(!res.ok) throw Error(json.message)
         alert("Wes Beres Bos")
         Router.push('/admin/datauser')
         
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
                        id='nim' type='text' placeholder='Nim' required
                        value = {_nim} onChange ={(e) => setNim(e.target.value)} />

                    <label htmlFor='nim'>NIM</label>
            </div>
            <div className='form-floating'>
                <input className='form-control mb-2'
                        id='nama' type='text' placeholder='Nama' required
                        value = {_nama} onChange ={(e) => setNama(e.target.value)} />

                    <label htmlFor='nama'>Nama</label>
            </div>
            <div className='form-floating'>
                <input className='form-control mb-2'
                        id='alamat' type='text' placeholder='Alamat' required
                        value = {_alamat} onChange ={(e) => setAlamat(e.target.value)} />

                    <label htmlFor='nim'>ALAMAT</label>
            </div>
            <div className='form-floating'>
                <input className='form-control mb-2'
                        id='nim' type='text' placeholder='Password' required
                        value = {_password} onChange ={(e) => setPassword(e.target.value)} />

                    <label htmlFor='nim'>Password</label>
            </div>
                    <div className='d-flex-row-reverse'>
                    <input type='submit'  value='Edit' className='btn btn-primary' />
                    </div>
        </form>
    
</div>
            </div>

        
    )
}