/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response } from 'express';
import ItemsController from './core/items.controller'

// Boot express
const app: Application = express();
const port = 5000;
const controller = new ItemsController();

// Application routing
app.use('/api/items', async (req: Request, res: Response) => {
  let response;
  if(req.query.q) {
    const query:any = req.query.q
    response = await controller.getQuery(query);
  }
  if (req.query.id) {
    const id:any = req.query.id
    response = await controller.getItems(id);
  }
  res.status(200).send(response);
});


// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
