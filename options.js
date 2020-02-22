const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: process.env.USERNAME,
        password: process.env.OAUTH
    },
    channels: [process.env.CHANNEL],
}

module.exports = options;