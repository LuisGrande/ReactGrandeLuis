import Logo from "./Logo";
import ItemListContainer from "./HeaderItemsListContainer";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <header>
            <div className="containerBrand">
                <Logo />

            </div>
            <nav className="containerItemList">
               <ItemListContainer 
                  opcion1 = "Nike"
                  opcion2 = "Adidas"
                  opcion3 = "Puma"
                  opcion4 = "Otras"
                  
               />

            </nav>
            <div className="containerCart">
                <CartWidget 

                />
            </div>
        </header>
    )
}

export default NavBar;