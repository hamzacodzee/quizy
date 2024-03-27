import React, { useCallback } from "react";
import { InputText } from "primereact/inputtext";
import { InitialValuesAddExams } from "../../helper/InitialValues";
import { validationSchemaAddExams } from "../../helper/ValidationSchema";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setSubject } from "../../store/slice/CredentialSlice";

const AddExams = () => {
     const dispatch = useDispatch();

     const { subject } = useSelector(({ credentials }) => credentials);

     const handleAddExams = useCallback(
          (values) => {
               dispatch(setSubject([...(subject || []), { ...values }]));
               toast.success("Subject Added Successfully");
          },
          [dispatch, subject]
     );

     const { touched, errors, handleSubmit, handleChange, handleBlur, values } =
          useFormik({
               initialValues: InitialValuesAddExams,
               validationSchema: validationSchemaAddExams,
               onSubmit: handleAddExams,
          });

     return (
          <div
               className=""
               style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    margin: "10rem",
               }}
          >
               <div>
                    <form onSubmit={handleSubmit}>
                         <div className="w-full  flex flex-column align-items-center justify-content-center gap-3 py-6 px-8">
                              <h2>Add Subjects For Quiz</h2>
                              <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                                   <label className="w-6rem">Subject:</label>
                                   <InputText
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="w-12rem"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values?.name
                                             ?.replace(/[^A-z]/g, "")
                                             .trim()}
                                        autoComplete="true"
                                   />
                              </div>
                              {touched?.name && errors?.name && (
                                   <div className="text-red-500">
                                        {errors?.name}
                                   </div>
                              )}
                              <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                                   <label className="w-6rem">
                                        Total Question:
                                   </label>
                                   <InputText
                                        id="totalQue"
                                        type="totalQue"
                                        className="w-12rem"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values?.totalQue?.trim()}
                                        autoComplete="true"
                                   />
                              </div>
                              {touched?.totalQue && errors?.totalQue && (
                                   <small className="text-red-500">
                                        {errors?.totalQue}
                                   </small>
                              )}
                              <Button
                                   label="Add Subject"
                                   icon="pi pi-plus"
                                   className=" mx-auto my-2"
                                   type="submit"
                              ></Button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default AddExams;
