import Home from "./routes/home/home.component";
import { UserContext } from "./contexts/user.context";
import { useContext } from "react";
import Shop from "./routes/shop/shop.component";
import { Routes, Route } from "react-router-dom";
import CheckOut from "./routes/checkout/checkout.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import NoAuthHome from "./routes/no-auth-home/no-auth-home.component";

const App = () => {

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
