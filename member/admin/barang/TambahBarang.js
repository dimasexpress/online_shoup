//@ts-check
import {useState} from 'react'
import Router, {useRouter} from 'next/router';

export default function tU(){
    const [id_barang, setIdbarang]= useState('');
    const [nama_laptop, setNamalaptop]= useState('');
    const [harga, setHarga]= useState('');
    const [spek_laptop, setSpeklaptop]= useState('');
    const [foto, setFoto] = useState(null);
    const [SelectedFile, setSelectedFile] = useState('');
    const [file, setFile] = useState('');

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
   async function submitHandler(e){
       e.preventDefault()
       try{
           const res = await fetch('http://localhost:3000/api/barang/tambahbarang',{
               method: 'POST',
               headers: {'Content-Type': 'application/json', },
                body : JSON.stringify({
                    id_barang, 
                    nama_laptop, 
                    harga, 
                    spek_laptop,
                    foto
                }
                ),
           })
           const json = await res.json()
           if(!res.ok) throw Error(json.message)
            alert("Wes melbu Bos")
            Router.push('/admin/barang/databarang')
       }catch (e){
        throw Error(e.message)
   }
}
    return(
        <div>
                 <div className='container mt-4'>
                    <form className='w-50 mx-auto' onSubmit={submitHandler}>
                        <h3>Tambah Barang</h3>
                        <div className="text-center">
                            <label htmlFor="uploadGambar">
                            <img
                                className="rounded-circle"
                                src={foto} alt="Pilih Foto"
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
                                    id='id_barang' type='text' required placeholder='Id Barang'
                                    value = {id_barang} onChange ={(e) => setIdbarang(e.target.value)} />

                                <label htmlFor='id_barang'>ID Barang</label>
                        </div>
                        <div className='form-floating'>
                            <input className='form-control mb-2'
                                    id='nama_laptop' type='text' required placeholder='Nama Laptop'
                                    value = {nama_laptop} onChange ={(e) => setNamalaptop(e.target.value)} />

                                <label htmlFor='nama_laptop'>Nama Laptop</label>
                        </div>
                        <div className='form-floating'>
                            <input className='form-control mb-2'
                                    id='harga' type='text' required placeholder='Harga'
                                    value = {harga} onChange ={(e) => setHarga(e.target.value)} />

                                <label htmlFor='harga'>Harga</label>
                        </div>
                        <div className='form-floating'>
                            <input className='form-control mb-2'
                                    id='spek_laptop' type='text' required placeholder='Spek Laptop'
                                    value = {spek_laptop} onChange ={(e) => setSpeklaptop(e.target.value)} />

                                <label htmlFor='spek_laptop'>Spek Laptop</label>
                        </div>
                        
                                <div className='d-flex-row-reverse'>
                                <input type='submit'  value='simpan' className='btn btn-primary' />
                                </div>
                    </form>
                
            </div>
        </div>
    )
}