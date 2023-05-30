import React, { useState } from "react";
import s from "./inventory.module.scss";
import Input from "../../atoms/Inputs/Input/Input";
import DropSearch from "../../molecules/dropSearch/DropSearch";
import CheckBoxLine from "../../molecules/checkBoxLine/CheckBoxLine";
import CheckBoxTextLine from "../../molecules/checkBoxTextLine/checkBoxTextLine";
import Range from "rc-slider";
import "rc-slider/assets/index.css";

const Inventory = () => {
  const [kilo, setKilo] = useState(50000);
  const [yearSt, setYearSt] = useState(1995);
  const [yearEnd, setYearEnd] = useState(2023);
  const [priceStart, setPriceStart] = useState(0);
  const [priceEnd, setPriceEnd] = useState(100000);

  return (
    <div className={`${s.inv} container`}>
      <div className={`${s.left}`}>
        <p className={s.dropTitle}>Detailed search</p>
        <DropSearch
          title={"Make, Model"}
          children={
            <div>
              <p className={s.inputTitle}>Make</p>
              <Input className={s.input} placeholder={"Search Make..."} />
              <p className={s.inputTitle}>Model</p>
              <Input className={s.input} placeholder={"Search Model..."} />
            </div>
          }
        />
        <DropSearch
          title={"Body type"}
          children={
            <div>
              <CheckBoxLine
                state={true}
                text={"Trucks"}
                img={require("../../../assets/img/components/inv/Truck icon.svg")}
              />
              <CheckBoxLine
                state={false}
                text={"SUV"}
                img={require("../../../assets/img/components/inv/SUV icon.svg")}
              />
              <CheckBoxLine
                state={false}
                text={"Sedan"}
                img={require("../../../assets/img/components/inv/Sedan.svg")}
              />
              <CheckBoxLine
                state={false}
                text={"Trucks"}
                img={require("../../../assets/img/components/inv/Truck icon.svg")}
              />
              <CheckBoxLine
                state={false}
                text={"SUV"}
                img={require("../../../assets/img/components/inv/SUV icon.svg")}
              />
              <CheckBoxLine
                state={false}
                text={"Sedan"}
                img={require("../../../assets/img/components/inv/Sedan.svg")}
              />
              <CheckBoxLine
                state={false}
                text={"Trucks"}
                img={require("../../../assets/img/components/inv/Truck icon.svg")}
              />
            </div>
          }
        />
        <DropSearch
          title={"Transmission"}
          children={
            <div>
              <CheckBoxTextLine text={"Automatic"} />
              <CheckBoxTextLine text={"Manual"} />
            </div>
          }
        />
        <DropSearch
          title={"Price"}
          children={
            <div>
              <div className={s.yearLine}>
                <span>${priceStart}</span>
                <span>${priceEnd}</span>
              </div>
              <Range
                range
                min={10000}
                max={100000}
                step={1}
                defaultValue={[0, 100000]}
                onChange={(e) => {
                  setPriceStart(e[0]);
                  setPriceEnd(e[1]);
                }}
              />
            </div>
          }
        />
        <DropSearch
          title={"Year"}
          children={
            <div>
              <div className={s.yearLine}>
                <span>{yearSt}</span>
                <span>{yearEnd}</span>
              </div>
              <Range
                range
                min={1995}
                max={2023}
                step={1}
                defaultValue={[1995, 2023]}
                onChange={(e) => {
                  setYearSt(e[0]);
                  setYearEnd(e[1]);
                }}
              />
            </div>
          }
        />
        <DropSearch
          title={"Kilometres"}
          children={
            <div>
              <div className={s.numLine}>
                <span>{kilo}</span>
                <p>or less</p>
              </div>
              <Range
                min={0}
                max={100000}
                step={10}
                defaultValue={50000}
                onChange={(e) => setKilo(e.valueOf())}
              />
            </div>
          }
        />
      </div>
      <div className={`${s.right}`}>
        <Input className={s.searchInput} placeholder={"Find a dream car..."} />
        <img src={require("../../../assets/img/components/inv/Share.svg")} className={s.share} />
        <p className={s.sortBy}>Sorted by</p>
        <div className={s.selectWr}>
          <select id="select">
            <option>Recommendations </option>
            <option>Newest inventory</option>
            <option>Lowest price</option>
            <option>Highest prices</option>
          </select>
          <span className={s.focus}></span>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
