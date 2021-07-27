//@ts-check
import {db} from '../../../lib/db';
export default async function Bus(req,res){
    const { id_barang }= req.query;
    try {
        if (!id_barang){
            return res
            .status(400)
            .json({message : 'primary key ne wes di busek'})
        }



        const results = await db.query(
            `DELETE FROM barang WHERE id_barang= ?`,id_barang
        );
      
        res.json(results)
    }catch (e){
        res.status(500).json({message : e.message});
    }
}