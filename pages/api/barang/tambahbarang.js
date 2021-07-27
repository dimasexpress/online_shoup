//@ts-check
import {db} from '../../../lib/db';

const handler = async(req,res) =>{
    const {id_barang, nama_laptop, harga, spek_laptop, foto}= req.body;
    try {
        if (!id_barang || !nama_laptop || !harga || !spek_laptop || !foto){
            return res
            .status(400)
            .json({message : 'Ada Value yang Kurang Bro '})
           
        }



        const results = await db.query(`
           INSERT INTO barang (id_barang, nama_laptop, harga, spek_laptop, foto) VALUES (?,?,?,?,?)`,[id_barang, nama_laptop, harga, spek_laptop, foto]
        );
        await db.end;
        return res.json(results)
    }catch (e){
        
        res.status(500).json({message : e.message});
        //alert('id_barang e lek podo gak oleh')
    }
};
export default handler;