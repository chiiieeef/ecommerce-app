import { Link, Outlet, useNavigate } from "react-router-dom";
import { Fragment, useContext } from "react";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const redirectUser = async () => {
    await signOutUser();
    navigate("/");
  }
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          {currentUser ? (
            <div>
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
              <span className="nav-link" onClick={redirectUser}>
                Sign Out
              </span>
            </div>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          {currentUser && <CartIcon />}
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
