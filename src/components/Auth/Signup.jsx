import React, { memo, useCallback } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useFormik } from "formik";

import { InitialValuesSignup } from "../../helper/InitialValues";
import { validationSchemaSignup } from "../../helper/ValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../store/slice/CredentialSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const { users } = useSelector(({ credentials }) => credentials);

     const handleLogin = useCallback(
          (values) => {
               const userExists =
                    users &&
                    users?.some((item) => item?.username === values?.username);

               if (userExists) {
                    toast.error("User Already Exists");
               } else {
                    dispatch(
                         setUsers([
                              ...(users || []),
                              { ...values, role: "admin" },
                         ])
                    );
                    navigate("/login");
                    toast.success("User Created Successfully");
                    console.log("values", values);
               }
          },
          [dispatch, navigate, users]
     );

     const { touched, errors, handleSubmit, handleChange, handleBlur, values } =
          useFormik({
               initialValues: InitialValuesSignup,
               validationSchema: validationSchemaSignup,
               onSubmit: handleLogin,
          });

     return (
          <div
               className="card"
               style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "15rem",

               }}
          >
               <div className="flex">
                    <form onSubmit={handleSubmit}>
                         <div
                              className="w-full  flex flex-column align-items-center justify-content-center gap-3 py-6 px-8"
                              style={{
                                   border: "0.06rem solid grey",
                                   borderRadius: "0.3rem",
                              }}
                         >
                              <h2>Signup To Explore Quiz World!</h2>
                              <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                                   <label className="w-6rem">Username</label>
                                   <InputText
                                        id="username"
                                        name="username"
                                        type="text"
                                        className="w-12rem"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values?.username?.trim()}
                                        autoComplete="true"
                                   />
                              </div>
                              {touched?.username && errors?.username && (
                                   <div className="text-red-500">
                                        {errors?.username}
                                   </div>
                              )}
                              <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                                   <label className="w-6rem">Password</label>
                                   <InputText
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="w-12rem"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values?.password?.trim()}
                                        autoComplete="true"
                                   />
                              </div>
                              {touched?.password && errors?.password && (
                                   <small className="text-red-500">
                                        {errors?.password}
                                   </small>
                              )}

                              <Button
                                   label="Signup"
                                   icon="pi pi-user"
                                   className=" mx-auto my-2"
                                   type="submit"
                              />
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default memo(Signup);
