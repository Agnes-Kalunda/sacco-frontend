import { Outlet } from "react-router-dom";
import FirstStep from "./FirstStep";
import ProgressBar from "./ProgressBar";
import { FormProvider } from './FormContext'
import Form from "./Form";
function Register() {
  return (
    <div>
    <h2
        className="service"
        style={{ marginBottom: "25px", marginTop: "20px" , color: "orange"}}
      >
      Register
      </h2>
      <FormProvider>
        <ProgressBar/>
        <Form/>
      </FormProvider>
      <Outlet/>

      
    </div>
  
  );
}

export default Register;
