import React, {useState} from 'react';
import "./style.css";
import Menu from "./menuAPI"
import MenuCard from './MenuCard';

const Resturent = () => {

    const [menuData, setMenuData] = useState(Menu);

    const filterItem = (catagory) => {
        const updatedList = Menu.filter((curElem) =>{
            return curElem.catagory === catagory;

        } 
        );
        setMenuData(updatedList);
    };

    return (
        <>
        <nav className="navbar">
            <div className="btn-group">
              <button className="btn-group__item" onClick={() => filterItem("Breakfast")}>Breakfast</button>
              <button className="btn-group__item" onClick={() => filterItem("Lunch")}>Lunch</button>
              <button className="btn-group__item" onClick={() => filterItem("Dinner")}>Dinner</button>
              <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button>
            </div>
        </nav>
       < MenuCard menuData={menuData} />
        </>
    );
};

export default Resturent;
