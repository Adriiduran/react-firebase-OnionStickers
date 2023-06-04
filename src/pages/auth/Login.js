import { useState } from "react";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import { useSelector } from "react-redux";
import { selectPreviousURL } from "../../redux/slice/cartSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const previousURL = useSelector(selectPreviousURL);
  const navigate = useNavigate();

  const redirectUser = () => {
    if (previousURL.includes("cart")) {
      return navigate("/cart");
    }
    navigate("/");
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        setIsLoading(false);
        toast.success("Inicio de Sesión Correcto");
        redirectUser();
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error.message)
        let errorMessage = "Firebase: Error (auth/user-not-found).";
        if (error.message === errorMessage) {
          toast.error("Email o Contraseña incorrectos");
        } else {
          toast.error(error.message);
        }
      });
  };

  // Login with Gooogle
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setIsLoading(true);

    signInWithPopup(auth, provider)
      .then((result) => {
        setIsLoading(false);

        // const user = result.user;
        toast.success("Inicio de Sesión Correcto");
        redirectUser();
      })
      .catch((error) => {
        setIsLoading(false);
        let errorMessage = "Firebase: Error (auth/user-not-found)";
        if (error.message === errorMessage) {
          toast.error("Email o Contraseña incorrectos");
        } else {
          toast.error(error.message);
        }
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt="Login" width="400" />
        </div>

        <Card>
          <div className={styles.form}>
            <h2>Inicio de Sesión</h2>

            <form onSubmit={loginUser}>
              <input
                type="text"
                placeholder="Email"
                title="Ingrese un correo electrónico válido"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Contraseña"
                title="La contraseña debe tener al menos 6 caracteres"
                required
                value={password}
                minLength={6}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Iniciar Sesión
              </button>
              <div className={styles.links}>
                <Link to="/reset">Recordar Contraseña</Link>
              </div>
              <p>-- o --</p>
            </form>
            <button
              className="--btn --btn-danger --btn-block"
              onClick={signInWithGoogle}
            >
              <FaGoogle color="#fff" /> Continúa con Google
            </button>
            <span className={styles.register}>
              <p>Aún no tienes cuenta?</p>
              <Link to="/register">Regístrate</Link>
            </span>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Login;