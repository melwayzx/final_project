import React, { useState } from 'react';
function DropDown(props) {
    // const [countries, setCountries] = useState([])
    const onChange = (e) => {
        console.log(e.target.value)
        props.selectedCountry(e.target.value)
        createSelectItem()
    }

    const createSelectItem = () => {
        const temp = props.confirmedCase.map((x) => {
            return console.log(x["Country/Region"])
        })

    }

    return (
        <div>
            <label data="countries">เลือกประเทศที่ต้องการเปรียบเทียบ</label>
            <select onChange={onChange}>
            </select>
        </div>
    )
}
export default DropDown;