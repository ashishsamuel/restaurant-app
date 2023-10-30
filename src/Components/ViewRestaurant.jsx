import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';

function ViewRestaurant() {
    const {id} = useParams()
    const {allRestaurants,loading,error} = useSelector((state)=>state.restaurantSlice)
    const [restaurant,setRestaurant] = useState({})

    useEffect(()=>{
        setRestaurant(allRestaurants.find(item=>item.id==id))
    },[])

  return (
    <div>
      <Row>
        <Col className="my-5 ms-5" sm={12} md={4} lg={4} xl={4}>
          <img
            className="rounded p-2"
            width={"450px"}
            height={"600px"}
            src={restaurant?.photograph}
            alt=""
          />
        </Col>
        <Col className="my-5" sm={12} md={6} lg={6} xl={6}>
          <div className="bg-secondary mt-2 py-2 px-3">
            <h3>{restaurant?.name}</h3>
            <p className="fw-bold fs-6" style={{ color: "white" }}>
              {restaurant?.neighborhood}
            </p>
            <p className="fw-bold fs-6 mt-4" style={{ color: "white" }}>
              Cuisine : {restaurant?.cuisine_type}
            </p>
            <p className="fw-bold fs-6 mt-4" style={{ color: "white" }}>
              Address : {restaurant?.address}
            </p>
          </div>
          <div className="mt-2 d-flex flex-column">
            <button className="btn btn-secondary p-2 w-50 my-2">
              Operating Hours
            </button>
            <button className="btn btn-secondary p-2 w-50 my-2">
              Click here to view the reviews
            </button>
          </div>

        </Col>
      </Row>

      
    </div>
  );
}

export default ViewRestaurant
