import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./Map.css";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { useState, useEffect } from "react";
import "@reach/combobox/styles.css";
import { formatRelative } from "date-fns";
const libraries = ["places"];
const mapContainerStyle = {
  height: "80vh",
  width: "100vw",
};
var center = {
  lat: 31.506154,
  lng: 34.459686,
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

export default function FixedMap(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCNGRdW3zFEPsfPJbHvFSMFh1OTbv78kcY",
    libraries,
  });
  const [markers, setMarkers] = useState(center);
  useEffect(() => {
    setMarkers(props.position);
  }, [props.position]);

  const [selected, setSelected] = React.useState(null);
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error Loading Map";
  if (!isLoaded) return "Lpoading Map";
  return (
    <div className="map">
      {props.position !== undefined ? (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={center}
          options={props.position}
          onLoad={onMapLoad}
        >
          <div>
            <Marker
              position={{ lat: props.position.lat, lng: props.position.lng }}
              onClick={() => {
                setSelected(true);
              }}
            />
            {selected ? (
              <InfoWindow
                position={{ lat: props.position.lat, lng: props.position.lng }}
                onCloseClick={() => {
                  setSelected(null);
                }}
              >
                <div>
                  <h2>
                    <span role="img" aria-label="bear">
                      &#x1F3D6;
                    </span>{" "}
                  </h2>
                  <h3>
                    {props.placeName}
                    {"    SeaSide"}
                  </h3>
                </div>
              </InfoWindow>
            ) : null}
          </div>
        </GoogleMap>
      ) : (
        <div></div>
      )}
    </div>
  );
}
