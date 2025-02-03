import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Propertycards from './Propertycards';
import BrowseProperties from './BrowseProperties';
import CityCard from './CityCard';


const cities = [
  "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Peshawar", 
  "Quetta", "Faisalabad", "Multan", "Sialkot", "Gujranwala", 
  "Bahawalpur", "Sukkur", "Mardan", "Sargodha", "Swat", 
  "Gujrat", "Chiniot", "Dera Ghazi Khan", "Murree", "Mianwali", 
  "Hyderabad", "Rahim Yar Khan", "Jhelum", "Kasur", "Okara", 
  "Zhob", "Chakwal", "Bannu", "Jammu", "Abbottabad", "Larkana",
  "Kotli", "Sahiwal", "Chiniot", "Mirpur", "Saidu Sharif", 
  "Shikarpur", "Dera Ismail Khan", "Turbat", "Bajaur", "Chitral", 
  "Khushab", "Khairpur", "Nowshera", "Haripur", "Lodhran",
  "Kohat", "Mandi Bahauddin", "Bannu", "Risalpur", "Mithi",
  "Dadu", "Bhalwal", "Gandhara", "Buner", "Ghulam Mohammadabad", 
  "Muzaffargarh", "Layyah", "Bannu", "Jhang", "Tando Adam", 
  "Chiniot", "Sialkot", "Shabqadar", "Hangu", "Jamalpur", 
  "Pindi Bhattian", "Jamalpur", "Harnai", "Fatehjang", "Sohawa", 
  "Umarkot", "Sibi", "Dera Bugti", "Jaffarabad", "Gwadar", 
  "Sukkur", "Muzaffarabad", "Karachi Cantt", "Faisalabad Cantt", 
  "Skardu", "Chilas", "Naran", "Goribabad", "Mansehra",
  "Nankana Sahib", "Khairpur", "Wana", "Parachinar", "Sargodha",
  "Shahdadkot", "Haripur", "Muzaffargarh", "Chaudhry Town", "Bannu City"
];

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const searchRef = useRef(null);  // Ref for search input
  const suggestionListRef = useRef(null);  // Ref for the suggestion list

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = cities.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities(cities); // Show all cities if input is cleared
    }
  };

  const handleFocus = () => {
    setShowSuggestions(true);
    setFilteredCities(cities); // Show all cities on focus
  };

  const handleCitySelect = (city) => {
    const lowerCaseCity = city.toLowerCase(); // Convert city to lowercase
    setSearchTerm(lowerCaseCity); // Set the lowercase city
    setShowSuggestions(false); // Close the suggestions
  };

  const handleSearchIconClick = () => {
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase(); // Convert search term to lowercase
      navigate(`/properties/${lowerCaseSearchTerm}`); // Pass lowercase city to URL
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current && !searchRef.current.contains(event.target) &&
        suggestionListRef.current && !suggestionListRef.current.contains(event.target)
      ) {
        setShowSuggestions(false); // Hide suggestions when clicking outside
      }
    };

    // Add event listener to detect clicks outside
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='bg-img'>
        <div className="d-flex row align-items-center justify-content-center text-white py-2 filter">
          <div className="d-flex flex-wrap col-md-12 justify-content-center bg-secondary filterborder text-light px-4 py-2 rounded-sm">
            <a
              href="#"
              className="text-decoration-none"
              onClick={() => navigate('/properties/Sale')}
            >
              <div className="px-4 py-2 border-bottom border-warning rounded-bottom">
                Sale
              </div>
            </a>
            <a
              href="#"
              className="text-decoration-none"
              onClick={() => navigate('/properties/House')}
            >
              <div className="px-4 py-2 border-bottom border-transparent rounded-bottom hover-border-primary">
                Houses
              </div>
            </a>
            <a
              href="#"
              className="text-decoration-none"
              onClick={() => navigate('/properties/Plot')}
            >
              <div className="px-4 py-2 border-bottom border-transparent rounded-bottom hover-border-warning">
                Plots
              </div>
            </a>
            <a
              href="#"
              className="text-decoration-none"
              onClick={() => navigate('/properties/Commercial')}
            >
              <div className="px-4 py-2 border-bottom border-transparent rounded-bottom hover-border-warning">
                Commercials
              </div>
            </a>
            <a
              href="#"
              className="text-decoration-none"
              onClick={() => navigate('/properties/Rent')}
            >
              <div className="px-4 py-2 border-bottom border-transparent rounded-bottom hover-border-warning">
                Rent
              </div>
            </a>
          </div>
        </div>
        <div className='row container'>
          <div className="col-md-12 d-flex align-items-center text-center justify-content-center herosection ">
            <h4>Buy or rent Your properties at our most <br/> trusted online real estate portal</h4>
          </div>
          <div
            className="col-md-12 d-flex justify-content-center align-items-center search-bar pt-4"
          >
            <div className="position-relative" style={{ maxWidth: "700px", width: "100%" }}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Search by city or area"
                  value={searchTerm}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  ref={searchRef}  // Add ref to input
                />
                <button
                  className="btn text-white"
                  onClick={handleSearchIconClick} // Handle click for search icon
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
              {showSuggestions && (
                <ul
                  className="list-group position-absolute w-100"
                  ref={suggestionListRef}  // Add ref to the list
                  style={{ zIndex: 1000, maxHeight: "200px", overflowY: "auto" }}
                >
                  {filteredCities.length > 0 ? (
                    filteredCities.map((city, index) => (
                      <li
                        key={index}
                        className="list-group-item list-group-item-action"
                        onClick={() => handleCitySelect(city)}  // Handle city select, but do not navigate
                        style={{ cursor: "pointer" }}
                      >
                        {city}
                      </li>
                    ))
                  ) : (
                    <li className="list-group-item">No matches found</li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='py-4'>
       
        <BrowseProperties/>
        <CityCard/>
        <Propertycards />
        {/* <Gallery/> */}
      </div>
    </>
  );
};

export default Home;
