import React from 'react'
import './ProductItem.css'
import Button from '../Button/Button'

function ProductItem({product,className,onAdd}) {

    const onAddHandler = () => {
        onAdd(product)
    }

  return (
    <div className={"productClass"+className }>
      <div className={'img'} />
      <div className={'title'}>{product.title}</div>
      <div className={'description'}>{product.description}</div>
      <div className={'price'}>
        <span>Narxi:{product.price}</span>
        </div>    
      <Button className={'addButton'} onClick={onAddHandler}>
        Svatga qo'shish:{product.price}
      </Button>
    </div>
  )
}

export default ProductItem
