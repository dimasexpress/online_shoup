//@ts-check
import {db} from '../../lib/db';

const handler = async(req,res) =>{
    const {nim, nama, alamat, password}= req.body;
    try {
        if (!nim || !nama || !alamat || !password){
            return res
            .status(400)
            .json({message : 'Ada Value yang Kurang Bro '})
           
        }



        const results = await db.query(`
           INSERT INTO user (nim, nama, alamat, password) VALUES (?,?,?,?)`,[nim, nama, alamat, password]
        );
        await db.end;
        return res.json(results)
    }catch (e){
        
        res.status(500).json({message : e.message});
        //alert('nim e lek podo gak oleh')
    }
};
export default handler;