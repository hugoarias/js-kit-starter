'use strict';

import { expect } from 'chai';
var jsdom = require('jsdom');
var fs = require('fs');
describe('Our first test', () => {
	it('should pass', () => {
		expect(true).to.equal(true);
	});
});

describe('index.html', () => {
	it('should say hello', () => {
		const index = fs.readFileSync('./src/index.html', 'utf-8');
		jsdom.env(index, (err, window) => {
			const h1 = window.document.getElementsByTagName('h1')[0];
			expect(h1.innerHTML).to.equal('Hello World!');
			window.close();
		});
	});
});
