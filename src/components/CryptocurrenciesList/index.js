// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CrypotcurrenciesList extends Component {
  state = {
    cryptoList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getDataList()
  }

  getDataList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const convertedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))

    this.setState({cryptoList: convertedData, isLoading: false})
    // console.log(convertedData)
  }

  render() {
    const {cryptoList, isLoading} = this.state
    return (
      <>
        {isLoading && (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        )}
        {!isLoading && (
          <>
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="logo"
            />
            <ul className="listed">
              <li className="nav-bar">
                <h1 className="coin-type">Coin Type</h1>
                <div className="right">
                  <h1 className="type">USD</h1>
                  <h1 className="type">EURO</h1>
                </div>
              </li>
              <li>
                {cryptoList.map(eachItem => (
                  <CryptocurrencyItem content={eachItem} key={eachItem.id} />
                ))}
              </li>
            </ul>
          </>
        )}
      </>
    )
  }
}

export default CrypotcurrenciesList
