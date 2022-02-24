'use strict'

const Persona = use('App/Models/Persona')

class PersonaController {
    async store ({ request, response }) {
        const input = request.all();
        await Persona.create(input);
    
        return input;
    }

    async index ({ request, response, view }) {
        return await Persona.all();
    }

    async delete({request}){
        const usuario = await Persona.find(request.id);
        usuario.delete()
    }
}

module.exports = PersonaController
