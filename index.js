const customExpress = require('./config/customExpres')
const app = customExpress();

const port = 3000;
app.listen(port,()=>console.log(`Servidor rodando na porta ${port}`))