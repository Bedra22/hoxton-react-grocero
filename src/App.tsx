import './App.css'


function cartitems() {
  return state.storeItems.filter(item => item.incart > 0)
}


function increasestock(item) {
  if (item.stock === 0) return

  item.incart++
  item.stock--
}

function decreasestock(item) {
  if (item.incart > 0) {
    item.incart--
    item.stock++
  }
}

function App() {
  return (
    <div className="app">
      <header id="store">
        <h1>Grocero</h1>
        <ul className="item-list store--item-list">
          <li>
            <div className=".store--item-icon">
              <img src="assets/icons/001-Beetroot.svg" />
            </div>
            <button>
              Add to cart (20)
            </button>
          </li>
          <li>
            <div className=".store--item-icon">
              <img src="assets/icons/002-Carrot.svg" />
            </div>
            <button>
              Add to cart (20)
            </button>
          </li>
          <li>
            <div className=".store--item-icon">
              <img src="assets/icons/003-Apple.svg" />
            </div>
            <button>
              Add to cart (20)
            </button>
          </li>
          <li>
            <div className=".store--item-icon">
              <img src="assets/icons/004-Apricot.svg" />
            </div>
            <button>
              Add to cart (20)
            </button>
          </li>
          <li>
            <div className=".store--item-icon">
              <img src="assets\icons\005-avocado.svg" />
            </div>
            <button>
              Add to cart (20)
            </button>
          </li>
          <li>
            <div className=".store--item-icon">
              <img src="assets/icons/006-Bananas.svg" />
            </div>
            <button>
              Add to cart (20)
            </button>
          </li>
          <li>
            <div className=".store--item-icon">
              <img src="assets/icons/007-Bellpepper.svg" />
            </div>
            <button>
              Add to cart (20)
            </button>
          </li>
          <li>
            <div className=".store--item-icon">
              <img src="assets/icons/008-Berry.svg" />
            </div>
            <button>
              Add to cart (20)
            </button>
          </li>
          <li>
            <div className=".store--item-icon">
              <img src="assets/icons/009-Blueberry.svg" />
            </div>
            <button>
              Add to cart (20)
            </button>
          </li>
          <li>
            <div className=".store--item-icon">
              <img src="assets/icons/010-Eggplant.svg" />
            </div>
            <button>
              Add to cart (20)
            </button>
          </li>
        </ul>
      </header>

      <main id="cart">
        <h2>Your Cart</h2>

        <div className="cart--item-list-container">

          <ul className="item-list cart--item-list">
            <li>
              <img className="cart--item-icon" src="assets/icons/001-Beetroot.svg" alt="Beetroot" />
              <p>
                Beetroot
              </p>
              <button className="quantity-btn remove-btn center">
                -
              </button>
              <span className="quantity-text center">
                0
              </span>
              <button className="quantity-btn add-btn center">
                +
              </button>
            </li>
            <li>
              <img className="cart--item-icon" src="assets/icons/002-Carrot.svg" alt="Carrot" />
              <p>
                Carrot
              </p>
              <button className="quantity-btn remove-btn center">
                -
              </button>
              <span className="quantity-text center">
                0
              </span>
              <button className="quantity-btn add-btn center">
                +
              </button>
            </li>
            <li>
              <img className="cart--item-icon" src="assets/icons/003-Apple.svg" alt="Apple" />
              <p>
                Apple
              </p>
              <button className="quantity-btn remove-btn center">
                -
              </button>
              <span className="quantity-text center">
                0
              </span>
              <button className="quantity-btn add-btn center">
                +
              </button>
            </li>
            <li>
              <img className="cart--item-icon" src="assets/icons/004-Apricot.svg" alt="Apricot" />
              <p>
                Apricot
              </p>
              <button className="quantity-btn remove-btn center">
                -
              </button>
              <span className="quantity-text center">
                0
              </span>
              <button className="quantity-btn add-btn center">
                +
              </button>
            </li>
            <li>
              <img className="cart--item-icon" src="assets/icons/005-Avocados.svg" alt="Avocados" />
              <p>
                Avocados
              </p>
              <button className="quantity-btn remove-btn center">
                -
              </button>
              <span className="quantity-text center">
                0
              </span>
              <button className="quantity-btn add-btn center">
                +
              </button>
            </li>
            <li>
              <img className="cart--item-icon" src="assets/icons/006-Bananas.svg" alt="Bananas" />
              <p>
                Bananas
              </p>
              <button className="quantity-btn remove-btn center">
                -
              </button>
              <span className="quantity-text center">
                0
              </span>
              <button className="quantity-btn add-btn center">
                +
              </button>
            </li>
            <li>
              <img className="cart--item-icon" src="assets/icons/007-Bellpepper.svg" alt="Bellpepper" />
              <p>
                Bellpepper
              </p>
              <button className="quantity-btn remove-btn center">
                -
              </button>
              <span className="quantity-text center">
                0
              </span>
              <button className="quantity-btn add-btn center">
                +
              </button>
            </li>
            <li>
              <img className="cart--item-icon" src="assets/icons/008-Berry.svg" alt="Berry" />
              <p>
                Berry
              </p>
              <button className="quantity-btn remove-btn center">
                -
              </button>
              <span className="quantity-text center">
                0
              </span>
              <button className="quantity-btn add-btn center">
                +
              </button>
            </li>
            <li>
              <img className="cart--item-icon" src="assets/icons/009-Blueberry.svg" alt="Blueberry" />
              <p>
                Blueberry
              </p>
              <button className="quantity-btn remove-btn center">
                -
              </button>
              <span className="quantity-text center">
                0
              </span>
              <button className="quantity-btn add-btn center">
                +
              </button>
            </li>
            <li>
              <img className="cart--item-icon" src="assets/icons/010-Eggplant.svg" alt="Eggplant" />
              <p>
                Eggplant
              </p>
              <button className="quantity-btn remove-btn center">
                -
              </button>
              <span className="quantity-text center">
                0
              </span>
              <button className="quantity-btn add-btn center">
                +
              </button>
            </li>
          </ul>




        </div>

        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>

          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
      <script type="module" src="/src/main.ts?t=1659010339317"></script>


    </div>
  )
}

export default App
