import React, { memo, useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import AddQueForm from "./AddQueForm";

const AddQue = () => {
  const dispatch = useDispatch();
  const { subject } = useSelector(({ credentials }) => credentials);

  const [addQuestionObj, setAddQuestionObj] = useState({
    selectSubject: '',
    selectQueType: '',
    question: '',
    answer: '',
    options: []

  })
  const [isFormSubmit, setIsFormSubmit] = useState(false)

  const handleAddQue = useCallback(
    (event, values) => {
      event.preventDefault();
      console.log('addQuestionObj', addQuestionObj)
      setIsFormSubmit(true)

      /*  dispatch(setSubject([...(subject || []), { ...values }]));
       toast.success("Subject Added Successfully"); */

    },
    [addQuestionObj]
  );


  return (
    <div
      className=""
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        margin: "1rem",
      }}
    >
      <div>

        <AddQueForm
          subject={subject}
          handleSubmit={handleAddQue}
          isFormSubmit={isFormSubmit}
          addQuestionObj={addQuestionObj}
          setAddQuestionObj={setAddQuestionObj}
        />
      </div>
    </div>
  );
};

export default memo(AddQue);
