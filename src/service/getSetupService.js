const repository = require('../repository/SetupDataBaseRepo')
const { save } = require('./saveFile')

module.exports = {
    listAllSetups: () => {
        console.log(repository.all());
    },
    createNewSetup(setup){
        return repository.create(setup);
    },
    dropSetup(id){
        repository.drop(id);
    }
}