import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const BrowseProperties = () => {
  const propertyData = [
    {
      id: 1,
      type: "Homes",
      tabs: [
        {
          name: "Popular",
          categories: [
            { label: "1 Kanal", description: "Houses" },
            { label: "2 Kanal", description: "Houses" },
            { label: "10 Marla", description: "Houses" },
            { label: "8 Marla", description: "Houses" },
            { label: "5 Marla", description: "Houses" },
            { label: "3 Marla", description: "Houses" },
          ],
        },
        {
          name: "Type",
          categories: [
            { label: "Houses" },
            { label: "Flats"},
            { label: "Upper Portion"},
            { label: "Lower Portion"},
            { label: "Farmhouse"},
            { label: "Penthouse"},
          ],
        },
        // {
        //   name: "Area Size",
        //   categories: [
        //     { label: "1 Kanal", description: "Big Houses" },
        //     { label: "2 Kanal", description: "Luxury Homes" },
        //   ],
        // },
      ],
    },
    {
      id: 2,
      type: "Plots",
      tabs: [
        {
          name: "Popular",
          categories: [
            { label: "5 marla",unit:"marla" ,description: "Residential Plots" },
            { label: "10 marla", unit:"marla" ,description: "Residential Plots" },
            { label: "3 marla",unit:"marla" , description: "Residential Plots" },
            { label: "1 Kanal", description: "Residential Plots" },
            { label: "2 Kanal", description: "Commercial Plots" },
          ],
        },
        {
          name: "Type",
          categories: [
            { label: "Residential Plot", description: "Plots" },
            { label: "Commercial Plot", description: "Plots" },
            { label: "Agricultural Land", description: "Plots" },
            { label: "Indrustrial Land", description: "Plots" },
          

          ],
        },
      ],
    },
    {
      id: 3,
      type: "Commercial",
      tabs: [
        {
          name: "Popular",
          categories: [
            { label: "Office", description: "Commercial" },
            { label: "Shop", description: "Commercial" },
            { label: "Warehouse", description: "Commercial" },
            { label: "Factory", description: "Commercial" },
            { label: "Building", description: "Commercial" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="container py-4">
      <div className="row">
        {propertyData.map((property) => (
          <div className="col-md-4 " key={property.id}>
            <div className="card propertytabcard">
              <div className="card-header bg-primary">
                <h4>{property.type}</h4></div>
              <div className="card-body">
                <Tabs defaultActiveKey={property.tabs[0]?.name} className="mb-3" fill>
                  {property.tabs.map((tab, tabIndex) => (
                    <Tab eventKey={tab.name} title={tab.name} key={tabIndex}>
                      <div className="row g-2">
                        {tab.categories.map((category, categoryIndex) => (
                         <div className="col-md-4 col-sm-4">
                         <div
                            className="text-center tab btn-secondary "
                            key={categoryIndex}
                            title={category.description}
                          >
                            <p className="py-3">    {category.label} </p>
                         
                          </div>
                          </div>
                        ))}
                      </div>
                     
                    </Tab>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseProperties;
