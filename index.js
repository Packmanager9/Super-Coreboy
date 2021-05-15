const WebSocket = require("ws")

const wss = new WebSocket.Server({port: 8082})

wss.on("connection", ws => {
    console.log("new client")
    console.log(wss.clients.size)
    ws.on("close", () => {
        console.log("client left")
    })
    ws.on("message", data => {
        console.log(data)
        console.log(wss.clients.size)
        ws.send(wss.clients.size)
    })
})