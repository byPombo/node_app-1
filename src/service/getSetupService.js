const repository = require('../repository/SetupDataBaseRepo')
const { save } = require('./saveFile')

module.exports = {
    listAllSetups: () => {
        console.log(repository.all());
    },
    createNewSetup(setup){
        // TODO: implementar criação de setup
    },
    dropSetup(id){
        // TODO: implementar exclusão de setup
    }
}