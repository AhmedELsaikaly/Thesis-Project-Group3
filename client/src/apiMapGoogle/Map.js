import React, { useState, useEffect } from "react";
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
import jwt_decode from "jwt-decode";
import axios from "axios";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { formatRelative } from "date-fns";
const libraries = ["places"];
const mapContainerStyle = {
  height: "80vh",
  width: "75vw",
};
const center = {
  lat: 31.506154,
  lng: 34.459686,
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

export default function Map(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCNGRdW3zFEPsfPJbHvFSMFh1OTbv78kcY",
    libraries,
  });
  ///// ........................///
  const [placeName, setPlaceName] = useState("");
  const [ownerId, setOwnerId] = useState("");
  useEffect(() => {
    const token = localStorage.ownertoken;
    const decoded = jwt_decode(token);
    setPlaceName(decoded.placeName);
    setOwnerId(decoded.id);
  }, [ownerId]);
  ///....... get current location...........//
  const [currentPosition, setCurrentPosition] = useState({});

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(success);
    navigator.geolocation.getCurrentPosition((position) => {
      const currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setCurrentPosition(currentPosition);
      if (ownerId !== "") {
        axios
          .get(`http://localhost:5000/CheckPosition/${ownerId}`)
          .then(function (response) {
            if (response.data.state === false) {
              setMarkers(currentPosition);
            } else {
              setMarkers(response.data.position);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  }, [ownerId]);

  /// ........................................//
  const [markers, setMarkers] = React.useState([]);
  // set state for selsction
  const [selected, setSelected] = React.useState(null);
  // map ref
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  ///................. pan to...................//
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);
  //////////////////// onMap CLick .......................//////
  const onMapClick = React.useCallback((e) => {
    setMarkers({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    // props.changeState({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  });
  //////////////////// onMarkerDragEnd .......................//////
  const onMarkerDragEnd = (e) => {
    console.log(e);
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setMarkers({ lat, lng });
  };
  useEffect(() => {
    axios
      .put(`http://localhost:5000/UpdatePosition`, {
        ownerId: ownerId,
        position: markers,
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [markers]);
  if (loadError) return "Error Loading Map";
  if (!isLoaded) return "Lpoading Map";
  return (
    <div className="map">
      {console.log(markers)}
      <Locate panTo={panTo} />
      <Search panTo={panTo} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={markers}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        <Marker
          position={markers}
          onClick={() => {
            setSelected(markers);
          }}
          onDragEnd={(e) => onMarkerDragEnd(e)}
          draggable={true}
        />
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
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
                {placeName}
                {"    SeaSide"}
              </h3>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}
function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src="/compass.svg" alt="compass" />
    </button>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 31.506154, lng: () => 34.459686 },
      radius: 100 * 1000,
    },
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
