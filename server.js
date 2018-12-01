var io = require('socket.io')(3000)

io.on('connection', (socket) => {
    console.log('A new connection')

    socket.on('send-message', function(message) {
        console.log(message)
        io.emit("receive-message", message)
    })

    socket.on('user-typing', function(data) {
        io.emit("get-user-typing", data)
    })

    socket.on('disconnect', (socket) => {
        console.log('Leave connection')
    })
})