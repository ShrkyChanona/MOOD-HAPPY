import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import userContext from "../context/UserContext";
import Home from "../components/pages/Home";
import Login from "../components/pages/SignIn";
import Register from "../components/pages/Register";
import Dynamics from "../components/pages/Dynamics";
import Activities from "../components/pages/Activities";
import Books from "../components/pages/Books";
import Cites from "../components/pages/Cites";

function App() {
    const [isUser, setIsUser] = useState({})
    return (
        <BrowserRouter>
            <userContext.Provider value={{isUser,setIsUser}}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Dynamics" element={<Dynamics />} />
                    <Route path="/Books" element={<Books />} />
                    <Route path="/Activities" element={<Activities />} />
                    <Route path="/Cites" element={<Cites />} />

                    {/* <Route path="/Cites" element={<Cites/>} /> */}
                    <Route path="/Sign In" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                </Routes>
            </userContext.Provider>
        </BrowserRouter>
    );
}

export default App;