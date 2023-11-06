const mchMail = require("mailchimp").MailChimpAPI;
require("dotenv").config();

const { MAILCHIMP_API_KEY } = process.env;

mchMail.setApiKey(MAILCHIMP_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "sergeybabenko90@gmail.com" };
  await mchMail.send(email);
  return true;
};

module.exports = sendEmail;
