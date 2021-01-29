import React from 'react';

const Header = () => {

    return(
        <div className="header">
        {/* <Button onClick={handleSidebar} label={isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars" > </i>} /> */}
        <a href="#foo">News</a>
        <a href="#foo">Contact</a>
        <a href="#foo">About</a>
    </div>
    )
}

export default Header;