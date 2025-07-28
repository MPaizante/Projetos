import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css"
import {Link} from "react-router-dom";
function Header(){
    return(
        <>
        <h1>Matheus Paizante</h1>
         <img alt="Matheus Paizante" src={require("./Captura de tela 2025-07-26 140907.png")} className="foto" />
          <div class="fw-light">
                <p>
                  Idade: <strong class="fw-semibold">26</strong>
                </p>
                <p>
                  Instituição de ensino:{" "}
                  <strong class="fw-semibold">UFF</strong>
                </p>
                <p>
                  Ocupação: <strong class="fw-semibold">DataQuality</strong>
                </p>
                <p>
                  Conhecimento: <strong class="fw-semibold">Full Stack</strong>
                </p>
                <p>
                  Cargo Desejado:{" "}
                  <strong class="fw-semibold">Desenvolvedor FullStack</strong>
                </p>
                <p>
                  <strong>
                    <Link
                      to="https://www.linkedin.com/in/matheus-p-174a35112/"
                      class="fw-semibold"
                    >
                      Linkedin
                    </Link>{" "}
                    |{" "}
                    <Link to="https://github.com/MPaizante" class="fw-semibold">
                      Github
                    </Link>
                  </strong>
                </p>
                <p>
                  Cidade: <strong class="fw-semibold">São Gonçalo – RJ</strong>
                </p>
                <p>
                  Telefone:{" "}
                  <strong class="fw-semibold">+55 (21) 975281815</strong>
                </p>
                <p>
                  E-mail:{" "}
                  <Link to="matheus_paizante@hotmail.com" class="fw-semibold">
                    matheus_paizante@hotmail.com
                  </Link>
                </p>
                <p>
                    Curso: <strong class="fw-semibold">Sistemas de Computação</strong>
                </p>
                <p>
                    Horario: <strong class="fw-semibold">Noturno.</strong>
                </p>
              </div>
        </>
    )
}
export default Header