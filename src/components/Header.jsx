import React from 'react'
import Button from '@/elements/Button'
import BrandIcon from './IconText'

const Header = (props) => {
    const getNavLinkClass = (path) => {
        // return props.location.pathname === path ? "active" : "";
        return "active";
    }

    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <BrandIcon />
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className={`nav-item ${getNavLinkClass('/')}`}>
                                <Button className="nav-link" type="link" href="/">
                                    Home
                                </Button>
                            </li>
                            <li className={`nav-item ${getNavLinkClass('/')}`}>
                                <Button className="nav-link" type="link" href="/browse-by">
                                    Browse By
                                </Button>
                            </li>
                            <li className={`nav-item ${getNavLinkClass('/')}`}>
                                <Button className="nav-link" type="link" href="/stories">
                                    Stories
                                </Button>
                            </li>
                            <li className={`nav-item ${getNavLinkClass('/')}`}>
                                <Button className="nav-link" type="link" href="/agents">
                                    Agents
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header