const fs = require('fs');
const pathPayPayment = './data/src/databasePayment.json'

function addResponList(groupID, key, response, isImage, image_url, _db) {
    var obj_add = {
        id: groupID,
        key: key,
        response: response,
        isImage: isImage,
        image_url: image_url
    }
    _db.push(obj_add)
    fs.writeFileSync('./database/list-message.json', JSON.stringify(_db, null, 3))
}

function getDataResponList(groupID, key, _db) {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID && _db[x].key === key) {
            position = x
        }
    })
    if (position !== null) {
        return _db[position]
    }
}

function isAlreadyResponList(groupID, key, _db) {
    let found = false
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID && _db[x].key === key) {
            found = true
        }
    })
    return found
}

function sendResponList(groupId, key, _dir) {
    let position = null
    Object.keys(_dir).forEach((x) => {
        if (_dir[x].id === groupId && _dir[x].key === key) {
            position = x
        }
    })
    if (position !== null) {
        return _dir[position].response
    }
}

function isAlreadyResponListGroup(groupID, _db) {
    let found = false
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            found = true
        }
    })
    return found
}

function delResponList(groupID, key, _db) {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID && _db[x].key === key) {
            position = x
        }
    })

    if (position !== null) {
        _db.splice(position, 1)
        fs.writeFileSync('./database/list-message.json', JSON.stringify(_db, null, 3))
    }
}

function updateResponList(groupID, key, response, isImage, image_url, _db) {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID && _db[x].key === key) {
            position = x
        }
    })
    if (position !== null) {
        _db[position].response = response
        _db[position].isImage = isImage
        _db[position].image_url = image_url
        fs.writeFileSync('./database/list-message.json', JSON.stringify(_db, null, 3))
    }
}

function updateKey(groupID, oldKey, newKey, _db) {
    const item = _db.find(x => x.id === groupID && x.key === oldKey);
    if (item) {
        item.key = newKey;
        fs.writeFileSync('./database/list-message.json', JSON.stringify(_db, null, 3));
        return true;
    }
    return false;
}

function updateId(groupID, newId, _db) {
    let updated = false;
    _db.forEach((item) => {
        if (item.id === groupID) {
            item.id = newId;
            updated = true;
        }
    });

    if (updated) {
        fs.writeFileSync('./database/list-message.json', JSON.stringify(_db, null, 3));
    }

    return updated;
}

function resetList(groupID, _db) {
    console.log('Reset List Called with GroupID:', groupID)
    let updated = false
    for (let i = _db.length - 1; i >= 0; i--) {
        if (_db[i].id === groupID) {
            _db.splice(i, 1)
            updated = true
        }
    }

    if (updated) {
        console.log('Updating database...')
        fs.writeFileSync('./database/list-message.json', JSON.stringify(_db, null, 3))
    }
    return updated;
}

function readDatabasePayment() {
    if (!fs.existsSync(pathPayPayment)) {
        fs.writeFileSync(pathPayPayment, JSON.stringify([]), 'utf-8');
    }
    const data = fs.readFileSync(pathPayPayment, 'utf-8');
    return JSON.parse(data);
}

// Menulis database ke file JSON
function writeDatabasePayment(_db) {
    fs.writeFileSync(pathPayPayment, JSON.stringify(_db, null, 3), 'utf-8');
}

async function getGroupIdFromLink(link, lenwy) {
    let coded = link.split("https://chat.whatsapp.com/")[1];
    if (!coded) return m.reply("Link Invalid 🤔");

    const response = await lenwy.query({
        tag: "iq",
        attrs: {
            type: "get",
            xmlns: "w:g2",
            to: "@g.us"
        },
        content: [{ tag: "invite", attrs: { code: coded } }]
    });

    return response.content[0].attrs.id + '@g.us';
}

module.exports = {
    addResponList,
    delResponList,
    isAlreadyResponList,
    isAlreadyResponListGroup,
    sendResponList,
    updateResponList,
    getDataResponList,
    updateKey,
    readDatabasePayment,
    writeDatabasePayment,
    updateId,
    getGroupIdFromLink,
    resetList
}
