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
            <input 
            {...getInputProps({ 
              placeholder: "Type address" ,
              className: 'location-search-input',
              size: '137',
              })} 
            />

            <div className="autocomplete-dropdown-container">
              {loading && <div>loading...</div>}

              {suggestions.map(suggestion => { 
                
                const className= suggestion.active
                  ? 'suggestion-item-active'
                  : 'suggestion-item';
                const style = suggestion.active 
                  ? { backgroundColor: '#fff1ac', cursor: 'pointer' }
                  : { backgroundColor: '#b689b0', cursor: 'pointer' };
                
                
                return (
                  <div
                  key={suggestion.id}
                    {...getSuggestionItemProps(suggestion,{ 
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span> 
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