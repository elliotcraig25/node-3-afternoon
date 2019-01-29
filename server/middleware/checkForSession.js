module.exports = function(req, res, next){
    const {session} = req.body;

    if(!session.user){
        session.user = {
            username: '',
            cart: [],
            total: 0
        }
    }
    next()
}