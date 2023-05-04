import React from 'react'


const NavBar = () => {
    return (


        <nav className='nav'>
            <a href="/" className="site-title">Re:Tour</a>
            <ul>
                <li className='active'>
                    <a href="/StoreList">Store List</a>
                </li>

                <li>
                    <a href="/TourLocator">Tour Locator</a>
                </li>


                <li>

                    <div class="dropdown">
                        <button class="dropbtn">System Pages
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>



                </li>

                <li>
                    <div class="dropdown">
                        <button class="dropbtn">Layout Variants
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </li>

                <li>
                    <a href="/SystemPages">Tutorials</a>
                </li>

                <li>
                    <button className='button1'>+ Submit a Tour</button>
                </li>
            </ul>


        </nav>




    )
}

export default NavBar;