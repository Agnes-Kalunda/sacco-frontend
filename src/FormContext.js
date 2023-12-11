import { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const title = {
    0: 'Personal Data',
    1: 'Employment Info',
    2: 'Next of Kin'
  };

  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    nationality: '',
    identificationCard: '',
    postalAddress: '',
    town: '',
    email: '',
    employerName: "",
    employerLocation: "",
    occupation: '',
    employerPhone: '',
  });

  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { optInNews, ...requiredInputs } = data;

  const canSubmit =
    [...Object.values(requiredInputs)].every(Boolean) &&
    page === Object.keys(title).length - 1;

  const disablePrev = page === 0;

  const disableNext = page === Object.keys(title).length - 1;

  const prevHide = page === 0 && "remove-button";

  const nextHide = page === Object.keys(title).length - 1 && "remove-button";

  const submitHide = page !== Object.keys(title).length - 1 && "remove-button";

  return (
    <FormContext.Provider
      value={{
        title,
        page,
        setPage,
        data,
        setData,
        canSubmit,
        handleChange,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
