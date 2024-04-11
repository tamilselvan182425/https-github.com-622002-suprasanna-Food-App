<>
<meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>USER APP</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="styles.css2.css" />
  <link href="file:///C:/Users/Apex%20informatics/OneDrive/Documents/Desktop/ReactApp/.vscode/React-course/components/Navbar.html" />
  {/*-update*/}
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n        @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.html {\n  font-size: 62.5%;\n}\n\nbody {\n  font-family: "Poppins", sans-serif;\n}\n\n/* ///////////..utility classes../////////// */\n\n.container {\n  max-width: 1200px;\n  width: 90%;\n  margin: auto;\n}\n\n.btn {\n  display: inline-block;\n  padding: 0.5em 1.5em;\n  text-decoration: none;\n  border-radius: 50px;\n  cursor: pointer;\n  outline: none;\n  margin-top: 1em;\n  text-transform: uppercase;\n  font-weight: small;\n}\n\n.btn-primary {\n  color: #fff;\n  background: #16a083;\n}\n\n.btn-primary:hover {\n  background: #117964;\n}\n/*navbar*/\n/* ............//// Showcase styling ////......... */\n\n.showcase-area {\n  height:35vh;\n  width: 1500px;\n  background: linear-gradient(\n      rgba(240, 240, 240, 0.144),\n      rgba(255, 255, 255, 0.336)\n    ),\n    url("https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food-2048x1366.jpg");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.showcase-container {\n  display:inline-block;\n  flex-direction: row;\n  align-items: left;\njustify-content: center;\n  height: 100%;\n  font-size: 1.6rem;\n}\n#home\n{\n  font-size:large;\n  font-family: \'Courier New\', Courier, monospace;\n}\n\nform{\n    position: relative;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    transition: all 1s;\n    width: 50px;\n    height: 50px;\n    background: white;\n    box-sizing: border-box;\n    border-radius: 25px;\n    border: 4px solid white;\n    padding: 5px;\n}\n\ninput{\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;;\n    height: 42.5px;\n    line-height: 30px;\n    outline: 0;\n    border: 0;\n    display: none;\n    font-size: 1em;\n    border-radius: 20px;\n    padding: 0 20px;\n}\n\n.fa{\n    box-sizing: border-box;\n    padding: 10px;\n    width: 42.5px;\n    height: 42.5px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    border-radius: 50%;\n    color: #07051a;\n    text-align: center;\n    font-size: 1.2em;\n    transition: all 1s;\n}\n\nform:hover input,\nform:valid{\n    width: 200px;\n    cursor: pointer;\n}\n\nform:hover input,\nform:valid input{\n    display: block;\n}\n\nform:hover .fa,\nform:valid .fa{\n    background: #07051a;\n}\n\n\na {\n  display: none;\n  position: absolute;\n  top: 70px;\n  bottom:0;\n  left: 0;\n  right: 0;\n  font-size: 20px;\n  color: rgb(107, 94, 94);\n  text-align: center; \n  width: 100%;\n}\n\nform:valid a {\n  display: block;\n}\n\n/* ......//about us//...... */\n\n#about {\n  padding: 50px 0;\n  background-color: #f5f5f7;\n}\n\n.about-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n#about h2 {\n  font-size: 2.3rem;\n}\n\n#about p {\n  font-size: 1.2rem;\n  color: #555;\n}\n\n#about .small {\n  font-size: 1.2rem;\n  color: #666;\n  font-weight: 600;\n}\n\n.about-img {\n  flex: 1 1 400px;\n  padding: 30px;\n  transform: translateX(150%);\n  animation: about-img-animation 1s ease-in-out forwards;\n}\n\n@keyframes about-img-animation {\n  100% {\n    transform: translate(0);\n  }\n}\n\n.about-text {\n  flex: 1 1 400px;\n  padding: 30px;\n  margin: auto;\n  transform: translate(-150%);\n  animation: about-text-animation 1s ease-in-out forwards;\n}\n\n@keyframes about-text-animation {\n  100% {\n    transform: translate(0);\n  }\n}\n\n.about-img img {\n  display: block;\n  height: 400px;\n  max-width: 100%;\n  margin: auto;\n  object-fit: cover;\n  object-position: right;\n  background-color: #fff;\n}\n/* ..........////Food category///........... */\n\n#food {\n  padding: 5rem 0 10rem 0;\n}\n\n#food h2 {\n  text-align: center;\n  font-size: 2.5rem;\n  font-weight: 400;\n  margin-bottom: 40px;\n  text-transform: uppercase;\n}\n\n.food-container {\n  display: flex;\n  justify-content: space-between;\n  background-color: #f5f5f7;\n}\n\n.food-container img {\n  display: block;\n  width: 100%;\n  margin: auto;\n  max-height: 300px;\n  object-fit: cover;\n  object-position: center;\n}\n\n.img-container {\n  margin: 0 1rem;\n  position: relative;\n}\n\n.img-content {\n  position: absolute;\n  top: 70%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  z-index: 2;\n  text-align: center;\n  transition: all 0.3s ease-in-out 0.1s;\n}\n\n.img-content h3 {\n  color: #fff;\n  font-size: 2.2rem;\n}\n\n.img-content a {\n  font-size: 1.2rem;\n}\n\n.img-container::after {\n  content: "";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.871);\n  opacity: 0;\n  z-index: 1;\n\n  transform: scaleY(0);\n  transform-origin: 100% 100%;\n  transition: all 0.3s ease-in-out;\n}\n\n.img-container:hover::after {\n  opacity: 1;\n  transform: scaleY(1);\n}\n\n.img-container:hover .img-content {\n  opacity: 1;\n  top: 40%;\n}\n\n/* .........../Food Menu/............ */\n\n.food-menu-heading {\n  text-align: center;\n  font-size: 3.4rem;\n  font-weight: 400;\n  color:#000;\n}\n\n.food-menu-container {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 50px 0px 30px 0px;\n}\n\n.food-menu-container img {\n  display: block;\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  object-fit: cover;\n  object-position: center;\n}\n\n.food-menu-item {\n  display: flex;\n  flex: 1 1 600px;\n  justify-content: space-evenly;\n  margin-bottom: 3rem;\n}\n\n.food-description {\n  margin: auto 1.5rem;\n}\n\n.food-title {\n  font-size: 1.8rem;\n  font-weight: 400;\n  color: #444;\n}\n\n.food-description p {\n  font-size: 1.4rem;\n  color: #555;\n  font-weight: 500;\n}\n\n.food-description .food-price {\n  color: #504a4c;\n  font-weight: 700;\n}\n.food-menu-item\n{\n  color:#000;\n  font-size: medium;\n  font-style: italic;\n font-display:flex;\n}\n.food-menu-items li\n{\n  color:#000;\n  font-size: medium;\n  font-style: italic;\n font-display:flex;\n}\n/* ........ Contact Us........... */\n\n#contact {\n  padding: 5rem 0;\n  background: rgb(226, 226, 226);\n}\n\n.contact-container {\n  display: flex;\n  background: #fff;\n}\n\n.contact-img {\n  width: 50%;\n}\n\n.contact-img img {\n  display: block;\n  height: 400px;\n  width: 100%;\n  object-position: center;\n  object-fit: cover;\n}\n\n.form-container {\n  padding: 1rem;\n  width: 50%;\n  margin: auto;\n}\n\n.form-container input {\n  display: block;\n  width: 100%;\n  border: none;\n  border-bottom: 2px solid #ddd;\n  padding: 1rem 0;\n  box-shadow: none;\n  outline: none;\n  margin-bottom: 1rem;\n  color: #444;\n  font-weight: 500;\n}\n\n.form-container textarea {\n  display: block;\n  width: 100%;\n  border: none;\n  border-bottom: 2px solid #ddd;\n  color: #444;\n  outline: none;\n  padding: 1rem 0;\n  resize: none;\n}\n\n.form-container h2 {\n  font-size: 2.7rem;\n  font-weight: 500;\n  color: #444;\n  margin-bottom: 1rem;\n  margin-top: -1.2rem;\n}\n\n.form-container a {\n  font-size: 1.3rem;\n}\n\n#footer h2 {\n  text-align: center;\n  font-size: 1.8rem;\n  padding: 2.6rem;\n  font-weight: 500;\n  color: #fff;\n  background: rgb(65, 65, 65);\n}\n#submit\n{\n  font-size: medium;\n  background-color: #ddd;\n  color:#666;\n  font-style: italic;\n}\n/* ......../ media query /.......... */\n\n@media (max-width: 768px) {\n  .navbar {\n    font-size: medium;\n    color:#000;\n  }\n  .logo {\n    position: absolute;\n    top: 5px;\n    right: 15px;\n    font-size: 2rem;\n  }\n  /* ......./ food /......... */\n\n  .food-container {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .food-type:not(:last-child) {\n    margin-bottom: 3rem;\n  }\n\n  .food-type {\n    box-shadow: 5px 5px 10px 0 #805f5f;\n  }\n\n  .img-container {\n    margin: 0;\n  }\n}\n\n@media (max-width: 500px) {\n  html {\n    font-size: 65%;\n  }\n\n  .navbar-nav.menu-items li{\n      font-size: 1.6rem;\n  }\n  .food-menu-container img {\n    margin: auto;\n  }\n\n  .food-menu-item {\n    flex-direction: column;\n    text-align: center;\n  }\n.food-description\n{\n  display: flexbox;\n  text-align: justify;\n color:#000;\n}\n\n  .form-container {\n    width: 90%;\n  }\n\n  .contact-container {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .contact-img {\n    width: 90%;\n    margin: 3rem auto;\n  }\n\n  .logo {\n    position: absolute;\n    top: 06px;\n    right: 15px;\n    font-size: 3rem;\n    font-style: oblique;\n    font-display:inherit;\n    flex-direction: row;\n  }\n}\n\n@media (min-width: 769px) and (max-width: 1200px) {\n  .img-container h3 {\n    font-size: 1.5rem;\n  }\n\n  .img-container .btn {\n    font-size: 0.7rem;\n  }\n}\n\n@media (orientation: landscape) and (max-height: 500px) {\n  .showcase-area {\n    height: 50vmax;\n  }\n}\n '
    }}
  />
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="styles.css2.css" />
  <h1>USER APP</h1>
  {/* Nav tabs */}
  <nav>
    <aside>
      <ul className="menu">
        <li>
          <a
            href="#file:///C:/Users/Apex%20informatics/OneDrive/Documents/Desktop/ReactApp/.vscode/React-course/components/login-page.html"
            id="active"
          >
            Login
          </a>
        </li>
        <li>
          <a data-bs-target="#home">Home</a>
        </li>
        <li>
          <a href="#Categories.html">Categories</a>
        </li>
        <li>
          <a href="#">Menu-Items</a>
        </li>
        <li>
          <a href="#">Order-placement</a>
        </li>
        <li></li>
        <li>
          <a href="#file:///C:/Users/Apex%20informatics/OneDrive/Documents/Desktop/ReactApp/.vscode/React-course/components/Register.html">
            Register
          </a>
        </li>
      </ul>
    </aside>
  </nav>
  <section className="showcase-area" id="showcase">
    <div className="showcase-container">
      <h1 className="main-title" id="home">
        Let food be the medicine and medicine be the food.
      </h1>
    </div>
  </section>
  <section id="about">
    <div className="about-wrapper container">
      <div className="about-text">
        <p className="small">About Us</p>
        <h2>There is no love greater than the love of food.</h2>
        <p>
          We provide you the most delicious and healthy food with alittle bit of
          twists and turns which will make you experience the best food :)
        </p>
      </div>
    </div>
  </section>
  <div className="about-img">
    <img src="https://wallpapercave.com/wp/wp3724325.jpg" alt="food" />
  </div>
  <section id="food">
    <h2>Food according to mood</h2>
    <div className="food-container container">
      <div className="food-type Breakfast">
        <div className="img-container">
          <img src="https://wallpapercave.com/wp/wp1913073.jpg" alt="error" />
          <div className="img-content">
            <a
              href="file:///C:/Users/Apex%20informatics/OneDrive/Documents/Desktop/ReactApp/.vscode/React-course/components/NPR2.html"
              className="btn btn-secondary"
            >
              Diet
            </a>
          </div>
        </div>
      </div>
      <div className="food-type Lunch">
        <div className="img-container">
          <img src="https://wallpaperaccess.com/full/1843937.jpg" alt="error" />
          <div className="img-content">
            <a
              href="file:///C:/Users/Apex%20informatics/OneDrive/Documents/Desktop/Food/NPR3.html"
              className="btn btn-secondary"
            >
              Feast
            </a>
          </div>
        </div>
      </div>
      <div className="food-type grin">
        <div className="img-container">
          <img
            src="https://communities.dmcihomes.com/wp-content/uploads/2014/02/dinner-date.jpg"
            alt="error"
          />
          <div className="img-content">
            <a
              href="file:///C:/Users/Apex%20informatics/OneDrive/Documents/Desktop/Food/NPR.html"
              className="btn btn-secondary"
              target="blank"
            >
              Party
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="food-menu">
    <h2 className="food-menu-heading">Food Menu</h2>
    <div className="food-menu-container container">
      <div className="food-menu-item">
        <div className="food-img">
          <img src="https://i.postimg.cc/wTLMsvSQ/food-menu1.jpg" alt="" />
        </div>
        <div className="food-description">
          <h2 className="food-title">
            <a href="www.google.com">Italian</a>
          </h2>
          <style
            dangerouslySetInnerHTML={{
              __html:
                " \n            .food-title a{\n              color:black;\n            }\n            "
            }}
          />
          <p>
            Italian cuisine includes deeply rooted traditions common to the
            whole country, as well as all the regional gastronomies, different
            from each other, especially between the north, the centre and the
            south of Italy, which are in continuous exchange.
          </p>
        </div>
      </div>
      <div className="food-menu-container container">
        <div className="food-menu-item">
          <div className="food-img">
            <img src="https://i.postimg.cc/sgzXPzzd/food-menu2.jpg" alt="" />
          </div>
          <div className="food-description">
            <h2 className="food-title">
              <a href="www.goggle.com">Chinese</a>
            </h2>
            <p>
              Chinese cuisine comprises cuisines originating from China, as well
              as from Chinese people from other parts of the world
            </p>
          </div>
        </div>
        <div className="food-menu-item">
          <div className="food-img">
            <img src="https://i.postimg.cc/8zbCtYkF/food-menu3.jpg" alt="" />
          </div>
          <div className="food-description">
            <h2 className="food-titile">
              <a href="file:///C:/Users/Apex%20informatics/OneDrive/Documents/Desktop/Food/NPR2.html">
                Indian
              </a>
            </h2>
            <p>
              Indian food is also heavily influenced by religion, in particular
              Hinduism and Islam, cultural choices and traditions.
            </p>
          </div>
        </div>
        <div className="food-menu-item">
          <div className="food-img">
            <img src="https://i.postimg.cc/Yq98p5Z7/food-menu4.jpg" alt="" />
          </div>
          <div className="food-description">
            <h2 className="food-titile">
              <a href="www.goggle.com">Thai</a>
            </h2>
            <p>
              Thai cooking places emphasis on lightly prepared dishes with
              strong aromatic components and a spicy edge.
            </p>
          </div>
        </div>
        <div className="food-menu-item">
          <div className="food-img">
            <img src="https://i.postimg.cc/KYnDqxkP/food-menu5.jpg" alt="" />
          </div>
          <div className="food-description">
            <h2 className="food-titile">
              <a href="www.google.com">Japnese</a>
            </h2>
            <p>
              Japanese cuisine encompasses the regional and traditional foods of
              Japan, which have developed through centuries of political,
              economic, and social changes.
            </p>
          </div>
        </div>
        <div className="food-menu-item">
          <div className="food-img">
            <img src="https://i.postimg.cc/Jnxc8xQt/food-menu6.jpg" alt="" />
          </div>
          <div className="food-description">
            <h2 className="food-title">
              <a href="www.goggle.com">French</a>
            </h2>
            <p>
              French cuisine is the cooking traditions and practices from
              France. In the 14th century, Guillaume Tirel, a court chef known
              as "Taillevent", wrote Le Viandier, one of the earliest recipe
              collections of medieval France
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact">
    <div className="contact-container container">
      <div className="contact-img">
        <img src="https://i.postimg.cc/1XvYM67V/restraunt2.jpg" alt="" />
      </div>
    </div>
  </section>
  {/* 
    .................../ JS Code for smooth scrolling /...................... */}
</>
