//@ts-check
import {db} from '../../lib/db';
export default async function update(req,res){
    const {nim, nama, alamat, password}= req.body;
    try {
        if (!nim || !nama || !alamat || !password){
            return res
            .status(400)
            .json({message : 'Ada Value yang Kurang Bro'})
        }



        const results = await db.query(
            `UPDATE user set nim = ?, nama = ?, alamat = ?, password = ? WHERE nim= ?`,[nim, nama, alamat, password, nim]
        );
      
        return res.json(results)
    }catch (e){
        res.status(500).json({message : e.message});
    }
}