//npm install react - select
import React, { Component } from 'react'
import Select from 'react-select'

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};
const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

const formatGroupLabel = data => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

export function DropDown() {
    <Select
        defaultValue={colourOptions[1]}
        options={groupedOptions}
        formatGroupLabel={formatGroupLabel}
    />
}
    // const [countries, setCountries] = useState([])
    // const onChange = (e) => {
    //     console.log(e.target.value)
    //     props.selectedCountry(e.target.value)
    //     createSelectItem()
    // }
// const createSelectItem = () => {
    //     const temp = props.confirmedCase.map((x) => {
    //         return console.log(x["Country/Region"])
    //     })
 // }

//     return (
//         <div>
//             <label data="countries">เลือกประเทศที่ต้องการเปรียบเทียบ</label>
//             <select onChange={onChange}>
//             </select>
//         </div>
//     )
