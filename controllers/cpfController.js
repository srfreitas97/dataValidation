const brValidations = require('br-validations');

module.exports.validateCpf = (req,res,next) => {
    try{

        var cpf = req.query.cpf.match(/\d/g).join('');

        if(brValidations.cpf.validate(cpf)){

            res.status(200).send(cpf);

        }
        else{
            throw new Error('Cpf invalido');
        }
    }
    catch(err){

        res.status(200).send(err.message);
        
    }
}