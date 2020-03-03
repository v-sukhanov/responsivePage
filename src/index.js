import 'animate.css'

import './style/main.scss'
import {WOW} from 'wowjs'
import jump  from 'jump.js'

new WOW({
	offset: 100
}).init()

window.addEventListener('load', () => {
	const home = document.getElementsByClassName('item__home')[0]
	home.addEventListener('click', () => {
		jump('.promo', {
			duration: 600,
			offset: -90

		})
	})
	const products = document.getElementsByClassName('item__products')[0]
	products.addEventListener('click', () => {
		jump('.products', {
			duration: 700,
			offset: -90
		})
	})
	const service = document.getElementsByClassName('item__service')[0]
	service.addEventListener('click', () => {
		jump('.service', {
			duration: 700,
			offset: -90

		})
	})
	const footer = document.getElementsByClassName('item__contact')[0]
	footer.addEventListener('click', () => {
		jump('.footer', {
			duration: 700,
			offset: -90

		})
	})

	document.getElementsByClassName('burger')[0].addEventListener('click', () => {
		if (document.getElementsByClassName('menu')[0].className === 'header__menu menu')
			document.getElementsByClassName('menu')[0].className = 'header__menu menu menu_open'
		else 
			document.getElementsByClassName('menu')[0].className = 'header__menu menu'

	})

	window.addEventListener('scroll', () => {
		 if (window.pageYOffset > 90) {
			 document.getElementsByClassName('header')[0].className = 'header header__offset'
		 } else {
			document.getElementsByClassName('header')[0].className = 'header'
		 }
	})
})