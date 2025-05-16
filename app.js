function App() {
  const [hoverCamiseta, setHoverCamiseta] = React.useState(false);
  const [hoverProducto2, setHoverProducto2] = React.useState(false);
  const [hoverProducto3, setHoverProducto3] = React.useState(false);
  const [hoverProducto4, setHoverProducto4] = React.useState(false);
  const [hoverProducto5, setHoverProducto5] = React.useState(false);

  return (
    <div className="app" style={{ minHeight: "100vh", background: "none" }}>
      <header role="banner" className="header">
        <nav aria-label="Menú principal" className="navbar-fixed">
          <ul className="nav">
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main role="main">
        <div className="container-section">
          <section id="productos" aria-labelledby="titulo-productos">
            <h2 id="titulo-productos">Nuestros Productos</h2>
            <div className="productos-grid">
              <article
                className="producto"
                tabIndex="0"
                aria-label="Producto Camiseta"
                onMouseEnter={() => setHoverCamiseta(true)}
                onMouseLeave={() => setHoverCamiseta(false)}
              >
                <img
                  src={hoverCamiseta ? "media/img1.2.jpg" : "media/img1.jpg"}
                  alt="Camiseta azul"
                  className="producto-img"
                  style={{transition: "opacity 0.2s"}}
                />
                <h3>Camiseta Azul</h3>
                <p>20€</p>
              </article>

              <article
                className="producto"
                tabIndex="0"
                aria-label="Producto 2"
                onMouseEnter={() => setHoverProducto2(true)}
                onMouseLeave={() => setHoverProducto2(false)}
              >
                <img
                  src={hoverProducto2 ? "media/img2.2.jpg" : "media/img2.jpg"}
                  alt="Producto 2"
                  className="producto-img"
                  style={{transition: "opacity 0.2s"}}
                />
                <h3>Producto 2</h3>
                <p>25€</p>
              </article>

              <article
                className="producto"
                tabIndex="0"
                aria-label="Producto 3"
                onMouseEnter={() => setHoverProducto3(true)}
                onMouseLeave={() => setHoverProducto3(false)}
              >
                <img
                  src={hoverProducto3 ? "media/img3.2.jpg" : "media/img3.jpg"}
                  alt="Producto 3"
                  className="producto-img"
                  style={{transition: "opacity 0.2s"}}
                />
                <h3>Producto 3</h3>
                <p>30€</p>
              </article>

              <article
                className="producto"
                tabIndex="0"
                aria-label="Producto 4"
                onMouseEnter={() => setHoverProducto4(true)}
                onMouseLeave={() => setHoverProducto4(false)}
              >
                <img
                  src={hoverProducto4 ? "media/img4.2.jpg" : "media/img4.jpg"}
                  alt="Producto 4"
                  className="producto-img"
                  style={{transition: "opacity 0.2s"}}
                />
                <h3>Producto 4</h3>
                <p>35€</p>
              </article>

              <article
                className="producto"
                tabIndex="0"
                aria-label="Producto 5"
                onMouseEnter={() => setHoverProducto5(true)}
                onMouseLeave={() => setHoverProducto5(false)}
              >
                <img
                  src={hoverProducto5 ? "media/img5.2.jpg" : "media/img5.jpg"}
                  alt="Producto 5"
                  className="producto-img"
                  style={{transition: "opacity 0.2s"}}
                />
                <h3>Producto 5</h3>
                <p>Precio: 40€</p>
              </article>
            </div>
          </section>
        </div>

        <div className="container-section">
          <section id="contacto" aria-labelledby="titulo-contacto">
            <h2 id="titulo-contacto">Contacto</h2>
            <form className="form-contacto">
              <label htmlFor="nombre">Nombre:</label>
              <input id="nombre" name="nombre" type="text" required placeholder="Tu nombre" />

              <label htmlFor="email">Correo electrónico:</label>
              <input id="email" name="email" type="email" required placeholder="tucorreo@email.com" />

              <label htmlFor="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="mensaje" required placeholder="Escribe tu mensaje aquí..."></textarea>

              <button type="submit" style={{marginTop: "1.5rem"}}>Enviar</button>
            </form>
          </section>
        </div>
      </main>

      <footer role="contentinfo">
        <p>&copy; 2025 Tienda creada por Sebastian Carpintero y Ethan Seisdedos</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
