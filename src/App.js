import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//to get the unique categories from the array use a set data structure.
//We use the spread operator to include 'all' in the allCategories array
const allCategories=["all",...new Set(items.map((item)=>item.category))];


function App() {
  const [menueItems,setMenueItems]=useState(items);
  const [categories,setCategories]=useState(allCategories);

  const filterItems=(category)=>{
    if(category==="all"){
      setMenueItems(items);
      return;
    }
    const newItems=items.filter((item)=>item.category===category);
    setMenueItems(newItems);
  }
  return (<main>
      <section className="menue section">
        <div className="title">
          <h2>Our Menue</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories}/>
        <Menu items={menueItems}/>
      </section>
    </main>
  );}

export default App;
