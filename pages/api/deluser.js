//@ts-check
import {db} from '../../lib/db';
export default async function dellus(req,res){
    const { nim }= req.query;
    try {
        if (!nim){
            return res
            .status(400)
            .json({message : 'primary key ne wes di busek'})
        }



        const results = await db.query(
            `DELETE FROM user WHERE nim= ?`,nim
        );
      
        res.json(results)
    }catch (e){
        res.status(500).json({message : e.message});
    }
}