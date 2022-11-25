import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {authRouter, usersRouter} from "./routes";
import {errorHandler} from "./middlewares";



const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
app.use(cors());
app.use(morgan('tiny'));

app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)

// health check request
app.get('/health', (req, res) => {
  res.json({ ok: true });
});


app.use(errorHandler);


export default app;
