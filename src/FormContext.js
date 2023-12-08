import { createContext, useState, useEffect } from "react"

const FormContext = createContext({})

export const FormProvider = ({ children }) => {

    const title = {
        0: 'Personal Data',
        1: 'Employment Info',
        2: 'Next of Kin'
    }

    const [page, setPage] = useState(0)

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        nationality:'',
        identificationCard:'',
        postalAddress:'',
        town:'',
        email:'',
        sameAsBilling: false,
        employerName: "",
        employerLocation:"",
        occupation:'',
        employerPhone:'',
       
       
    })


    useEffect(() => {
        if (data.sameAsBilling) {
            setData(prevData => ({
                ...prevData,
                employerFirstName: prevData.billFirstName,
                employerLastName: prevData.billLastName,
                employerAddress1: prevData.billAddress1,
                shipAddress2: prevData.billAddress2,
                shipCity: prevData.billCity,
                shipState: prevData.billState,
                shipZipCode: prevData.billZipCode
            }))
        } else {
            setData(prevData => ({
                ...prevData,
                employerName: "",
        employerLocation:"",
        occupation:'',
        employerPhone:'',
            }))
        }
    }, [data.sameAsBilling])


    const handleChange = e => {
        const type = e.target.type

        const name = e.target.name

        const value = type === "checkbox"
            ? e.target.checked
            : e.target.value

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const {
        billAddress2,
        sameAsBilling,
        shipAddress2,
        optInNews,
        ...requiredInputs } = data

    const canSubmit = [...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length - 1

    const canNextPage1 = Object.keys(data)
        .filter(key => key.startsWith('bill') && key !== 'billAddress2')
        .map(key => data[key])
        .every(Boolean)

    const canNextPage2 = Object.keys(data)
        .filter(key => key.startsWith('employer') && key !== 'shipAddress2')
        .map(key => data[key])
        .every(Boolean)

    const disablePrev = page === 0

    const disableNext =
        (page === Object.keys(title).length - 1)
        || (page === 0 && !canNextPage1)
        || (page === 1 && !canNextPage2)

    const prevHide = page === 0 && "remove-button"

    const nextHide = page === Object.keys(title).length - 1 && "remove-button"

    const submitHide = page !== Object.keys(title).length - 1 && "remove-button"

    return (
        <FormContext.Provider value={{ title, page, setPage, data, setData, canSubmit, handleChange, disablePrev, disableNext, prevHide, nextHide, submitHide }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext ;