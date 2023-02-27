import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {CryptocurrencyList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="card-CryptocurrencyTracker">
            <h1 className="CryptocurrencyTracker-heading">
              Cryptocurrency Tracker
            </h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <ul className="list-border-Cryptocurrency">
              <div className="coin-type-container">
                <p className="coin-type">Coin Type</p>
                <div className="coin-value-container">
                  <p className="usd-value">USD</p>
                  <p className="euro-value">EURO</p>
                </div>
              </div>
              {CryptocurrencyList.map(eachObject => (
                <CryptocurrencyItem
                  eachCryptocurrencyItem={eachObject}
                  key={eachObject.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
