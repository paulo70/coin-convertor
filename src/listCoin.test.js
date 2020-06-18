import React from 'react'
import ReactDOM from 'react-dom'
import List from './listCoin'

desctribe('Test of Coin List component', () => {
  it('It should render component unless error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<List />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
