import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

process.on('SIGINT', handleTermination);
process.on('SIGTERM', handleTermination);

function handleTermination(args) {
    console.info(`Received ${args} shutting down`);
    server.close(() => {
        console.info('HTTP server closed');
    });
}
