//@ts-check
import {db} from '../../../lib/db';

const handler = async(_,res) =>{
    try {
        const result = await db .query(
            `SELECT * FROM nota ORDER BY id_nota ASC`
        );
        await db.end;
        return res.json(result)
    }catch (e){
        res.status(500).json({message : e.message});
    }
};
export default handler;