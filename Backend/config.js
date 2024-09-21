module.exports = {
    secretKey: process.env.SECRETKEY || '12345-67890-09876-54321',
    mongoUrl : process.env.MONGOURL || 'mongodb+srv://admin:admin@cluster0.wlrorfp.mongodb.net/?retryWrites=true&w=majority' ||  'mongodb://localhost:27017/Kaku',
    SERVERURL : process.env.SERVERURL || 'http://localhost:4000'
    
}