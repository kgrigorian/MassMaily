const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send({hi: 'there' })
} );

const PORT = process.env.PORT || 5000;
app.listen(PORT);
app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});