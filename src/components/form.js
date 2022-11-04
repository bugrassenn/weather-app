import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Form = ({ info, setInfo, setState }) => {
  // gelen city verisini setCity ile değiştirebilmek için useState kullanıyoruz.
  const [city, setCity] = useState("");

  useEffect(() => console.log(info), [info]);

  const handleChange = async () => {
    const key = "f209a9820362500a6da6cd05d2fe672b";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=tr&appid=${key}&units=metric`;
    await axios(baseURL).then(async (res) => {
      await setInfo(res.data);
      setState(true);
    });
  };

  return (
    <div>
      <h1>Hava Durumu</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault(); // sayfa yenilenmesini önlüyoruz.
          handleChange();
        }}
      >
        <div className="form">
          <input
            //inputa girilen veriyi döndürmek için onChange ile setCity yi kullanıyoruz ve girilen şehir setCitye aktarılıp bize yanıt dönüyor
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="inputText"
            type="text"
            placeholder="Şehir Giriniz."
          />
        </div>
        <div className="btnDiv">
          <button type="submit" className="btn">
            Hava Durumu Verilerini Göster
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
