const dbService = require('../util/database');

exports.postAddUser = (req, res, next) => {
    const db = dbService.getDbServiceInstance();
    let enabled = 0;
    console.log(req.body);
        if(req.body.isEnabled == "on"){
            enabled  = 1 ;
        }
        db.postUser(req.body.email, req.body.firstName, req.body.lastName, req.body.password, enabled);
    res.redirect('/');
}

exports.postEditUser = (req, res, next) => {
    const db = dbService.getDbServiceInstance();
    let enabled = 0;
    const id = req.params.id;
    console.log(req.body);
    if(req.body.isEnabled == "on"){
        enabled  = 1 ;
    }
    db.postEditedUser(id,req.body.email, req.body.firstName, req.body.lastName, req.body.password, enabled);
   res.redirect('/');
}

exports.getAllUsers = (req, res, next) => {
    const db = dbService.getDbServiceInstance();
    db.getAllUsers().then(users => {
        res.send(users);
    });
}

exports.getUserById = (req, res, next) => {
    const db = dbService.getDbServiceInstance();
    const id = req.params.id;
    db.getUser(id).then(user => {
        res.send(user);
    });
}
exports.deleteUserById = (req, res, next) => {
    const db = dbService.getDbServiceInstance();
    const id = req.params.id;
    db.deleteUser(id).then(user => {
        res.send(user);
    });
}