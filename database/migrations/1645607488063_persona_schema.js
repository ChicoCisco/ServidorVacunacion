'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonaSchema extends Schema {
  up () {
    this.create('personas', (table) => {
      table.increments('id')
      table.string('CURP')
      table.string('NombreCompleto')
      table.string('Edad')
      table.string('Email')
      table.string('Direccion')
      table.string('Telefono')
      table.timestamps()
    })
  }

  down () {
    this.drop('personas')
  }
}

module.exports = PersonaSchema
