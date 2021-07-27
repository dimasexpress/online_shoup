//@ts-check
import {db} from '../../../lib/db';
export default async function updn(req,res){
    const {id_nota, id_user, id_barang, harga, order_by}= req.body;
    try {
        if (!id_nota || !id_user || !id_barang || !harga || !order_by){
            return res
            .status(400)
            .json({message : 'Ada Value yang Kurang Bro'})
        }



        const results = await db.query(
            `UPDATE nota set id_nota = ?, id_user = ?, id_barang = ?, harga = ?, order_by = ? WHERE id_nota= ?`,[id_nota, id_user, id_barang, harga, order_by, id_nota]
        );
      
        return res.json(results)
    }catch (e){
        res.status(500).json({message : e.message});
    }
}