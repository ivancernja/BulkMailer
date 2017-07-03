const nodemailer = require('nodemailer');

//READ JSON
var fs1 = require('fs'),
fs2 = require('fs'),
    obj,
    tData

// Read the template - read the JSON
fs2.readFile('/path/to/template','utf8', function (err, data) {
  if (err) throw err;
  tData = data;
  fs1.readFile('/path/to/JSON', handleFile)
});

// Write the callback function
function handleFile(err, data) {
    if (err) throw err
    obj = JSON.parse(data);
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: '',
        pass: ''
    }
});
for (var k in obj) {

var shtml = "";
shtml = (tData+"")
			.replace(/==pass==/g,obj[k].Password)
			.replace(/==name==/g,obj[k].Name);

// setup email data with unicode symbols
let mailOptions = {
    from: '', // sender address
    to: obj[k].Email, // list of receivers
    subject: "Welcome" +  (obj[k].Name), // Subject line
    html: shtml//.replace(/##pass##/gi,obj[k].Password)//.replace(/##pass##/gi,obj[k].Password) // html body ## = add to HTML placeholder
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
        // obj[k].Email
        // obj[k].Password
        // obj[k].Name
    }

}

