import {useState} from 'react'
import './App.css';
import Title from './Title';
import Menu from './Menu';
import menu from './data';
import Categories from './Catogories';

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// console.log(tempSet);

const allCategories = ['all', ...new Set(menu.map((item)=>
item.category))];


const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    // console.log(category);
    if(category === 'all'){
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  }
  return (
    <main>
      <section className='menu'>
        <Title text='Our Menu'/>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items = {menuItems}/>
      </section>
    
    </main>
  );
}

export default App;
