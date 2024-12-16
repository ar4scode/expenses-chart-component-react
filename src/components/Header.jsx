import balanceLogo from "../assets/images/logo.svg"

export default function Header() {
  return(
    <header>
      <div className="my-balance-container">
        <p>My balance</p>
        <p className="balance-amount">$921.48</p>
      </div>

      <div className="logo-container">
        <img src={balanceLogo} alt="" />
      </div>
    </header>
  )
}