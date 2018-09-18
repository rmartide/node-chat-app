const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();

        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }];
    })

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Andre',
            room: 'Devs'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toEqual(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = '99';
        var user = users.removeUser(userId);
        expect(user).toBeUndefined();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).toEqual(userId);
    });

    it('should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);
        expect(user).toBeUndefined();
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jen']);
    });

    it('should return true if the username exists on a room', () => {
        var usernameExists = users.usernameExists('Mike', 'Node Course');

        expect(usernameExists).toBeTruthy();
    });

    it('should return false if the username does not exist on a room', () => {
        var usernameExists = users.usernameExists('Mike', 'React Course');

        expect(usernameExists).toBeFalsy();
    });
});