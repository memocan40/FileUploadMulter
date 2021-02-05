const pool=require("../dbconfig");

module.exports = {
    getData: async(req,res)=>{
        try{const data=await pool.query('SELECT * FROM test');
        res.json({
            message:'req success',
            data:data.rows
        })
    }catch(err){
        console.log(err);
        res.send("problem");

        }

        }
    }
