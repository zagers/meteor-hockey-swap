UI.registerHelper("prettifyDate", function(date) {
    return new moment(date).format('DD-MMM-YYYY')
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});
