import http from 'http';
import { AppLogger } from './core/eventLogger';
import app from './app';

const logger = new AppLogger();
const scope = 'index.ts';
const port = 8000;
const server = http.createServer({}, app);

server
  .listen(port, () => {
    logger.logInfo(scope, `Server started on port ${port}`);
  })
  .on('error', (e) => {
    logger.logWarn(scope, e.toString());
  });
