import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import UsersPage from "./pages/UsersPage/UsersPage";
import { useNavigate } from "react-router-dom";
import BuildingPage from "./pages/BuildingPage/BuildingPage";
import { getBuildings } from "./helpers/helper";
import useLoadingState from "./helpers/state/buildingsLoading";
import AdminPage from "./pages/AdminPage/AdminPage";
import { ProvideAuth } from "./auth/authContext";

import Building from "./pages/Buildings/Building";
import LoginForm from "./pages/Components/LoginForm";

import "./App.css";
import porfile from "./assets/images/profile.png";
import PrivateRoute from "./auth/PrivateRoute";
import StartPage from "./pages/StartPage/StartPage";

function App() {
  const navigate = useNavigate();
  const [buildingsArr, setBuildingsArr] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState({});
  const { loading, setLoading } = useLoadingState();
  const [loginFormShow, setLoginFormShow] = useState(false);
  const [path, setPath] = useState("");

  useEffect(() => {
    getBuildings(setBuildingsArr, setLoading);
    setPath(window.location.pathname);
  }, []);
  useEffect(() => {
    window.localStorage.setItem("adminActiveTab", JSON.stringify(0));
  }, []);

  return (
    <div className="h-screen w-full relative bg-[#E8E8E8]">
      {path === "/gidonu_web/admin" && (
        <div
          className="flex flex-col items-center profile absolute  z-1 right-[10px] top-[10px] cursor-pointer"
          onClick={() => {
            setLoginFormShow(true);
          }}
        >
          <img src={porfile} alt="Profile" className="w-[22px] h-[22px]" />
          <p className="text-[13px]">Увійти</p>
        </div>
      )}

      {loginFormShow && <LoginForm setLoginFormShow={setLoginFormShow} />}

      <div className="w-full h-full">
        <ProvideAuth>
          <Routes>
            <Route
              path="/login"
              element={<LoginForm setLoginFormShow={setLoginFormShow} />}
            />
            <Route element={<PrivateRoute />}>
              <Route path="/gidonu_web/admin" element={<AdminPage />}>
                <Route path="users" element={<UsersPage />} />
                <Route
                  path="buildings"
                  element={
                    <BuildingPage
                      buildings={buildingsArr}
                      setBuildings={setBuildingsArr}
                      setSelectedBuilding={setSelectedBuilding}
                    />
                  }
                />
                <Route
                  path="building"
                  element={
                    <Building
                      selectedBuilding={selectedBuilding}
                      setSelectedBuilding={setSelectedBuilding}
                    />
                  }
                />
                <Route path="feedback" element={<> </>} />
                <Route path="departaments" element={<></>} />
                <Route path="departamentTypes" element={<></>} />
                <Route path="map" element={<></>} />
              </Route>
            </Route>
          </Routes>
        </ProvideAuth>
      </div>
    </div>
  );
}

export default App;
