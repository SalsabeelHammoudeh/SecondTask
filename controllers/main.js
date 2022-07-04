exports.getIndexFile = (req, res, next) => {
    res.render('index', { title: 'Express' });
}