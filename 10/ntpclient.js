var ntpClient = require('ntp-client');

ntpClient.getNetworkTime('pool.ntp.org', 13, function(err, date) {

    if (err) {
        console.error(err);
        return;
    }

    console.log(date);
});

