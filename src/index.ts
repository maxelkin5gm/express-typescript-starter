import express, { Application } from 'express';
import cookieParser from 'cookie-parser';

import routes from './routes';
import appConfig from './config/App.config';
import { errorHandler, httpExceptionHandler } from './middlewares/error.middleware';

const app: Application = express();

app.use(cookieParser());

app.use('/', routes);

app.use(httpExceptionHandler);
app.use(errorHandler);

app.listen(appConfig.port, () => {
  console.log(`Server running on port ${appConfig.port}`);
});
