/* Para utilizar o componente crie o impert na página que deseja,
Coloque o nome do desenvolvedor entre <Footer> ___ </Footer> e passe
a informação dentro da tag Footer-Link <Footer link=()>___</Footer> */

import SocialLinks from "../socialLinks/socialLinks";
import "./footer.module.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";

const Footer = ({children, link}) =>{
    return (
        <footer>
            <p>
                Feito com <ion-icon name="heart"/> por {" "}
                 <a href={link} target="_blank" rel="noopener noreferrer">{children}</a>
            </p>
                <SocialLinks icon={"logo-github"} href={"https://github.com/N4rdelli"}/>
                <SocialLinks icon={"logo-instagram"} href={"https://instagram.com/aa_nardelli?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"}/>
                <SocialLinks icon={"logo-tiktok"} href={"https://www.tiktok.com/@heynardelli"}/>
        </footer>
    )
}

export default Footer;