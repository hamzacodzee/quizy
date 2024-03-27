import * as yup from "yup";

export const validationSchemaSignup = yup.object({
     username: yup
          .string()
          .min(3, "Username should be of minimum 3 characters length")
          .required("Username is required"),
     password: yup
          .string()
          .min(3, "Password should be of minimum 3 characters length")
          .required("Password is required"),
});

export const validationSchemaAddExams = yup.object({
     subject: yup
          .string()
          .min(3, "Subject Name should be of minimum 3 characters length")
          .required("Subject name is required"),
     totalQue: yup
          .number()
          .positive("Total questions should be greater than 0")
          .required("Password is required"),

     question: yup
          .string()
          .min(3, "Question should be of minimum 3 characters length")
          .required("Question is required"),

     answer: yup
          .string()
          .min(3, "Answer should be of minimum 3 characters length")
          .required("Answer is required"),

     selectSubject: yup.object().required("Select Subject is required"),
     selectQueType: yup.object().required("Select Question Type is required"),
});
