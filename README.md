# MieterEngel coding challenge

Welcome to the MieterEngel coding challenge! Your mission, should
you accept it, is to build a page that our customers can use
to take a picture of a page with their mobile phone and send the picture
to us via email.

---

First install server dependencies:

```bash
cd server && npm install
```

Next install client dependencies:

```bash
cd client && yarn
```

Create a .env inside of server directory and add the following config variables

```bash
  PORT=<PORT>
  HOST=<HOST> //http:localhost
  AWS_ACCESS_KEY_ID=<VALID_AWS_ACCESS_KEY_ID>
  AWS_SECRET_ACCESS_KEY=<VALID_AWS_SECRET_ACCESS_KEY>
  AWS_REGION=<VALID_AWS_REGION>
  AWS_CONFIG_SET_EMAIL=<VALID_AWS_CONFIG_SET_EMAIL> //https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email.html Lookup how to send emails with aws SES
  MAIL_TO=<VALID_EMAIL> //coding-challenge@mieterengel.de
```

CD into client directory and create a .env file and add the following config variables

```bash
  REACT_APP_BASE_API_URL=<SERVER_URL> //http://localhost:6000
```

To run both applications concurrently in **DEV** mode, from the root of the project

```bash
npm run dev
```

---

### **AVAILABLE ENDPOINTS**

| Endpoint  | Resource                                              | Payload                        | Method |
| --------- | ----------------------------------------------------- | ------------------------------ | ------ |
| '/'       | Server is up                                          | N/A                            | GET    |
| '/upload' | Upload Image screenshot and get a pdf copy in mailbox | base64EncodedImage in req.body | POST   |
