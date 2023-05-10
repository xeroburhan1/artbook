const express = require('express');
const payload = require('payload');
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 5000;


require('dotenv').config();
const server = express();


const app = next({dev})
const handle = app.getRequestHandler()

payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  email: {
    transportOptions: {
      host: process.env.SMTP_HOST,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      port: process.env.SMTP_PORT,
      secure: false,
      },
    fromName: 'INNOVATE',
    fromAddress: 'info@iecbd.org'
  },
  express: server,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

app.prepare().then(()=>{
  server.get("*",(req,res)=>{
    return handle(req,res)
  })
  server.listen(PORT,(err)=>{
    console.log("running")
  })
})



 
