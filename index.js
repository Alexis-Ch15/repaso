import express from 'express';
import {main,  Product } from './database.js';

const app = express();
const port = 3000;
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/producto',async(req,res)=>{
    try {
        //Paso1 req-body

        //Paso2- validaciones

        //Paso3
        const newProduct= new Product(req.body)
        await newProduct.save()
        //Paso4
        res.status(201).json({msj:"nuevo producto registrado"})
    } catch (error) {
        console.log(error)
    }
})
main().catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
