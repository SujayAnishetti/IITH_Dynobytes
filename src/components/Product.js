import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [shirt, setShirt] = useState(null);
  const [selectedSize, setSelectedSize] = useState('S');
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await response.json();
        setShirt(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSizeChartOpen = () => {
    setIsSizeChartOpen(true);
  };

  const handleSizeChartClose = () => {
    setIsSizeChartOpen(false);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleImageClick = (imgNumber) => {
    setSelectedImage(imgNumber);
  };

  const handleBackToMarketplace = () => {
    navigate('/'); // Replace '/' with your actual marketplace route
  };

  if (!shirt) {
    return <div className="text-center mt-10">Shirt not found!</div>;
  }

  return (
    <div className='product w-full h-screen bg-white'>
      <div className="container w-full h-full flex gap-8 items-center pt-16">
        <div className="left-sec w-1/2 h-[80vh] flex justify-center">
          <div className="main-img w-[50%] h-full flex items-center justify-center overflow-hidden relative">
            <img 
              src={shirt.image} 
              alt={shirt.name} 
              className="w-full h-full object-contain transition-transform duration-300 transform hover:scale-110" 
            />
          </div>
        </div>
        <div className="right-sec w-1/2 h-[80vh] p-10 flex flex-col text-start">
          <h1 className='text-2xl mb-3'>{shirt.name} - OVERSIZED</h1>
          <h3 className='text-xl'>₹{shirt.price}</h3>
          <p className='mb-5 font-semibold opacity-40'>Incl. of all taxes</p>
          <p className='mb-2'>Size: <span className='font-semibold'>{selectedSize}</span></p>
          <div className="sizes flex gap-3 mb-5">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-10 h-10 border ${selectedSize === size ? 'border-black' : 'border-opacity-15'} rounded-xl transition-colors duration-300 hover:border-black`}
              >
                {size}
              </button>
            ))}
            <button 
              className='w-20 h-10 border bg-black text-white rounded transition-colors duration-300 hover:bg-gray-800'
              onClick={handleSizeChartOpen}
            >
              Size Chart
            </button>
          </div>
          <p className='mb-1'>Quantity: <span className='font-semibold'>{quantity}</span></p>
          <div className='flex items-center justify-between border border-black border-opacity-20 px-4 rounded-lg mb-7'>
            <button 
              className='text-lg hover:text-black transition-colors duration-300' 
              onClick={handleDecreaseQuantity}
            >
              -
            </button>
            <p>{quantity}</p>
            <button 
              className='text-lg hover:text-black transition-colors duration-300' 
              onClick={handleIncreaseQuantity}
            >
              +
            </button>
          </div>
          <div className="flex gap-2 mb-5">
            <button className='btn1 w-1/2 h-12 border border-black rounded font-medium transition-colors duration-300 hover:bg-gray-200'>Add to Cart</button>
            <button className='btn2 w-1/2 h-12 border border-black bg-black text-white rounded font-medium transition-colors duration-300 hover:bg-gray-800'>Buy Now</button>
          </div>
          <p className='text-sm mb-4'><span className='font-bold'>Material & Care:</span><br />
            {shirt.material} <br />
            {shirt.care}
          </p>
          <div className="flex justify-end mt-5">
            <button 
              className='btn-back w-1/2 h-12 border border-black rounded font-medium transition-colors duration-300 hover:bg-gray-200'
              onClick={handleBackToMarketplace}
            >
              Back to Marketplace
            </button>
          </div>
        </div>
      </div>

      {isSizeChartOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-5 rounded-lg relative'>
            <button 
              className='absolute top-2 right-2 text-lg font-bold'
              onClick={handleSizeChartClose}
            >
              &times;
            </button>
            <img 
              src='/path/to/size-chart.png' // Replace with actual size chart image
              alt='Size Chart'
              className='w-40 h-50'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
