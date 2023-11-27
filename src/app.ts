import { Application } from 'express';
import express from 'express';
import morgan from 'morgan';
import color from 'colorts';
import { loadRoutes } from './routes';
import { DataSource } from '../data';

const app: Application = express();

// logger
app.use(morgan('dev'));

// body parser
app.use(express.json());

loadRoutes(app);

const PORT: number = 3000;
const MODE: string = 'development';

app.listen(PORT, () => {
  // load data
  DataSource.loadData();

  console.log(color(`Data loaded successfully`).yellow.underline.bold.italic.toString());

  console.log(
    color(`App is running in ${MODE} mode on port ${PORT} 🚀...`).magenta
      .underline.bold.italic.toString()
  );

  console.log(color(`Server is live 🚀...`).green.underline.bold.italic.toString());
});
