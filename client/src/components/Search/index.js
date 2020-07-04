import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
export default function Search(props) {



  return (
    <div>
      <PlacesAutocomplete
        {...props}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>


            <input {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}