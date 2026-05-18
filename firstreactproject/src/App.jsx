import Header from './components/Header'
import ProductCard from './components/ProdctCard'

function App() {
  return (
    <div>
      <Header />

      <ProductCard 
        name = "pc gamer baratin"
        preco = {2544.56}/>

      <ProductCard 
        name = "placa mãe barrada"
        preco = {24.56}/>

      <ProductCard 
        name = "chave windows craqueada"
        preco = {69.69}/>

    </div>
  )
}
export default App