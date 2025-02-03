import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetAllpropertiesQuery } from '../Redux/CommonApi';
import NoData from '../Maincomponent/NoData';

const PropertyTypecards = () => {
  const { propertyType } = useParams();
  const { City } = useParams();
  const { data: propertydata, error, isLoading } = useGetAllpropertiesQuery({});
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const ITEMS_PER_PAGE = 9;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  // Filter properties by type
  // const filteredProperties = propertydata?.alllistedproperties.filter(
  //   (property) =>
  //     property.propertytype === propertyType 
  //   ||property.city.toLowerCase() === city.toLowerCase()
  // );
  const filteredProperties = propertydata?.alllistedproperties.filter((property) => {
    if (property.propertytype === propertyType) {
      // Filter based on propertyType if it's provided
      return property.propertytype === propertyType;
    }
    else if (property.location === propertyType) {
      // Filter based on city if propertyType is not provided
      return property.location === propertyType;
    }
  });
  // Calculate total pages
  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);

  // Get properties for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProperties = filteredProperties.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const handleCardClick = (id) => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="container">
      <h2 className="text-primary my-4">{propertyType} Properties</h2>
      <div className="row">
        {currentProperties.length > 0 ? (
          currentProperties.map((property) => (
            <div
              className="col-xl-4 mb-4"
              key={property._id}
              onClick={() => handleCardClick(property._id)}
              style={{ cursor: "pointer" }}
            >
              <div className="card propertycard">
                <img
                  src={
                    property.images.length > 0
                      ? property.images[0]
                      : "/public/AlArabtrans.jpg"
                  }
                  className="card-img-top image-fluid"
                  alt={property.title || "Property Image"}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">
                    {property.title || "Untitled Property"}
                  </h5>
                  <div className="d-flex justify-content-between">
                    <h4>
                      <span>PKR</span> {property.price}
                    </h4>
                    <div className="d-flex iconbox">
                      <h6>{property.propertytype}</h6>
                    </div>
                  </div>
                  <p className="card-text my-2">
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="ps-2">
                      {property.location}, {property.city}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <NoData />
        )}

      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center my-4">
        <button
          className="btn btn-outline-primary mx-1"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page + 1}
            className={`btn mx-1 ${currentPage === page + 1 ? 'btn-primary' : 'btn-outline-primary'
              }`}
            onClick={() => handlePageChange(page + 1)}
          >
            {page + 1}
          </button>
        ))}
        <button
          className="btn btn-outline-primary mx-1"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default PropertyTypecards;
