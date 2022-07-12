import { sequelize } from './database/server';
import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import routes from './api/routes';

const app = express();
app.use(bodyParser.json());
app.use('/', routes);

// app.get('/', (req: Request, res: Response) => {
//   res.send('Está rodando');
// });

app.listen(3000, () => {
    console.log(`App rodando na porta 3000!`);
});


  sequelize
    .authenticate()
    .then(() => {
      console.log('Conexão com o mysql realizada com sucesso');
    })
    .catch((error: Error) => {
      console.log(`Conexão com o mysql não foi bem sucedida: ${error}`);
    });


