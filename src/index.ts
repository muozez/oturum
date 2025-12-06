import Express = require("express");
import 'dotenv/config';
const port = process.env.PORT;
const app = Express();

app.use('/', (req, res)=>{
    res.status(200);
    res.json({message: "200"})
})

app.listen(port, ()=> console.log(`Listening at ${port}`))