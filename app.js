bodyParser = require('body-parser');
const cors = require('cors');
let express = require('express');
let app = express();
app.use(bodyParser.json());
app.use(cors()); // this should solve the cors issues

app.use('/api', require('./routes/apiRoutes'));

//This is for set up the  server and the port
const port = process.env.PORT || 3000;


    app.listen(port, () => {
        console.log(`Money-safer app listening on port ${port}!`)
    });

