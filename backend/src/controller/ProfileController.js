const connection = require('../database/connection');

module.exports = {
    async index(request,Response){
        const ongs_id = request.headers.authorization;

        const incidents = await connection('incidents') 
            .where('ongs_id', ongs_id)
            .select('*');

        return Response.json(incidents);
    }
    
};