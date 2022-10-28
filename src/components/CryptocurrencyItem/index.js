// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {content} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = content

  return (
    <li className="each-item">
      <div className="left">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="right">
        <p className="currency-values">{usdValue}</p>
        <p className="currency-values">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
