//@ts-check
import {useEffect, useState} from 'react';
import Router, {useRouter} from 'next/router';

export default function upbar(){
    const [_id_barang, setIdbarang]= useState('');
    const [_nama_laptop, setNamalaptop]= useState('');
    const [_harga, setHarga]= useState('');
    const [_spek_laptop, setSpeklaptop]= useState('');
    const [_foto, setFoto] = useState(null);
    const [SelectedFile, setSelectedFile] = useState('');
    const [file, setFile] = useState('');

    const router = useRouter();
    const { id_barang, nama_laptop, harga, spek_laptop} = router.query;
    useEffect(()=>{
    if(typeof id_barang == 'string'){
        setIdbarang (id_barang); 
            }
        if(typeof nama_laptop == 'string'){
        setNamalaptop (nama_laptop); 
            }
            if(typeof harga == 'string'){
        setHarga (harga); 
            }
            if(typeof spek_laptop == 'string'){
        setSpeklaptop (spek_laptop); 
            }
      },[ id_barang, nama_laptop, harga, spek_laptop],
)
    const onSelectImage = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined)
        return
        }
        const _file = e.target.files[0];
        const reader = new FileReader()
        reader.onload = function(){
        setFile(_file);
        setFoto(reader.result);
        }
        reader.readAsDataURL(_file)
}

   async function Upp(e){
    e.preventDefault()
    try{
        const res = await fetch('/api/barang/updatedatabarang',{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json', },
             body : JSON.stringify({
                id_barang :   _id_barang, 
                nama_laptop:    _nama_laptop, 
                harga:  _harga, 
                spek_laptop:      _spek_laptop,
                foto: _foto
             }
             ),
        })
        const json = await res.json()
        if(!res.ok) throw Error(json.message)
         alert("Wes Beres Bos")
         Router.push('/admin/barang/databarang')
         
    }catch (e){
     throw Error(e.message)
}
    }




    return(
        <div>   
            <div className='container mt-4'>
        <form className='w-50 mx-auto' onSubmit={Upp}>
            <h3 className='font-bold' >Edit</h3>
            <div className="text-center">
                            <label htmlFor="uploadGambar">
                            <img
                                className="rounded-circle"
                                src={_foto} alt="Pilih Foto"
                                style = {{background : "gray",
                                        width:"100px", height:"100px"}} />
                            </label>
                            <input 
                            id = "uploadGambar"
                            type="file"
                            style={{display : "none"}}
                            onChange = {onSelectImage} />
                            
                        </div>
            <div className='form-floating'>
                <input className='form-control mb-2'
                        id='id_barang' type='text' placeholder='Id Barang' required
                        value = {_id_barang} onChange ={(e) => setIdbarang(e.target.value)} />

                    <label htmlFor='id_barang'>ID Barang</label>
            </div>
            <div className='form-floating'>
                <input className='form-control mb-2'
                        id='nama_laptop' type='text' placeholder='Nama Laptop' required
                        value = {_nama_laptop} onChange ={(e) => setNamalaptop(e.target.value)} />

                    <label htmlFor='nama_laptop'>Nama Laptop</label>
            </div>
            <div className='form-floating'>
                <input className='form-control mb-2'
                        id='harga' type='text' placeholder='Harga' required
                        value = {_harga} onChange ={(e) => setHarga(e.target.value)} />

                    <label htmlFor='harga'>Harga</label>
            </div>
            <div className='form-floating'>
                <input className='form-control mb-2'
                        id='spek_laptop' type='text' placeholder='Spek Laptop' required
                        value = {_spek_laptop} onChange ={(e) => setSpeklaptop(e.target.value)} />

                    <label htmlFor='spek_laptop'>Spek Laptop</label>
            </div>
            
                    <div className='d-flex-row-reverse'>
                    <input type='submit'  value='Edit' className='btn btn-primary' />
                    </div>
        </form>
    
</div>
            </div>

        
    )
}