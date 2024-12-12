import { useEffect } from "react";

window.map = null;

export const Map = () => {
  useEffect(() => {
    window.ymaps.ready(() => {
      if (!window.map) {
        window.map = new window.ymaps.Map("map", {
          center: [43.229906, 76.862152],
          zoom: 12,
          duration: 100,
          controls: ["zoomControl", "fullscreenControl"],
        });

        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            const userGeolocationPlacemark = new window.ymaps.Placemark(
              [latitude, longitude],
              {
                hintContent: "Алматы",
                balloonContent: "Примерное место может быть, не правилным",
              },
            );

            window.map.geoObjects.add(userGeolocationPlacemark);

            window.map.setCenter([latitude, longitude], 13);
          },
          (error) => alert("Не удалось найти местоположение!"),
        );
      }
    });
  }, []);

  return (
    <div
      id="map"
      className="w:830px h:700px r:10px overflow:hidden border:2px|solid|#63636321"
    ></div>
  );
};
