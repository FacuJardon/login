import express from 'express';
import cookieParser from 'cookie-parser';
import router from './routes/index';

const PORT: number = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use("", router);
app.listen(PORT, () => console.log(`Server corriendo en el puerto ${PORT}`))

export default app;

