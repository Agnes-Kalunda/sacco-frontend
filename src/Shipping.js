import useFormContext from "./useFormContext"

const Shipping = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <>
            {/* <label htmlFor="sameAsBilling">
                <input
                    type="checkbox"
                    id="sameAsBilling"
                    name="sameAsBilling"
                    checked={data.sameAsBilling}
                    onChange={handleChange}
                />
                Same as Billing Address
            </label> */}

            <div className="split-container">
                <div className="flex-col">
                    <label htmlFor="employerName">Employer Name</label>
                    <input
                        type="text"
                        id="employerName"
                        name="employerName"
                        placeholder=""
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.employerFirstName}
                        onChange={handleChange}
                        disabled={data.sameAsBilling}
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="employerLocation">Location</label>
                    <input
                        type="text"
                        id="employerLocation"
                        name="employerLocation"
                        placeholder=""
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.employerLocation}
                        onChange={handleChange}
                        disabled={data.sameAsBilling}
                    />
                </div>
            </div>

            <label htmlFor="occupation">Occupation</label>
            <input
                type="text"
                id="occupation"
                name="occupation"
                placeholder=""
                pattern="[\w\d\s.#]{2,}"
                value={data.occupation}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            />

            <label htmlFor="employerAddress">Address</label>
            <input
                type="text"
                id="employerAddress"
                name="employerAddress"
                placeholder=""
                pattern="[\w\d\s.#]{2,}"
                value={data.employerAddress}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            />

            <label htmlFor="employerPhone">Phone</label>
            <input
                type="text"
                id="employerPhone"
                name="employerPhone"
                placeholder=""
                pattern="([A-Z])[\w\s.]{1,}"
                value={data.employerPhone}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            />

            {/* <label htmlFor="shipState">State</label>
            <select
                id="shipState"
                name="shipState"
                value={data.shipState}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            >
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select> */}
{/* 
            <label htmlFor="shipZipCode">Zip Code</label>
            <input
                type="text"
                id="shipZipCode"
                name="shipZipCode"
                placeholder="12345"
                pattern="[0-9]{5}"
                maxLength="5"
                value={data.shipZipCode}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            /> */}
        </>
    )

    return content
}
export default Shipping;