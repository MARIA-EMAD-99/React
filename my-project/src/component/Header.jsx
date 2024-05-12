
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

function Header() {
  // we use useRef to can deel with tag in return
    const headerRef = useRef();
    const [links] = useState(["features", "team", "signin"]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                headerRef.current.style.background = "#0c1524";
                headerRef.current.style.padding = "20px 0";
            } else {
                headerRef.current.style.background = "transparent";
                headerRef.current.style.padding = "60px  0";
            }
        };

        window.addEventListener("scroll", handleScroll);

        
    }, []); // Empty dependency array means this effect runs only once after the initial render

    return (
        <div ref={headerRef} className="pt-[60px] fixed top-0 left-0 w-[100%] z-50 transition-all duration-200">
            <div className="container  flex justify-between items-center gap-[30px] sm:gap-0  flex-col sm:flex-row">
                <Link href="/">
                    <img src="/src/assets/images/logo.svg" alt="Logo" />
                </Link>
                <nav>
                    <ul className="flex items-center gap-[50px]">
                        {links.map((link) => (
                            <li key={link}>
                                <a href={`/${link}`} className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200">{link}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
