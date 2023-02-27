import './index.css'

const CryptocurrencyItem = props => {
  const {eachCryptocurrencyItem} = props
  const {
    currencyName,
    usdValue,
    euroValue,
    currencyLogo,
  } = eachCryptocurrencyItem
  return (
    <li className="list_item">
      <div className="container-image">
        <img className="currency-Logo" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="value-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
