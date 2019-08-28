'use strict';

const axios = require('axios');

class Rates {

	constructor() {
		this.api = 'http://api.marcos.do';
	}

	async GetAllRates() {
		try {
			const res = await axios.get(`${this.api}/rates`);
			return res.data;
		} catch (err) {
			console.log('err=> ', err);
			return new Error(`There was an error trying to fetch all rates => ${err}`);
		}
	};

	async GetCentralBankRates() {
		try {
			const res = await axios.get(`${this.api}/central_bank_rates`);
			return res.data;
		} catch (err) {
			console.log('err=> ', err);
			return new Error(`There was an error trying to fetch bank rates => ${err}`);
		}
	}

}

module.exports = Rates;