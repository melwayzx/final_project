import React, { useState, useEffect } from "react";
import MultiSelect from "react-multi-select-component";

export default function SearchCountry() {
    const [selected, setSelected] = useState([]);
    useEffect(() => {
        axios({
            method: "get",
            url:
                "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",
        })

        // .then((response) => {
        //     const records = parse(response.data, {
        //         columns: true,
        //         skip_empty_lines: true,
        //     })

        //     const options = { ...records }
        //     let news = [];
        //     for (const key in options[0]) {
        //         if (
        //             key == "Province/State"

        //         ) {
        //             news.push(key);
        //         }

        // .catch ((err) => {
        //         console.error(err);
        //     });

    }, []);



    // const options = [
    //     { label: "Thailand", value: "Thailand" },
    //     { label: "USA", value: "USA" },
    //     { label: "Japan", value: "Japan" },
    //     { label: "Brazil", value: "Brazil" },
    //     { label: "Turkey", value: "Turkey" },
    //     { label: "India", value: "India" },
    //     { label: "China", value: "China" },
    //     { label: "Taiwan", value: "Taiwan" },
    //     { label: "Italy", value: "Italy" },
    // ];

    return (
        <div>
            <h1>เลือกประเทศ</h1>
            <MultiSelect
                options={news}
                value={selected}
                onChange={setSelected}
                labelledBy={"Select"}

            />
        </div>
    )
}
