import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Productlist from './Components/Productlist';
import Footer from './Components/Footer';
import Additem from './Components/Additem';

function App() {
    const initialProductList = [
        { price: 9999, name: "iPhone 12 Pro", quantity: 0 },
        { price: 50000, name: "Infinix Hot 8", quantity: 0 }
    ];

    let [productList, setProductList] = useState(initialProductList);
    let [totalAmount, setTotalAmount] = useState(0);

    // Increment function
    const incrementQuantity = (index) => {
        let newProductList = [...productList];
        newProductList[index].quantity++;
        setTotalAmount(totalAmount + newProductList[index].price);
        setProductList(newProductList);
    };

    // Decrement function
    const decrementQuantity = (index) => {
        let newProductList = [...productList];
        if (newProductList[index].quantity > 0) { 
            newProductList[index].quantity--;
            setTotalAmount(totalAmount - newProductList[index].price);
        }
        setProductList(newProductList);
    };

    // Reset function
    const resetQuantity = () => {
        let newProductList = productList.map(product => ({
            ...product,
            quantity: 0
        }));
        setProductList(newProductList);
        setTotalAmount(0);
    };

    // Remove item function
    const removeItem = (index) => {
        let newProductList = [...productList];
        let newTotalAmount = totalAmount;

        if (index >= 0 && index < newProductList.length) {
            newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
            newProductList.splice(index, 1);
        }

        setProductList(newProductList);
        setTotalAmount(newTotalAmount);
    };

    // ✅ Corrected AddItem function
    const addItem = (name, price) => {
        let newProductList = [...productList];
        newProductList.push({
            name: name,
            price: price,
            quantity: 1 // ✅ Default quantity 1 rakh rahe hain
        });
    
        setProductList(newProductList);
        setTotalAmount(totalAmount + price); // ✅ Total amount update kar rahe hain
    };
    

    return (
        <>
            <Navbar />
            <main className="container mt-5">
                <Additem Additem={addItem} /> {/* ✅ Fixed Prop Name */}
                <Productlist 
                    productList={productList} 
                    incrementQuantity={incrementQuantity} 
                    decrementQuantity={decrementQuantity} 
                    removeItem={removeItem} 
                />
            </main>
            <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
        </>
    );
}

export default App;
