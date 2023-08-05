'use client'

import {useState, useCallback} from 'react';
import { Rating } from "@mui/material";
import SetColor from '@/app/components/products/SetColor';
import SetQuantity from '@/app/components/products/SetQuantity';
import Button from '@/app/components/Button';


interface ProductDetailsProps{
    product ?: any;
}

export type CartProductType = {
  id: string,
  name: string,
  description: string,
  category: string,
  price: number,
  brand: string,
  quantity: number,
  selectedImg: SelectedImgType
}

export type SelectedImgType = {
  image: string,
  color: string,
  colorCode: string
}

const Horizontal = () => {
  return <hr className="w-[35%] my-2" />
}


const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {

  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    price: product.price,
    brand: product.brand,
    quantity: 1,
    selectedImg: {...product.images[0]},
  });
  
  const productRating = product.reviews.reduce
        ((acc: number, item: any) => item.rating + acc, 0) / product.reviews.length
  
  const handleColorSelect = useCallback((value: SelectedImgType) => {
    setCartProduct((prev) => {
        return {...prev, selectedImg: value};
      })
  }, [cartProduct.selectedImg])
  
  const handleQtyIncrease = useCallback(() => {
    setCartProduct((prev) => {
      return {...prev, quantity: ++prev.quantity}
    })
  }, [cartProduct]);
  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return ;
    }

    setCartProduct((prev) => {
      return {...prev, quantity: --prev.quantity}
    })
  }, [cartProduct]);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>Images</div>
          <div className="flex flex-col gap-1 text-slate-500 text-sm">
            <h2 className="text-3xl font-medium text-slate-700">
              {product.name}
            </h2>
        
            <div className="flex items-center gap-1">
              <Rating value={productRating} readOnly/>
              <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        
        <div className="text-justify">{product.description}</div>
        <Horizontal />

        <div>
          <span className="font-semibold">CATEGORY: </span>
          {product.category}
        </div>
        <div>
          <span className="font-semibold">BRAND: </span>
          {product.brand}
        </div>
        <div className={product.inStock ? 'text-teal-400' : 'text-rose-400'}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </div>

        <Horizontal />
        <SetColor
          cartProduct={cartProduct}
          images={product.images}
          handleColorSelect={handleColorSelect}
        />

        <Horizontal />
        <SetQuantity
          cartProduct={cartProduct}
          handleQtyDecrease={handleQtyDecrease}
          handleQtyIncrease={handleQtyIncrease}
        />

        <Horizontal />
        <div className='max-w-[300px]'>
          <Button            
            label='Add to Cart'
            onClick={() => {}}
          />
        </div>
        
        </div>  
    </div>
  )
}

export default ProductDetails