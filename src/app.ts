import express from "express";
import routes from './routes';

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send('API is running!');
});

app.use('/api', routes);

export default app;

