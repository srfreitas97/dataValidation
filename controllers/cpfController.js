const cpfUtils = require('cpf');

module.exports.validateCpf = (req,res,next) => {
    try{

        var cpf = cpfUtils.format(req.query.cpf);

        if(cpfUtils.isValid(cpf)){

            res.status(200).send(cpf);

        }


    }
    catch(err){

        res.status(200).send('Formato inválido');

    }
}