const http = require('http');
const app = require("./app");
var cors = require('cors')

app.use(cors())

const port = process.env.PORT || 3000
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});