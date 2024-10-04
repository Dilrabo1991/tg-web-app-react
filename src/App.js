import React, { useEffect } from 'react'
import { useTelegram } from './components/Hooks/useTelegram';
import Header from './components/Header/Header';
import { Route , Routes} from 'react-router-dom';
import Form from './components/Form/Form';
import ProductList from './components/ProductList/ProductList';

function App() {
  const {tg,  onToggleButton}= useTelegram()

useEffect(() => {
  tg.ready()
 }, []);


  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'/form'} element={<Form />} />
      </Routes>
    </div>
  )
}

export default App
