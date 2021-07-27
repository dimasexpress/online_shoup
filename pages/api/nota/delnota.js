//@ts-check
import {db} from '../../../lib/db';
export default async function delnot(req,res){
    const { id_nota }= req.query;
    try {
        if (!id_nota){
            return res
            .status(400)
            .json({message : 'primary key ne wes di busek'})
        }



        const results = await db.query(
            `DELETE FROM nota WHERE id_nota= ?`,id_nota
        );
      
        res.json(results)
    }catch (e){
        res.status(500).json({message : e.message});
    }
}