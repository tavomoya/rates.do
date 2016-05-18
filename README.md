# Rates.DO

Get the updated rates for US Dollars and Euros from major banks in the Dominican Republic.

Thanks to [_Marcos Organizador de Negocios S.R.L_'s awesome API](http://api.marcos.do)

## How to use it

To install it just do `npm install rates.do` and require it.

```javascript
var Rates = require('rates.do');
```

#### Get rates from all banks

```javascript
new Rates().getAllRates(); //This returns a promise
```

#### Get US Dollar rate from Central Bank

```javascript
new Rates().centralBankRate();  //This returns a promise
```

## To Do

More functionality is coming. Check below the future features to be included, and if you have an idea and want to collaborate don't doubt to send a PR. :)

+ Get rates for a specific bank
