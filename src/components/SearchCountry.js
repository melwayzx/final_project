import React, { useState, useEffect } from "react";
import MultiSelect from "react-multi-select-component";

export default function SearchCountry({ data }) {
    return (
        <div>
            <h1>เลือกประเทศ</h1>
            <MultiSelect
                options={data}
                // value={selected}
                onChange={(e) => console.log(e)}
                labelledBy={"Select"}
            />
        </div>
    );
}
