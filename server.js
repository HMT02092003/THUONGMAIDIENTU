import { createServer } from 'http';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 4000;

if (process.env.NODE_OPTIONS && process.env.NODE_OPTIONS.includes('--inspect')) {
    console.log("Warning: Debug mode (inspect) is enabled. Disabling it.");
    delete process.env.NODE_OPTIONS; 
}

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
    const httpServer = createServer((req, res) => {
        handler(req, res);
    });

    // Lắng nghe kết nối HTTP
    httpServer
        .once('error', (err) => {
            console.error(err);
            process.exit(1);
        })
        .listen(port, () => {
            console.log(`</> Ready on http://${hostname}:${port}`);
        });
});
