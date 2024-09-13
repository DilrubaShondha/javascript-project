function sendNotification(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return 'Invalid Email';
    } 
    const [username, domain] = email.split('@');
    let notification = username + ' sent you an email from ' + domain;
    return notification;
}

