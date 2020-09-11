const { listAllSetups, createNewSetup, dropSetup } = require('./service/getSetupService.js')

listAllSetups()
console.log(createNewSetup({id:4, owner:'Kauã', processor:'AMD Athlon XP 1500+', ram:'S'}))
dropSetup(2)
listAllSetups()