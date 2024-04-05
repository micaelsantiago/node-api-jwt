import express, { json } from 'express';
import { router } from './router.js';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(json());
app.use(router);

app.listen(PORT, () => console.log(`Server running on the port ${PORT}`));