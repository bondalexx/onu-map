import { getAllAdmins } from "../../helpers/helper";
import { useState, useEffect } from "react";
import CheckBox from "../Components/CheckBox";

import search from "../../assets/images/search.png";

const UsersPage = () => {
  const [admins, setAdmins] = useState([]);
  const [filteredAdmins, setFilteredAdmins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [switchStates, setSwitchStates] = useState({});
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    getAllAdmins(setAdmins, setLoading);
  }, []);
  const renderDate = (dateStr) => {
    const date = new Date(dateStr);
    const locale = "uk-UA";
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString(locale, options);
    const finalFormattedDate = formattedDate.replace(/,/g, "");
    return finalFormattedDate;
  };
  const handleSwitchChange = (childId, newSwitchState) => {
    setSwitchStates((prevSwitchStates) => ({
      ...prevSwitchStates,
      [childId]: newSwitchState,
    }));
  };
  useEffect(() => {
    if (admins) {
      setFilteredAdmins(admins);
    }
  }, [admins]);

  useEffect(() => {
    if (searchInput) {
      setFilteredAdmins(
        admins.filter(
          (admin) =>
            admin?.name?.toLowerCase().includes(searchInput.toLowerCase()) ||
            admin?.email?.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    } else {
      setFilteredAdmins(admins);
    }
  }, [searchInput]);
  return (
    <div className="flex flex-col w-[1150px]">
      <div className="w-full px-[12px] flex items-center justify-between mb-[30px]">
        <div className="relative">
          <img src={search} className="absolute top-[12px] right-[30px]" />
          <input
            placeholder={"Пошук"}
            onChange={(e) => {
              setSearchInput(e?.target?.value);
            }}
            className="w-[300px] outline-none bg-[#D3D3D3] text-[#292929] pl-[25px] h-[43px] rounded-[10px] pr-[50px]"
          />
        </div>
        <button></button>
      </div>
      <div className=" flex text-[24px] font-bold  h-[88px] border border-[#717171]">
        <div className="w-[34px] h-full border border-r-[#717171]"></div>
        <div className="w-[50px] h-full border border-r-[#717171] flex items-center justify-center">
          <p>№</p>
        </div>

        <div className="w-[200px] text-center h-full border border-r-[#717171] flex items-center justify-center">
          <p className=" ">Користувачі</p>
        </div>
        <div className="w-[280px] text-center h-full border border-r-[#717171] flex items-center justify-center">
          <p className=" ">Email</p>
        </div>
        <div className="w-[215px] text-center h-full border border-r-[#717171] flex items-center justify-center">
          <p className=" "> Дата реєстраціі</p>
        </div>
        <div className="w-[210px] text-center h-full border border-r-[#717171] flex items-center justify-center">
          <p className=" ">Статус заявки</p>
        </div>
        <div className="w-[210px] h-full flex items-center justify-center">
          <p className="">Роль</p>
        </div>
      </div>
      <div className="flex flex-col  ">
        {filteredAdmins?.map((elem, i) => {
          return (
            <div
              key={i}
              className={`h-[60px] border border-[#717171] flex cursor-pointer ${
                switchStates[i] ? "bg-[#E1E4E7]" : "bg-[#E8E8E8]"
              }`}
            >
              <div className="h-full w-[34px] flex items-center justify-center border border-r-[#717171]">
                <div className="z-[20]">
                  <CheckBox
                    childId={i}
                    switchState={switchStates[i]}
                    onSwitchChange={handleSwitchChange}
                  />
                </div>
              </div>
              <div className="h-full w-[50px] flex items-center justify-center border border-r-[#717171]">
                <p>{i + 1}</p>
              </div>
              <div className="h-full w-[200px] flex items-center justify-center border border-r-[#717171]">
                <p>{elem?.name}</p>
              </div>
              <div className="h-full w-[280px] flex items-center justify-center border border-r-[#717171] overflow-hidden">
                <p>{elem?.email}</p>
              </div>
              <div className="h-full w-[215px] flex items-center justify-center border border-r-[#717171]">
                <p>{renderDate(elem?.dataRegistration)}</p>
              </div>
              <div className="h-full w-[210px] flex items-center justify-center border border-r-[#717171]">
                <p>Прийнята</p>
              </div>
              <div className="h-full w-[210px] flex items-center justify-center ">
                <p>Адмін</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersPage;
