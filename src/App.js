import Home from "./routes/home/home.component";
import { UserContext } from "./contexts/user.context";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import Shop from "./routes/shop/shop.component";
import { Routes, Route } from "react-router-dom";
import CheckOut from "./routes/checkout/checkout.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import NoAuthHome from "./routes/no-auth-home/no-auth-home.component";
import {  useEffect } from "react";
import { setCurrentUser } from "./store/user/user.action";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
    <Route path='/' element={<Navigation />}>
        {currentUser ? (<Route index element={<Home />} />) : (<Route index element={<NoAuthHome />} />)}
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element = {<CheckOut />}></Route>
    </Route>
    </Routes>
  );
};

export default App;
