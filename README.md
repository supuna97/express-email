# express-email with nodemailer

## description
This is a simple email sender using express and nodemailer

## usage
1. clone this repo
2. run `npm install`
3. create a `.env` file in the root directory and add the following:
```
MAIL_DRIVER=smtp
MAIL_HOST=
MAIL_PORT=587
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_ENCRYPTION=tls
MAIL_FROM=
MAIL_FROM_NAME=
```
4. run `npm start`
5. open `http://localhost:3000/v1/email/send` in your postman
6. send a POST request with the following body:
```
{
    "to": "your email address",
    "subject": "your subject",
    "text": "your text"
}
```
7. check your email

## reference
- [nodemailer](https://nodemailer.com/about/)
- [express](https://expressjs.com/)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [postman](https://www.postman.com/)

## author
- [GitHub](https://github.com/supuna97)
- [LinkedIn](https://www.linkedin.com/in/supunnanayakkara/)

## version
1.0.0

## license
Apache License 2.0
```
