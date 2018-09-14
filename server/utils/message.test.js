const expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'rmartide';
        var text = "what's up boy";
        var message = generateMessage(from, text);

        expect(message).toMatchObject({from, text});
        expect(typeof message.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'rmartide';
    var latitude = '1234';
    var longitude = '-4321';
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var message = generateLocationMessage(from, latitude, longitude);
    expect(message).toMatchObject({from, url});
    expect(typeof message.createdAt).toBe('number');
  });
});
