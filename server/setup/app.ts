import 'express-async-errors';
import express from 'express';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import debug from 'debug';
import helmet from 'helmet';
import { CommonRoutesConfig } from '../common/common.routes.config';
import { FileUploadRoutes } from '../modules/fileUpload/fileUpload.routes.config';
import headerOptions from './headerOptions';

const app: express.Application = express();
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(helmet());

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true }),
  ),
};

if (process.env.DEBUG) {
  process.on('unhandledRejection', function (reason) {
    debugLog('Unhandled Rejection:', reason);
    process.exit(1);
  });
} else {
  loggerOptions.meta = false;
}

/**
 * Header options
 */
app.use(headerOptions);

app.use(expressWinston.logger(loggerOptions));

routes.push(new FileUploadRoutes(app));

app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send({ message: 'Server is up and running' });
});

export { app as default, routes };
