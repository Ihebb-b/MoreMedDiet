import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, NavLink } from "react-router-dom";
import axios from "axios";
import "./Index.css";
import { Modal, Button } from "react-bootstrap";

//import Global from "../../util/Global";

// const useTranslation = React.lazy(() => import("react-i18next"));
//const CART_URL = Global.baseurl+"/GIPP_Symfony_MarketPlace/public/index.php/panier/showall";
//const CART_URL2 = Global.baseurl+"/GIPP_Symfony_MarketPlace/public/index.php/panierEquipement/showallInPanier";
export default function Navbar({ page, inscription }) {
  // const [selectedLanguage, setSelectedLanguage] = useState('fr'); // Default language: French
  const [menuOpen, setMenuOpen] = useState(false);
  const [buttonClick, setButtonClick] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [tel, setTel] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault(); // Empêche le rechargement de la page par défaut du formulaire
    if (
      email == "" ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      setMessage("Vérifier votre email");
    } else if (tel == "") {
      setMessage("Le numéro de téléphone est obligatoire");
    } else if (!/^[0-9]+$/.test(tel) || tel.length < 8) {
      setMessage("Le numéro de téléphone est invalide");
    } else if (password == "") {
      setMessage("Le mot de passe est invalide");
    } else if (password.length < 8) {
      setMessage("Le mot de passe doit contenir au moins 8 caractères");
    } else if (!/[0-9]/.test(password)) {
      setMessage("Le mot de passe doit contenir au moins un chiffre");
    } else if (!/[A-Z]/.test(password)) {
      setMessage("Le mot de passe doit contenir au moins une lettre majuscule");
    } else if (!/[a-z]/.test(password)) {
      setMessage("Le mot de passe doit contenir au moins une lettre minuscule");
    } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
      setMessage("Le mot de passe doit contenir au moins un symbole");
    } else {
      navigate("/");
    }
  }

  function handleSubmitLogin(event) {
    event.preventDefault(); // Empêche le rechargement de la page par défaut du formulaire
    if (
      email == "" ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      setMessage("Vérifier votre email");
    } else if (tel == "") {
      setMessage("Le numéro de téléphone est obligatoire");
    } else if (!/^[0-9]+$/.test(tel) || tel.length < 8) {
      setMessage("Le numéro de téléphone est invalide");
    } else if (password == "") {
      setMessage("Le mot de passe est invalide");
    } else if (password.length < 8) {
      setMessage("Le mot de passe doit contenir au moins 8 caractères");
    } else if (!/[0-9]/.test(password)) {
      setMessage("Le mot de passe doit contenir au moins un chiffre");
    } else if (!/[A-Z]/.test(password)) {
      setMessage("Le mot de passe doit contenir au moins une lettre majuscule");
    } else if (!/[a-z]/.test(password)) {
      setMessage("Le mot de passe doit contenir au moins une lettre minuscule");
    } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
      setMessage("Le mot de passe doit contenir au moins un symbole");
    } else {
      navigate("/");
    }
  }
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  let button;
  //password
  if (password) {
    if (passwordIsVisible) {
      button = (
        <span style={{ textAlign: "right" }}>
          <i
            type="button"
            onClick={() => setPasswordIsVisible(!passwordIsVisible)}
            className="fa fa-eye icon-eye"
            id="eye-icon"
            style={{ fontSize: "13.2px" }}
          >
            {" "}
            Show
          </i>{" "}
        </span>
      );
    } else {
      button = (
        <span>
          <i
            type="button"
            onClick={() => setPasswordIsVisible(!passwordIsVisible)}
            className="fa fa-eye-slash icon-eye"
            id="eye-icon"
            style={{ fontSize: "13.2px" }}
          >
            {" "}
            Hide
          </i>{" "}
        </span>
      );
    }
  }
  const [show, setShow] = useState(false);
  const [showL, setShowL] = useState(false);

  const [showEmail, setShowEmail] = useState(false);
  const handleClose = () => {
    setShow(false);
    setButtonClick("");
    setShowEmail(false);
    setMessage("");
    setEmail("");
    setTel("");
    setPassword("");
  };
  const handleCloseL = () => {
    setShow(false);
    setShowL(true);
    setButtonClick(1);
    setShowEmail(false);
    setMessage("");
    setEmail("");
    setTel("");
    setPassword("");
  };
  const handleCloseUp = () => {
    setShowL(false);
    setShow(true);
    setButtonClick(0);
    setShowEmail(false);
    setMessage("");
    setEmail("");
    setPassword("");
    setTel("");
  };

  const handleCloseLog = () => {
    setShowL(false);
    setButtonClick("");
    setMessage("");
    setEmail("");
    setPassword("");
  };

  const handleShow = () => {
    setShow(true);
    document.body.classList.toggle("modal-open");
  };
  const handleShowL = () => {
    setShowL(true);
    document.body.classList.toggle("modal-open");
  };
  useEffect(() => {
    if (inscription == true) {
      setShow(true);
      setButtonClick(0);
      document.body.classList.toggle("modal-open");
    }
  }, [inscription]);
  return (
    <>
      <nav id="menu" class="mega-menu">
        <div class="">
          <div class="row">
            <div class="col-lg-12 col-md-12 ">
              <ul class="menu-logo">
                <Link to="/" className="title" >
                  <img
                    src="../../assets/images/logo.png" // Replace with the actual path to your logo image
                    alt="MMD Statistica Logo"
                    style={{ width: "40px", height: "40px", marginLeft:"2px"  }} // Adjust width, height, and spacing as needed
                  />
                  <span
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "Ebrima",
                    }}
                  >
                    MMD Statistica
                  </span>
                </Link>
              </ul>
              <div
                className="menu"
                style={{ cursor: "pointer" }}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span style={{ background: "white" }}></span>
                <span style={{ background: "white" }}></span>
                <span style={{ background: "white" }}></span>
              </div>

              <div
                class=" "
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "25px",
                }}
              >
                <ul
                  className={menuOpen ? "open" : "noOpen"}
                  style={{ flex: 1 }}
                >
                  <li>
                    <NavLink
                      to="#"
                      style={{ color: page === "billet" ? "#46CDD0" : "white" }}
                    >
                      Statistics &#x25BE;
                    </NavLink>

                    <ul class="dropdown">
                      <li>
                        <NavLink
                          to="/filter"
                          style={{
                            color: page === "filter" ? "#46CDD0" : "black",
                          }}
                        >
                          Reports
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/categories"
                          style={{
                            color: page === "categories" ? "#46CDD0" : "black",
                          }}
                        >
                          Forum
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink
                      to="/marketplace"
                      style={{
                        color: page === "marketplace" ? "#46CDD0" : "white",
                      }}
                    >
                      Newest
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/apropos"
                      style={{
                        color: page === "billetCollectif" ? "#46CDD0" : "white",
                      }}
                    >
                      About
                    </NavLink>
                  </li>

                  <li>
                    {/* <div id="search-wrapper">

 <i class="search-icon fa fa-search"></i>

<input type="text" id="search" placeholder="Search for recipes..."/> 


</div> */}
                  </li>
                </ul>

                <div style={{ display: "flex", gap: "15px" }}>
                  {localStorage.getItem("id") == null && (
                    <>


                      <NavLink
                        className={
                          buttonClick === 0 ? "button11-border white" : ""
                        }
                        style={{
                          padding: "7px 10px",
                          color: "white",
                          borderRadius: "50px",
                          background: buttonClick === 0 ? "#46CDD0" : "",
                        }}
                        onClick={() => {
                          setButtonClick(0);
                          handleShow();
                        }}
                      >
                        Inscription
                      </NavLink>



                      <NavLink
                        className={
                          buttonClick === 1 ? "button11-border white" : ""
                        }
                        style={{
                          padding: "7px 10px",
                          color: "white",
                          borderRadius: "50px",
                          background: buttonClick === 1 ? "#46CDD0" : "",
                        }}
                        onClick={() => {
                          setButtonClick(1);
                          handleShowL();
                        }}
                      >
                        Connexion
                      </NavLink>
                    </>
                  )}
                  {localStorage.getItem("id") != null && (
                    <>

                      <div
                        class="shpping-cart"
                        onClick={() => {
                          navigate("/cart");
                        }}
                        style={{
                          color: page === "cart" ? "#46CDD0" : "white",
                          marginLeft: "30px",
                          cursor: "pointer",
                        }}
                      >

                        <i
                          class="fa fa-shopping-cart "
                          style={{ fontSize: "18px" }}
                        ></i>
                        <strong
                          class=""
                          style={{
                            position: "absolute",
                            marginTop: "-5px",
                            left: "auto",
                            fontSize: "11px",
                            color: "#ffffff",
                            width: "17px",
                            height: "17px",
                            lineHeight: "18px",
                            textAlign: "center",
                            backgroundColor: "red",
                            borderRadius: "50%",
                          }}
                        >

                          {!localStorage.getItem("cart") && <span>0</span>}
                          {localStorage.getItem("cart") && <span>3</span>}
                        </strong>
                      </div>


                      <div
                        class="shpping-cart"
                        onClick={() => {
                          navigate("/profile");
                        }}
                        style={{
                          color: page === "profile" ? "#46CDD0" : "white",
                          marginLeft: "30px",
                          cursor: "pointer",
                        }}
                      >

                        <i
                          class="fa fa-solid fa-user "
                          style={{ fontSize: "20px" }}
                        ></i>
                      </div>


                      <li className="mt-2">
                        <div
                          class="shpping-cart"
                          onClick={() => {
                            navigate("/dashboard");
                          }}
                          style={{
                            color: page === "dashboard" ? "#46CDD0" : "white",
                            marginLeft: "30px",
                            cursor: "pointer",
                          }}
                        >
                          <div class="">
                            {" "}
                            <i
                              class="material-icons dashboard"
                              style={{ fontSize: "22px" }}
                            >
                              &#xe871;
                            </i>
                          </div>
                        </div>
                      </li>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
        <Modal.Header closeButton className="custom-modal-header">
          {showEmail && (
            <span
              onClick={() => {
                setShowEmail(false);
                setMessage("");
                setEmail("");
                setTel("");
                setPassword("");
              }}
              style={{
                fontSize: "16px",
                color: "#46CDD0",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              <i class="fa fa-arrow-left"></i> Back
            </span>
          )}
          <Modal.Title> Explore The World Of NTF</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            Create an account
          </div>
          {!showEmail && (
            <>
              <div class="google-btn">
                <img
                  src="https://i.ibb.co/rZSWq0s/icons8-google-48.png"
                  alt="icons-google"
                />
                <p style={{ paddingTop: "6px" }}>Continue with Google</p>
              </div>
              <div class="facebook-btn">
                <img
                  src={require("../../assets/images/fb.png")}
                  style={{ height: "33px" }}
                  alt="icons-fb"
                />
                <p style={{ paddingTop: "6px" }}>Continue with Facebook</p>
              </div>
              <div class="apple-btn">
                <img
                  src={require("../../assets/images/apple.png")}
                  style={{ height: "27px" }}
                  alt="icons-apple"
                />
                <p style={{ paddingTop: "6px" }}>Continue with apple</p>
              </div>
              <hr />
              <div class="or">or</div>

              <div class="submit-btn">
                <button
                  type="submit"
                  value="register"
                  class="sign-up-btn"
                  onClick={() => {
                    setShowEmail(true);
                  }}
                >
                  Sign up with email
                </button>
              </div>
              <div
                style={{
                  marginTop: "0px",
                  marginBottom: "20px",
                  textAlign: "center",
                  fontSize: "12px",
                }}
              >
                By creating an account, I agree to NFT's Terms of
                Service,Privacy Policy and Intellectual Property Rights
              </div>

              <div
                style={{
                  marginTop: "0px",
                  marginBottom: "20px",
                  textAlign: "center",
                  fontSize: "13px",
                }}
              >
                Already have an account?{" "}
                <span
                  style={{
                    color: "#46CDD0",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleCloseL();
                  }}
                >
                  Log in
                </span>
              </div>
            </>
          )}
          {showEmail && (
            <form
              encType="multipart/form-data"
              class="form-border mt-20"
              onSubmit={handleSubmit}
            >
              {message != "ok" && message != "" && (
                <>
                  <p
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                    class="mb-30"
                  >
                    {" "}
                    <i
                      class="fa fa-exclamation-triangle "
                      style={{ fontSize: "16px" }}
                    >
                      {" "}
                    </i>{" "}
                    {message}{" "}
                  </p>
                </>
              )}
              <div class="section-field mb-20">
                <label class="mb-10" for="name" style={{ color: "black" }}>
                  Email <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <input
                  id="email"
                  className="input-field web form-control"
                  type="email"
                  value={email}
                  style={{ borderRadius: "20px", border: "1px solid black" }}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemple@gmail.com"
                  name="email"
                  required
                />
              </div>
              <div class="section-field mb-20">
                <label class="mb-10" for="name" style={{ color: "black" }}>
                  Phone <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <input
                  id="tel"
                  className="input-field web form-control"
                  type="tel"
                  value={tel}
                  style={{ borderRadius: "20px", border: "1px solid black" }}
                  onChange={(e) => setTel(e.target.value)}
                  placeholder="12345678"
                  name="tel"
                  required
                />
              </div>
              <div class="section-field mb-20">
                <div class="row">
                  <div class="col-10">
                    <label
                      class="mb-10"
                      for="Password"
                      style={{ color: "black" }}
                    >
                      Password <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div class="col-2">{button}</div>
                </div>
                <div className=" input-container1 section-field ">
                  <input
                    id="password"
                    style={{ borderRadius: "20px", border: "1px solid black" }}
                    className=" input-field Password form-control"
                    placeholder="*********"
                    name="password"
                    value={password}
                    pattern=".{6,}"
                    title="Le mot de passe doit contenir au moins 6 caractères."
                    onChange={(e) => setPassword(e.target.value)}
                    type={passwordIsVisible ? "text" : "password"}
                    required
                  />
                </div>{" "}
              </div>

              <div class="section-field">
                <div class="mb-30">
                  <label
                    class="mb-2"
                    for="two"
                    style={{ color: "red", textAlign: "left" }}
                  >
                    {" "}
                    (*) Required fields{" "}
                  </label>
                </div>
              </div>
              <div class="submit-btn">
                <button type="submit" value="register" class="sign-up-btn">
                  Sign up
                </button>
              </div>
              <div
                style={{
                  marginTop: "0px",
                  marginBottom: "20px",
                  textAlign: "center",
                  fontSize: "12px",
                }}
              >
                By creating an account, I agree to NFT's Terms of
                Service,Privacy Policy and Intellectual Property Rights
              </div>
              <div
                style={{
                  marginTop: "0px",
                  marginBottom: "20px",
                  textAlign: "center",
                  fontSize: "13px",
                }}
              >
                Already have an account?{" "}
                <span
                  style={{
                    color: "#46CDD0",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleCloseL();
                  }}
                >
                  Log in
                </span>
              </div>
            </form>
          )}
        </Modal.Body>
      </Modal>

      <Modal
        show={showL}
        onHide={handleCloseLog}
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton className="custom-modal-header">
          {showEmail && (
            <span
              onClick={() => {
                setShowEmail(false);
                setMessage("");
                setEmail("");
                setTel("");
                setPassword("");
              }}
              style={{
                fontSize: "16px",
                color: "#46CDD0",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              <i class="fa fa-arrow-left"></i> Back
            </span>
          )}
          <Modal.Title> Explore The World Of NTF</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            Welcome to NFT
          </div>
          {!showEmail && (
            <>
              <div class="google-btn">
                <img
                  src="https://i.ibb.co/rZSWq0s/icons8-google-48.png"
                  alt="icons-google"
                />
                <p style={{ paddingTop: "6px" }}>Continue with Google</p>
              </div>
              <div class="facebook-btn">
                <img
                  src={require("../../assets/images/fb.png")}
                  style={{ height: "33px" }}
                  alt="icons-fb"
                />
                <p style={{ paddingTop: "6px" }}>Continue with Facebook</p>
              </div>
              <div class="apple-btn">
                <img
                  src={require("../../assets/images/apple.png")}
                  style={{ height: "27px" }}
                  alt="icons-apple"
                />
                <p style={{ paddingTop: "6px" }}>Continue with apple</p>
              </div>
              <hr />
              <div class="or">or</div>

              <div class="submit-btn">
                <button
                  type="submit"
                  value="register"
                  class="sign-up-btn"
                  onClick={() => {
                    setShowEmail(true);
                  }}
                >
                  Log in with email
                </button>
              </div>
              <div
                style={{
                  marginTop: "0px",
                  marginBottom: "20px",
                  textAlign: "center",
                  fontSize: "12px",
                }}
              >
                By creating an account, I agree to NFT's Terms of
                Service,Privacy Policy and Intellectual Property Rights
              </div>

              <div
                style={{
                  marginTop: "0px",
                  marginBottom: "20px",
                  textAlign: "center",
                  fontSize: "13px",
                }}
              >
                Not a member?{" "}
                <span
                  style={{
                    color: "#46CDD0",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleCloseUp();
                  }}
                >
                  Sign up
                </span>
              </div>
            </>
          )}
          {showEmail && (
            <form
              encType="multipart/form-data"
              class="form-border mt-20"
              onSubmit={handleSubmitLogin}
            >
              {message != "ok" && message != "" && (
                <>
                  <p
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                    class="mb-30"
                  >
                    {" "}
                    <i
                      class="fa fa-exclamation-triangle "
                      style={{ fontSize: "16px" }}
                    >
                      {" "}
                    </i>{" "}
                    {message}{" "}
                  </p>
                </>
              )}
              <div class="section-field mb-20">
                <label class="mb-10" for="name" style={{ color: "black" }}>
                  Email <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <input
                  id="email"
                  className="input-field web form-control"
                  type="email"
                  value={email}
                  style={{ borderRadius: "20px", border: "1px solid black" }}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemple@gmail.com"
                  name="email"
                  required
                />
              </div>

              <div class="section-field mb-20">
                <div class="row">
                  <div class="col-10">
                    <label
                      class="mb-10"
                      for="Password"
                      style={{ color: "black" }}
                    >
                      Password <span style={{ color: "red" }}>*</span>{" "}
                    </label>
                  </div>
                  <div class="col-2">{button}</div>
                </div>
                <div className=" input-container1 section-field ">
                  <input
                    id="password"
                    style={{ borderRadius: "20px", border: "1px solid black" }}
                    className=" input-field Password form-control"
                    placeholder="*********"
                    name="password"
                    value={password}
                    pattern=".{6,}"
                    title="Le mot de passe doit contenir au moins 6 caractères."
                    onChange={(e) => setPassword(e.target.value)}
                    type={passwordIsVisible ? "text" : "password"}
                    required
                  />
                </div>{" "}
              </div>

              <div class="section-field">
                <div class="mb-30">
                  <label
                    class="mb-2"
                    for="two"
                    style={{ color: "red", textAlign: "left" }}
                  >
                    {" "}
                    (*) Required fields{" "}
                  </label>
                </div>
              </div>
              <div class="submit-btn">
                <button type="submit" value="register" class="sign-up-btn">
                  Log in
                </button>
              </div>
              <div
                style={{
                  marginTop: "0px",
                  marginBottom: "20px",
                  textAlign: "center",
                  fontSize: "12px",
                }}
              >
                By creating an account, I agree to NFT's Terms of
                Service,Privacy Policy and Intellectual Property Rights
              </div>
              <div
                style={{
                  marginTop: "0px",
                  marginBottom: "20px",
                  textAlign: "center",
                  fontSize: "13px",
                }}
              >
                Not a member?{" "}
                <span
                  style={{
                    color: "#46CDD0",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleCloseUp();
                  }}
                >
                  Sign up
                </span>
              </div>
            </form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
