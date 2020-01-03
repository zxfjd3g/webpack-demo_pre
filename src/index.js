// import '@babel/polyfill'
// import _ from 'lodash-es'
import { min } from 'lodash-es'
import './assets/css/test.css'
import './assets/css/test2.less'
import './assets/css/test3.styl'

import logo from './logo.png'
/* eslint-disable no-unused-vars */
import { add, reduce } from './maths'
const { fn1 } = require('./other')

const fn = () => console.log('fn()-----')
fn()
new Promise(() => {})
class Test {}

const image1 = new Image()
image1.src = logo
image1.onclick = async () => {
  const {fn} = await import(/* webpackChunkName:"async1" */ /* webpackPrefetch: true */ './async-module')
  fn()
}
image1.classList.add('avatar1')

const image2 = new Image()
image2.src = logo
image2.classList.add('avatar2')

const image3 = new Image()
image3.src = logo
image3.classList.add('avatar3')

const app = document.getElementById('app')
app.appendChild(image1)
app.appendChild(image2)
app.appendChild(image3)

document.write("<br/> Hello Webpack223")

console.log(add(1, 2))
// console.log(_.min([1, 2]))
console.log(min([1, 2]))
fn1()

async function fn2 () {
  const response = await axios.get('/api/user/2')
  console.log('result', response.data)

  const response2 = await axios.get('/api_github/search/users?q=zxfjd3g')
  console.log('result2', response2.data)
}
fn2()