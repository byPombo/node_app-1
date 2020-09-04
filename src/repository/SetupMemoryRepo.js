const data = [];

const all = function () {
    return data
}

const create = function ({ id, owner, processor, ram }) {
    data.push({
        id,
        owner,
        processor,
        ram
    })

    return data;
}

const drop = function (id) {
    const index = data.findIndex(setup => setup.id == id);
    
    if (index !== -1)
        data.splice(index, 1)
}

module.exports = {
    all,
    create,
    drop
}