import React from "react";
function Info({ info, state }) {
  // eğer state varsa info divini göster yoksa null döndür
  return (
    <div>
      {state ? (
        <div className="info">
          <p id="city" className="city">
            {info.name} , {info.sys.country}
          </p>
          <div className="genelDeger">
            <p id="degree" className="degree">
              Sıcaklık :{info.main.temp}
              <i class="fa-solid fa-temperature-three-quarters" id="temp"></i>
            </p>
          </div>
          <p id="weather_forecast" className="weather_forecast">
            Hava Durumu : {info.weather[0].description}
          </p>
          <div>
            <p id="feels_like" className="feels_like">
              Hissedilen Sıcaklık : {info.main.feels_like}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export { Info };
