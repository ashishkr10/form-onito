import * as Yup from "yup";

const phoneRegExp = /^$|^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/;
const ageReg =
  /^(0?[1-9]|[1-9][0-9])$|^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
const panReg = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
const aadhaarReg = /^\d{4}\s?\d{4}\s?\d{4}$/;

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  age: Yup.string()
    .matches(ageReg, "Enter in correct format")
    .required("Age is required"),
  sex: Yup.string().required("Sex is required"),
  mobile: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .nullable(true),
  emergNo: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .nullable(true),
  email: Yup.string().email("Email is invalid"),
  govtIDType: Yup.string(),
  govtID: Yup.string().when("govtIDType", (govtIDType, schema) => {
    if (govtIDType[0] === "PAN")
      return schema
        .required("Enter PAN")
        .matches(panReg, "Enter correct pan format");
    if (govtIDType[0] === "Aadhaar")
      return schema
        .required("Enter Aadhaar")
        .matches(aadhaarReg, "Enter correct aadhaar format");
    return schema;
  }),
});
