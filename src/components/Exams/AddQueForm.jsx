import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { InputTextarea } from 'primereact/inputtextarea'
import React, { memo, useMemo } from 'react'
import { SelectQueTypeOptions } from '../../helper/InitialValues'

const AddQueForm = ({
  subject,
  handleSubmit,
  isFormSubmit,
  addQuestionObj,
  setAddQuestionObj
}) => {

  const renderForm = useMemo(() => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="w-full  flex flex-column align-items-center justify-content-center gap-3 py-6 px-8">
          <InnerFormContainer
            subject={subject}
            isFormSubmit={isFormSubmit}
            handleSubmit={handleSubmit}
            addQuestionObj={addQuestionObj}
            setAddQuestionObj={setAddQuestionObj}
          />
        </div>
      </form>
    )
  }, [
    subject,
    handleSubmit,
    isFormSubmit,
    addQuestionObj,
    setAddQuestionObj
  ])
  return <>{renderForm}</>
}

const InnerFormContainer = ({
  subject,
  isFormSubmit,
  addQuestionObj,
  setAddQuestionObj
}) => {

  const { answer, question, selectQueType, selectSubject } = addQuestionObj

  const addSubjectField = useMemo(() => {
    return (
      <>
        <h2>Add Questions For Subject</h2>
        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
          <label className="w-6rem">Subject:</label>
          <Dropdown
            value={selectSubject}
            onChange={(e) => setAddQuestionObj({ ...addQuestionObj, selectSubject: e.value })}
            options={subject}
            optionLabel="name"
            placeholder="Select Subject"
            className="w-full md:w-14rem"
            id="selectSubject"
            name="selectSubject"
          />
        </div>
        {isFormSubmit &&
          !selectSubject && (
            <div className="text-red-500">
              Select Subject is required!
            </div>
          )}
      </>
    )
  }, [
    subject,
    isFormSubmit,
    selectSubject,
    addQuestionObj,
    setAddQuestionObj,
  ])

  const addTypeField = useMemo(() => {
    return (
      <>
        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
          <label className="w-6rem">
            Question Type:
          </label>
          <Dropdown
            value={selectQueType}
            onChange={(e) => setAddQuestionObj({ ...addQuestionObj, selectQueType: e.value })}
            options={SelectQueTypeOptions}
            optionLabel="name"
            placeholder="Select Question Type"
            className="w-full md:w-14rem"
            id="selectQueType"
            name="selectQueType"
          />
        </div>
        {isFormSubmit &&
          !selectQueType && (
            <div className="text-red-500">
              Select Subject is required!
            </div>
          )}
      </>
    )
  }, [isFormSubmit, selectQueType, addQuestionObj, setAddQuestionObj])


  const addQuestionField = useMemo(() => {
    return (
      <><div className="flex flex-wrap justify-content-center align-items-center gap-2">
        <label className="w-6rem">Question:</label>
        <InputTextarea
          autoResize
          value={question}
          onChange={(e) => setAddQuestionObj({ ...addQuestionObj, question: e.target.value })}
          id="question"
          name="question"
          rows={5}
          cols={30}
        />
      </div>
        {isFormSubmit &&
          !question ? (
          <div className="text-red-500">
            Question is required!
          </div>
        ) : question?.length < 0 && (<div className="text-red-500">
          Question should be of minimum 3 characters length!
        </div>)}
      </>
    )
  }, [
    question,
    isFormSubmit,
    addQuestionObj,
    setAddQuestionObj,
  ])

  const addAnswerField = useMemo(() => {
    return <>
      <div className="flex flex-wrap justify-content-center align-items-center gap-2">
        <label className="w-6rem">Answer:</label>
        <InputTextarea
          autoResize
          value={answer}
          onChange={(e) => setAddQuestionObj({ ...addQuestionObj, answer: e.target.value })}
          id="answer"
          name="answer"
          rows={5}
          cols={30}
        />
      </div>
      {isFormSubmit &&
        !answer ? (
        <div className="text-red-500">
          Answer is required!
        </div>
      ) : answer?.length < 0 && (<div className="text-red-500">
        Answer should be of minimum 3 characters length!
      </div>)}
    </>
  }, [
    answer,
    isFormSubmit,
    addQuestionObj,
    setAddQuestionObj,
  ])


  const submitField = useMemo(() => {
    return (
      <Button
        label="Add Question"
        icon="pi pi-plus"
        className=" mx-auto my-2"
        type="submit"
      ></Button>
    )
  }, [])

  const addQuestionFormField = useMemo(() => {
    return <>
      {addSubjectField}
      {addTypeField}
      {addQuestionField}
      {addAnswerField}
      {submitField}
    </>
  }, [addSubjectField, addTypeField, addQuestionField, addAnswerField, submitField])
  return <>{addQuestionFormField}</>
}

export default memo(AddQueForm)