import { useState } from 'react'
import './App.css'

function getimgpath(item: any) {
  let id = String(item.id).padStart(3, '0')
  return `assets/icons/${id}-${item.name}.svg`
}

function App() {

  const [store, setStore] = useState([
    {
      id: 1,
      name: "Beetroot",
      price: 0.50,
      incart: 0,
      stock: 20
    },
    {
      id: 2,
      name: "Carrot",
      price: 0.10,
      incart: 0,
      stock: 20
    },
    {
      id: 3,
      name: "Apple",
      price: 0.20,
      incart: 0,
      stock: 20
    },
    {
      id: 4,
      name: "Apricot",
      price: 0.30,
      incart: 0,
      stock: 20
    },
    {
      id: 5,
      name: "Avocados",
      price: 0.40,
      incart: 0,
      stock: 20
    },
    {
      id: 6,
      name: "Bananas",
      price: 0.60,
      incart: 0,
      stock: 20
    },
    {
      id: 7,
      name: "Bellpepper",
      price: 0.70,
      incart: 0,
      stock: 20
    },
    {
      id: 8,
      name: "Berry",
      price: 0.80,
      incart: 0,
      stock: 20
    },
    {
      id: 9,
      name: "Blueberry",
      price: 0.90,
      incart: 0,
      stock: 20
    },
    {
      id: 10,
      name: "Eggplant",
      price: 0.10,
      incart: 0,
      stock: 20
    }
  ])


  let ItemsInCart = store
  ItemsInCart = ItemsInCart.filter(item => item.incart > 0)

  function IncreaseAmountInCart(item) {

    if (item.stock === 0) return

    const StoreClone = structuredClone(store)

    let bestmatch = StoreClone.find(target => target.id === item.id)
    bestmatch.incart++
    bestmatch.stock--

    setStore(StoreClone)
  }

  function DecreaseAmountInCart(item) {
    if (item.incart < 1) return

    const StoreClone = structuredClone(store)

    let bestmatch = StoreClone.find(target => target.id === item.id)
    bestmatch.incart--
    bestmatch.stock++

    setStore(StoreClone)
  }


  function getTotal() {
    let total = 0

    for (let item of store) {
      total += item.price * item.incart
    }

    return total.toFixed(2)
  }

  return (
    <div className="app">
      <header id="store">
        <h1>Grocero</h1>
        <ul className="item-list store--item-list">
          {
            store.map(item => (<li>
              <div className=".store--item-icon">
                <img src={getimgpath(item)} />
              </div>
              <button
                onClick={function () {
                  IncreaseAmountInCart(item)
                }}
              >
                Add to cart ({item.stock})
              </button>
            </li>))
          }
        </ul>
      </header>

      <main id="cart">
        <h2>Your Cart</h2>

        <div className="cart--item-list-container">

          <ul className="item-list cart--item-list">
            {
              ItemsInCart.map(item => (
                <li>
                  <img className="cart--item-icon"
                    src={getimgpath(item)}
                    alt={item.name} />
                  <p>
                    {item.name}
                  </p>
                  <button className="quantity-btn remove-btn center"
                    onClick={function () {
                      DecreaseAmountInCart(item)
                    }}
                  >
                    -
                  </button>
                  <span className="quantity-text center">
                    {item.incart}
                  </span>
                  <button className="quantity-btn add-btn center"
                    onClick={function () {
                      IncreaseAmountInCart(item)
                    }}>
                    +
                  </button>
                </li>
              ))
            }

          </ul>




        </div>

        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>

          <div>
            <span className="total-number">£{getTotal()}</span>
          </div>
        </div>
      </main>


      <script type="module" src="/src/main.ts?t=1659010339317"></script>


    </div>
  )
}

export default App

