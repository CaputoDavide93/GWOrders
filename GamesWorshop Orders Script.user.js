// ==UserScript==
// @name         GamesWorshop Orders Script
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  Make the live of the account manager easy!
// @author       Davide Caputo - CaputoDav@gmail.com
//@match        https://www.games-workshop.com/*
// @grant        none
// ==/UserScript==
//TEST

(function() {
    'use strict';
var message =' Code: '+ document.querySelector("button.giftlist").getAttribute('data-skuid');
    if (message.includes('991899')) {
  message = document.querySelector("button.giftlist").getAttribute('data-skuid') + '<font color="red">06<font>';
}else if (message.includes('992099')) {
  message = document.querySelector("button.giftlist").getAttribute('data-skuid') + '<font color="red">06<font>';
}
if(document.querySelector('.product-info .btn-tooltip--isWebstoreExclusive') != null) message += '<b> ONLINE ONLY</b>'
document.getElementsByTagName('h1')[1].innerHTML += '<br>________________<br>' + message


})();
