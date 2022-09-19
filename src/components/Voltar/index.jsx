import { useEffect, useState } from "react";

import "./styles.css";

export default function Voltar() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 80) {
          setBackToTopButton(true)
        }else {
          setBackToTopButton(false)
        }
      })
    }, [])
  
    const scrollUp = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }

    return (
        <div id="btnTop" onClick={scrollUp}>
            {backToTopButton && (
                <i className="arrow up"></i>
            )}
        </div>
    );
}
