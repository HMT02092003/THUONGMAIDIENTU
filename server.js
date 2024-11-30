import { createServer } from 'http';
import next from 'next';
import express from 'express';
import cors from 'cors';
import apiRouter from './api.ts';
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 4000;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

const expressApp = express();

// Middleware
expressApp.use(cors());
expressApp.use(express.json());
expressApp.use(fileUpload());
expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(cookieParser());

expressApp.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();  // Chuyển tiếp request đến các route tiếp theo
});

// API Routes
expressApp.use('/api/', apiRouter);

app.prepare().then(() => {
 const httpServer = createServer((req, res) => {
   // Kiểm tra nếu request là API thì chuyển sang Express
   if (req.url?.startsWith('/api')) {
     expressApp(req, res);
   } else {
     // Ngược lại, sử dụng Next.js handler
     handler(req, res);
   }
 });

 console.log('Server created');

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