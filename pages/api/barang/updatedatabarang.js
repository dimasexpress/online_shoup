//@ts-check
import {db} from '../../../lib/db';
export default async function upbarr(req,res){
    const {id_barang, nama_laptop, harga, spek_laptop, foto}= req.body;
    try {
        if (!id_barang || !nama_laptop || !harga || !spek_laptop){
            return res
            .status(400)
            .json({message : 'Ada Value yang Kurang Bro'})
        }



        const results = await db.query(
            `UPDATE barang set id_barang = ?, nama_laptop = ?, harga = ?, spek_laptop = ?, foto = ? WHERE id_barang= ?`,[id_barang, nama_laptop, harga, spek_laptop, foto, id_barang]
        );
      
        return res.json(results)
    }catch (e){
        res.status(500).json({message : e.message});
    }
}