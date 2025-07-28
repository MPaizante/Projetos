import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import Header from "./Header";
import Main from "./Main";
import Section from "./Section";
import Footer from "./Footer";
function Project() {
  return (
    <>
      <div class="container">
            <div class="container1">
            <header class="header bg-white rounded">
                <Header/>
            </header>
            </div>
            <div class="container2">
                <main class="main rounded fw-light">
                <Main/>
                </main>

                <section class="section rounded bg-white fw-light">
                    <Section/>
                </section>

                <footer class="footer rounded bg-white fw-light">
                    <Footer/>
                </footer>
                </div>
      </div>
    </>
  );
}
export default Project;
