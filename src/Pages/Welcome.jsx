import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSignInMutation } from "../API/auth/queries";
import { useForm } from "react-hook-form";
const Welcome = () => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const brandingData = useSelector((state) => state.brandingSlice);
  const { mutate: signIn } = useSignInMutation();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      password: "",
    },
  });
  const inputStyle = {
    border: `1px solid ${colorsData.mainColor}`,
  };
  const submitStyles = {
    backgroundColor: colorsData.mainColor,
  };

  const logoData = useSelector((state) => state.logoSlice);
  const onSignIn = (values) => {
    signIn(values);
  };
  return (
    <div
      className={`min-h-screen flex items-center flex-col justify-center p-1 text-center`}
    >
      <img
        src={logoData.mainLogo}
        alt="Logo"
        className={`w-32 rounded-md mb-2`}
      />
      <h1 className={`text-xl mb-2`}>
        Welcome To <span>{brandingData.BrandName}</span> Dashboard{" "}
        <span className={`text-[#7E0945] font-semibold`}>
          Powered by Sii Media
        </span>
      </h1>
      <h2>Here Where You Can Add, Edit and Delete Your Exist Products</h2>
      <h3>
        One Thing More, You Have The Ability To Check Your Ordered Products
      </h3>
      <p>One Thing Is Required Please Identify Your Self :</p>
      <form onSubmit={handleSubmit(onSignIn)}>
        <div className={`flex flex-col items-center justify-center`}>
          <label htmlFor="id">Type Here Your ID:</label>
          <input
            style={inputStyle}
            {...register("password")}
            className={`rounded-lg p-1 mt-2 outline-none`}
            id="id"
            type="password"
          />
          <button
            style={inputStyle}
            className={`p-1 bg-transparent mt-2 rounded-lg`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Welcome;
