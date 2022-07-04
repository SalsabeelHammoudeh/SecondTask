const mysql = require('mysql');

const connection = mysql.createConnection({
        host:'localhost',
        user:'Salsabeel',
        database:'usersdb',
        password: 'Salsabeel2019'
    }
); //we can have multiple connections at the same time

connection.connect((err) =>{
    if (err){
        console.log(err.message)
    }
    console.log('data base state is '+connection.state);
})



class DBService{
    static  getDbServiceInstance(){
        if(global.db_service)
        return global.db_service
        else
            global.db_service = new DBService();
        return global.db_service;
    }
    async getAllUsers(){
        try{
            const response = await new Promise((resolve,reject) =>{
                const query = 'select * FROM users';
                connection.query(query,(err,results) =>{
                    if (err)
                        reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;
            //console.log(response);
        }catch(error){
            console.log(error);
        }
    }
    async getUser(id){
        try{
            const response = await new Promise((resolve,reject) =>{
                const query = 'select * FROM users where id = ?';
                connection.query(query,[id],(err,results) =>{
                    if (err)
                        reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }
    async deleteUser(id){
        try{
            const response = await new Promise((resolve,reject) =>{
                const query = 'DELETE FROM `users` WHERE id = ?';
                connection.query(query,[id],(err,results) =>{
                    if (err)
                        reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }

    async postUser(email,first_name,last_name,password,enabled){
        try{
            const response = await new Promise((resolve,reject) =>{
                const query = "INSERT INTO `users`(`email`,`first_name`,`last_name`,`password`,`enabled`) VALUES (?,?,?,?,?)";
                connection.query(query,[email,first_name,last_name,password,enabled],(err,results) =>{
                    if (err)
                        reject(new Error(err.message));
                    resolve(results);
                })
            });
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }

    async postEditedUser(id,email,first_name,last_name,password,enabled){
        try{
            const response = await new Promise((resolve,reject) =>{
                const query = "UPDATE `users` SET email = ?, first_name = ?, last_name = ?, password = ?, enabled = ? WHERE id = ?";
                connection.query(query,[email,first_name,last_name,password,enabled,id],(err,results) =>{
                    if (err)
                        reject(new Error(err.message));
                    resolve(results);
                })
            });
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }
}
module.exports = DBService;
