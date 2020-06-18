import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios'

import Coin from './coin'

describe('Test of Coin Convertor component', () => {

  it('It should render component unless error', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Coin />, div)
    ReactDOM.unmountComponentAtNode(div)
  })


  it('It should simulate a request to a coin convertion', async () => {
    const { findByTestId, getByTestId } = render( <Coin /> )

    axiosMock.get.mockResolvedValueOnce({
      data: { success: true , rates: { BRL: 4.564292, USD: 1.101049 }}
    })

    fireEvent.click(getByTestId('btn-convertor'))

    const modal = await findByTestId('modal')

    expect(axiosMock.get).toHaveBeenCalledTimes(1)
    expect(modal).toHaveTextContent('1 BRL = 0.24 USD')

  })
})
