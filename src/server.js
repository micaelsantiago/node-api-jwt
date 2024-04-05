import express, { json } from 'express';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(json());
app.listen(PORT, () => console.log(`Server running on the port ${PORT}`));