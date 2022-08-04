<h1 align="center">
  <br>
  Balance Widget
  <br>
</h1>


# About

Scriptable Widget that shows Current Balance of account chosen, logo of bank, and account name

## Setup
Initial Requirements

* [Scriptable](https://scriptable.app/)
* Plaid API Development/Production key
* png of your Bank logo
--------------
How To

* Obtain your keys from the Plaid API: variables needed are `client_id`, `secret`, `access-token`

* Choose which environment you will be in. this will be provided in Plaids Documentation, in the example it is set to `sandbox`

* Get a PNG file of your selected bank, the size is 15x15 in the example (any file can go there in case you want to add your own flair)

* Open Balance.JS file and fill out the URI Call with your keys
```bash
let auth = {
	client_id:"YOUR CLIENT_ID",
	secret:"YOUR SECRET",
	access_token:"YOUR ACCESS TOKEN"};
let t = "https://sandbox.plaid.com/accounts/balance/get";
```

* Upload Balance.JS file to Scriptable and add it to your Homescreen


## Special Thanks

This project wouldn't have happened without.

- [Plaid API's Documentation](https://plaid.com/docs/quickstart/)
  for providing an incredible quick start guide as well as all the Endpoints premade within Postman.

### Support Me

* [Cash App](https://cash.app/$bloblems)
* [Personal Site](https://www.bloblems.com/)
