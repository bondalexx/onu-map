import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../auth/useAuth";

import users from "../../assets/images/svg/users.svg";
import photo from "../../assets/images/photo.png";
import feedback from "../../assets/images/svg/feedback.svg";
import buildings from "../../assets/images/svg/buildings.svg";
import departaments from "../../assets/images/svg/departaments.svg";
import departamentType from "../../assets/images/svg/departamentTypes.svg";
import map from "../../assets/images/svg/map.svg";
import bell from "../../assets/images/svg/bell.svg";
import usersWhite from "../../assets/images/svg/usersWhite.svg";
import feedbackWhite from "../../assets/images/svg/feedbackWhite.svg";
import buildingsWhite from "../../assets/images/svg/buildingsWhite.svg";
import departamentsWhite from "../../assets/images/svg/departamentsWhite.svg";
import departamentTypeWhite from "../../assets/images/svg/departamentTypesWhite.svg";
import mapWhite from "../../assets/images/svg/mapWhite.svg";
import "../../assets/css/AdminPage.css";

const AdminPage = () => {
  const navigate = useNavigate();

  const [adminActiveTab, setAdminActiveTab] = useState(
    JSON.parse(window.localStorage.getItem("adminActiveTab"))
  );
  const changeAdminActiveTab = (tabId) => {
    setAdminActiveTab(tabId);
    window.localStorage.setItem("adminActiveTab", JSON.stringify(tabId));
  };
  const { auth } = useAuth();
  return (
    <div className="w-[100%] h-[100%]">
      <div className=" h-[100%] flex flex-col relative w-full gap-[20px]">
        <div className="h-[86px] bg-[white] relative w-full ">
          <div className="h-full w-[calc(100%-338px)] absolute top-0 left-[338px] flex justify-between items-center pr-[50px] ">
            <div className="flex gap-[8px] cursor-pointer">
              <img src={photo} className="h-[66px]" />
              <div className="flex flex-col justify-start gap-[5px]">
                <div className="h-[16px] flex justify-end items-center">
                  <span className="  text-[16px] bg-[#F5E2E2] px-[10px] rounded-[20px] ">
                    super admin
                  </span>
                </div>
                <p className="text-[20px] font-[500]"> {auth?.user?.name}</p>
              </div>
            </div>
            <img src={bell} />
          </div>
        </div>
        <div className="absolute left-0 h-full ">
          <div className="h-full relative flex flex-col justify-center  rounded-r-[40px] w-[270px] bg-[#5294A6]">
            <div className="w-full flex flex-col gap-[17px] items-end">
              <div
                className={`w-[calc(100%-15px)] cursor-pointer flex ${
                  adminActiveTab === 1 ? "bg-[#fff] rounded-l-[30px]" : ""
                } justify-start pl-[20px] items-center gap-[34px]`}
                onClick={() => {
                  changeAdminActiveTab(1);
                  navigate("users");
                }}
              >
                <img
                  src={adminActiveTab === 1 ? users : usersWhite}
                  className="w-[30px] h-[30px]"
                />
                <p
                  className={`text-[20px] ${
                    adminActiveTab === 1 ? "text-[black]" : "text-[white]"
                  }`}
                >
                  Користувачі
                </p>
              </div>
              <div
                className={` ${
                  adminActiveTab === 2 ? "bg-[#fff] rounded-l-[30px]" : ""
                } w-[calc(100%-15px)] cursor-pointer flex justify-start pl-[20px] items-center gap-[34px]`}
                onClick={() => {
                  changeAdminActiveTab(2);
                  navigate("feedback");
                }}
              >
                <img
                  src={adminActiveTab === 2 ? feedback : feedbackWhite}
                  className="w-[30px] h-[30px]"
                />
                <p
                  className={`text-[20px] ${
                    adminActiveTab === 2 ? "text-[black]" : "text-[white]"
                  }`}
                >
                  Зворотній зв’язок
                </p>
              </div>
              <div
                className={` ${
                  adminActiveTab === 3 ? "bg-[#fff] rounded-l-[30px]" : ""
                } w-[calc(100%-15px)] cursor-pointer flex justify-start pl-[20px] items-center gap-[34px]`}
                onClick={() => {
                  changeAdminActiveTab(3);
                  navigate("buildings");
                }}
              >
                <img
                  src={adminActiveTab === 3 ? buildings : buildingsWhite}
                  className="w-[30px] h-[30px]"
                />
                <p
                  className={`text-[20px] ${
                    adminActiveTab === 3 ? "text-[black]" : "text-[white]"
                  }`}
                >
                  Корпуси
                </p>
              </div>
              <div
                className={` ${
                  adminActiveTab === 4 ? "bg-[#fff] rounded-l-[30px]" : ""
                } w-[calc(100%-15px)] cursor-pointer flex justify-start pl-[20px] items-center gap-[34px]`}
                onClick={() => {
                  changeAdminActiveTab(4);
                  navigate("departaments");
                }}
              >
                <img
                  src={adminActiveTab === 4 ? departaments : departamentsWhite}
                  className="w-[30px] h-[30px]"
                />
                <p
                  className={`text-[20px] ${
                    adminActiveTab === 4 ? "text-[black]" : "text-[white]"
                  }`}
                >
                  Відділи
                </p>
              </div>
              <div
                className={` ${
                  adminActiveTab === 5 ? "bg-[#fff] rounded-l-[30px]" : ""
                } w-[calc(100%-15px)] cursor-pointer flex justify-start pl-[20px] items-center gap-[34px]`}
                onClick={() => {
                  changeAdminActiveTab(5);
                  navigate("departamentTypes");
                }}
              >
                <img
                  src={
                    adminActiveTab === 5
                      ? departamentType
                      : departamentTypeWhite
                  }
                  className="w-[30px] h-[30px]"
                />
                <p
                  className={`text-[20px] ${
                    adminActiveTab === 5 ? "text-[black]" : "text-[white]"
                  }`}
                >
                  Типи відділів
                </p>
              </div>
              <div
                className={` ${
                  adminActiveTab === 6 ? "bg-[#fff] rounded-l-[30px]" : ""
                } w-[calc(100%-15px)] cursor-pointer flex justify-start pl-[20px] items-center gap-[34px]`}
                onClick={() => {
                  changeAdminActiveTab(6);
                  navigate("map");
                }}
              >
                <img
                  src={adminActiveTab === 6 ? map : mapWhite}
                  className="w-[30px] h-[30px]"
                />
                <p
                  className={`text-[20px] ${
                    adminActiveTab === 6 ? "text-[black]" : "text-[white]"
                  }`}
                >
                  Карта
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-avaliable w-[calc(100%-295px)] ml-[295px] flex justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
