import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/slice/dataSlice";
import "./index.scss";
const DoctorsCard = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <section id="our-specialists">
      <div className="container">
        {console.log(doctors.data)}
        <div className="our-specialists">DoctorsCard</div>
      </div>
    </section>
  );
};

export default DoctorsCard;
