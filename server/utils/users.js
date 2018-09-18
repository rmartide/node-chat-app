class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        var user = { id, name, room };
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        var user;
        var index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            user = this.users.splice(index, 1).pop();
        }
        return user;
    }

    getUser(id) {
        return this.users.find(user => user.id === id);
    }

    getUserList(room) {
        return this.users.filter(user => user.room === room).map(user => user.name);
    }

    usernameExists(username, room) {
        var userList = this.getUserList(room);
        var arrayNotEmpty = userList.length !== 0;
        var userFound = userList.findIndex(name => name === username) !== -1;
        var res = arrayNotEmpty && userFound;
        return res;
    }
}

module.exports = { Users };