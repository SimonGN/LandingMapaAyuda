import React from "react";

import Button from "../Button/Button";
import { CookiesStyles } from "./CookiesStyle";

import ParagraphBodySmall from "../../styles/fontsStyles/paragraphBodySmall";
import ParagraphBody from "../../styles/fontsStyles/paragraphBody";

class Cookies extends React.Component {
  constructor({ backgroundColor, color }) {
    super({ backgroundColor, color });
    this.state = { display: "flex" };
  }

  componentDidMount() {
    const display = localStorage.getItem('displayMapaAyuda')
    this.setState({ ... this.state, display })
  }
  changeDisplay = () => {
    localStorage.setItem('displayMapaAyuda', 'none')
    const display = localStorage.getItem('displayMapaAyuda')
    this.setState({ ... this.state, display })
  };
  render() {
    const { } = this.props;
    return (
      <CookiesStyles display={this.state.display}>
        <div className="text">
          <div className="title">
            <ParagraphBody size="30px">🍪 </ParagraphBody>
            <ParagraphBody size="20px"> Pólitica de cookies</ParagraphBody>
          </div>
          <div className="paragraph">
            <ParagraphBodySmall size="16px" height="24px" color="#999999">Este sitio utiliza cookies técnicas y de rendimiento. Pulse el enlace <a href="" target="_blank">Preferencias de privacidad</a> para acceder a información detallada  sobre nuestras cookies.{" "}</ParagraphBodySmall>
          </div>
          <Button className="readmore" content="¡Estoy de acuerdo!" color="#46BDD2" backgroundColor="#D6F0F5" onClick={() => this.changeDisplay()} />

        </div>
      </CookiesStyles>
    );
  }
}

export default Cookies;