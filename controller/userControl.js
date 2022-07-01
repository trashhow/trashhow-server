const connection = require('../dbconfig')


const userControl = {

    getUsers : async(req,res) => {
        connection.query('SELECT * FROM user', (error, rows)=> {
            if(error) throw error;
            console.log(rows)
            res.send(rows);
        })
    }
}

module.exports = userControl