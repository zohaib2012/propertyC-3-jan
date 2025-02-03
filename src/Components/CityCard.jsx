import React from 'react'
import { useNavigate } from 'react-router-dom';
const CityCard = () => {
    const navigate = useNavigate();
  return (
   <>
   <div className='container py-4 citycard-sec'>
    <h2>Search Your Propery by City</h2>
      <div className='row '>
   <div className="col-md-3 py-2" data-aos="fade-up">
          <div className="card ">
            <div className="card-body lhr-img citycard " onClick={() => navigate('/properties/lahore')}>
              <div className="py-3">
                <h2 className='text-bottom'>
                 Lahore
                </h2>
                
              </div>

            </div>
          </div>
        </div>
        <div className="col-md-3 py-2" data-aos="fade-up">
          <div className="card " onClick={() => navigate('/properties/islamabad')}>
            <div className="card-body isl-img citycard">
              <div className="py-3">
                <h2 className='text-bottom'  >
                 Islamabad
                </h2>
                
              </div>

            </div>
          </div>
        </div>
        <div className="col-md-3 py-2" data-aos="fade-up">
          <div className="card "onClick={() => navigate('/properties/karachi')}>
            <div className="card-body karachi-img citycard">
              <div className="py-3">
                <h2 className='text-bottom'>
                 Karachi
                </h2>
                
              </div>

            </div>
          </div>
        </div>
        <div className="col-md-3 py-2" data-aos="fade-up">
          <div className="card " onClick={() => navigate('/properties/faislabad')}>
            <div className="card-body fsd-img citycard">
              <div className="py-3">
                <h2 className='text-bottom'>
                 Faislabad
                </h2>
                
              </div>

            </div>
          </div>
        </div>
   </div>
   </div>
   </>
  )
}

export default CityCard
