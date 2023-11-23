'use strict';

const silvermonth = document.querySelector('.silvermonth');
const silveryear = document.querySelector('.silveryear');
const priceSilver = document.querySelector('.priceSilver');

const goldmonth = document.querySelector('.goldmonth');
const goldyear = document.querySelector('.goldyear');
const priceGold = document.querySelector('.priceGold');

const platmonth = document.querySelector('.platmonth');
const platyear = document.querySelector('.platyear');
const priceplat = document.querySelector('.priceplat');

const silvermonthmob = document.querySelector('.silvermonthmob');
const silveryearmob = document.querySelector('.silveryearmob');
const priceSilvermob = document.querySelector('.priceSilvermob');

const goldmonthmob = document.querySelector('.goldmonthmob');
const goldyearmob = document.querySelector('.goldyearmob');
const priceGoldmob = document.querySelector('.priceGoldmob');

const platmonthmob = document.querySelector('.platmonthmob');
const platyearmob = document.querySelector('.platyearmob');
const priceplatmob = document.querySelector('.priceplatmob');


const editPriceMonth = (nameclass, amount, dontselect, selected) => {
  nameclass.innerHTML = `Total price: ${amount}$`;
  selected.classList.add('selected')
  dontselect.classList.remove('selected')
} 
const editPriceYear = (nameclass, amount, dontselect, selected) => {
  nameclass.innerHTML = `Total price: ${amount}$`;
  selected.classList.add('selected')
  dontselect.classList.remove('selected')
} 


silvermonth.addEventListener('click', () => editPriceMonth(priceSilver, 100, silveryear, silvermonth));
silveryear.addEventListener('click', () => editPriceYear(priceSilver, 800, silvermonth, silveryear));

goldmonth.addEventListener('click', () => editPriceMonth(priceGold, 150, goldyear, goldmonth));
goldyear.addEventListener('click', () => editPriceYear(priceGold, 1500, goldmonth, goldyear));

platmonth.addEventListener('click', () => editPriceMonth(priceplat, 200, platyear, platmonth));
platyear.addEventListener('click', () => editPriceYear(priceplat, 2000, platmonth, platyear));

silvermonthmob.addEventListener('click', () => editPriceMonth(priceSilvermob, 100, silveryearmob, silvermonthmob));
silveryearmob.addEventListener('click', () => editPriceYear(priceSilvermob, 800, silvermonthmob, silveryearmob));

goldmonthmob.addEventListener('click', () => editPriceMonth(priceGoldmob, 150, goldyearmob, goldmonthmob));
goldyearmob.addEventListener('click', () => editPriceYear(priceGoldmob, 1500, goldmonthmob, goldyearmob));

platmonthmob.addEventListener('click', () => editPriceMonth(priceplatmob, 200, platyearmob, platmonthmob));
platyearmob.addEventListener('click', () => editPriceYear(priceplatmob, 2000, platmonthmob, platyearmob));


