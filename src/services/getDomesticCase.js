export default async function getDomesticCase() {
  const initialData = {
    Data: [
      {
        ConfirmDate: "",
        No: "3185",
        Age: 0,
        Gender: "",
        GenderEn: "",
        Nation: "",
        NationEn: null,
        Province: "0",
        ProvinceId: 0,
        District: "0",
        ProvinceEn: "",
        Detail: null,
        StatQuarantine: 0,
      },
    ],
  };

  try {
    const res = await fetch("https://covid19.th-stat.com/api/open/cases");
    return await res.json();
  } catch (error) {
    return initialData;
  }
}
