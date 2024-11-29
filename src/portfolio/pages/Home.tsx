import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { Button } from "../../ui/components/Button";

export const Home = () => {
  return (
    <div className="page-home">
      <h1>👋 Hola! </h1>
      <p>
      Soy Reinaldo, <span className="marker">Ingeniero de software</span> full stack. Mi enfoque esta en crear soluciones web completas y centradas en el usuario utilizando tecnologías como <span className="marker">Node.js</span>, <span className="marker">React.js</span> y <span className="marker">Express</span>. Siempre estoy abierto a aprender nuevas tecnologías para ofrecer soluciones innovadoras, escalables y de alto rendimiento con interfaces atractivas.
      </p>
      <section>
        <h2>Puedes encontrarme en:</h2>
        <div className="social">
          <a href="https://www.linkedin.com/in/rbust/" target="_blank" className="icon"><IoLogoLinkedin /></a>
          <a href="https://github.com/ReinaldoBustamante/" target="_blank" className="icon"><IoLogoGithub /></a>
        </div>
      </section>
      <Button label={'Explora mis proyectos'} path={'/projects'} />
    </div>
  )
}