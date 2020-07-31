import React, { useState, useEffect } from "react";
import MultiSelect from "react-multi-select-component";

export default function SearchCountry({ data }) {
    //   const options = [
    //     { label: "Thailand", value: "Thailand" },
    //     { label: "USA", value: "USA" },
    //     { label: "Japan", value: "Japan" },
    //     { label: "Brazil", value: "Brazil" },
    //     { label: "Turkey", value: "Turkey" },
    //     { label: "India", value: "India" },
    //     { label: "China", value: "China" },
    //     { label: "Taiwan", value: "Taiwan" },
    //     { label: "Italy", value: "Italy" },
    //   ];

    //   const [selected, setSelected] = useState([]);

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
