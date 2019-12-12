//chunk1
const express = require('express');
const sendMail = require('./mail');
const log = console.log;
const app = express();
const path = require('path');

const PORT = 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

// Chunk2
// Data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


//name,email,guest,event,message
app.post('/email', (req, res) => {
    //const output =`
    //<li>Name; ${req.body.name}</li>
    //<li>email; ${req.body.email}</li>
    //<li>guest; ${req.body.guest}</li>
    //<li>event; ${req.body.event}</li>
    //<li>message; ${req.body.message}</li>
   // `;
    //Todo:
    //send email here
    const {name, email, guest, event, message}= req.body;
   console.log('Data: ', req.body);

    sendMail(name, email, guest, event, message, function(err, data){
        if (err){
            res.status(500).json({message: 'Internal Error'});
        } else {
          res.json({message: 'Email Sent!!!'})
       }

    });
   
});

// Start server
app.listen(PORT, () => log('Server is starting on PORT, ', 8080));