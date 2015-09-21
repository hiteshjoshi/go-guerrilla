sendmail = require('sendmail')();
 
sendmail({
    from: 'no-reply@yourdomain.com',
    to: 'test@ttagit.in',
    subject: 'test sendmail',
    content: 'Mail of test sendmail ',
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});