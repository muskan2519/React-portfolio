export default function Header() {
    return(
        <header>
            <div className="headerLogo">
                <div className="outerCircle">
                    <div className="innerCircle">
                        <div className="headerText">MA</div>
                    </div>
                </div>
            </div>
            {/* Main navigation */}
            <nav id="mainNav">
                <ul className="navList">
                    <li className="navListItem"><a href="#bodySection2">ABOUT</a></li>
                    <li className="navListItem"><a href="#bodySection7">EDUCATION</a></li>
                    <li className="navListItem"><a href="#bodySection3">EXPERIENCE</a></li>
                    <li className="navListItem"><a href="#bodySection4">SKILLS</a></li>
                    <li className="navListItem"><a href="#bodySection5">PROJECTS</a></li>
                    <li className="navListItem"><a href="#bodySection6">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    )
}