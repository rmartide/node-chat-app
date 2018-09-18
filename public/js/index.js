var socket = io();

socket.on('connect', function () {
    socket.emit('rooms', {}, function (rooms) {
        console.log(rooms);
        var html = '';
        rooms.forEach(room => {
            html += `<option value="${room}">${room}</option>`;
        })

        $("#mySelect").html(html);
    });
});