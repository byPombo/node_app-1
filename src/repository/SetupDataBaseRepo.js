const DBDriver = function () {
    const database = [
        {
            id: 1,
            owner: "Daniel",
            processor: "i5-7400",
            ram: "16GB"
        },
        {
            id: 2,
            owner: "Luca",
            processor: "Celeron",
            ram: "512Mb"
        },
        {
            id: 3,
            owner: "Renan",
            processor: "AMD Ryzen 3600",
            ram: "8GB"
        }
    ];
    const select = function () {
        return database;
    };
    const insert = function (setup) {
        database.push(setup)

        return setup;
    };
    const drop = function (id) {
        const index = database.findIndex(setup => setup.id == id);

        if (index !== -1) {
            console.log('> deletando', index, database[index])
            database.splice(index, 1)
        } else {
            throw Error('user cannot be found')
        }
    };
    return {
        select,
        insert,
        drop
    };
};

const all = function () {
    return DBDriver().select();
}

const create = function (setup) {

    DBDriver().insert(setup);

    return data;
}

const drop = function (id) {
    DBDriver().drop(id);
}

module.exports = {
    all,
    create,
    drop
}