import React, { useState,Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addAddress } from "../../../actions/order";
import PlaceOrder from "./PlaceOrder";
import { connect } from 'react-redux'
import Iframe from 'react-iframe'

function Address({addAddress}) {


    const [fromData, setFormData] = useState({
        fullName: '',
        phone: '',
        city:'',
        state: '',
        Street: '',
      });
      const {
        fullName,
        phone,
        city,
        state,
        Street,
      } = fromData;
      const hundelchange = (e) =>{
        setFormData({ ...fromData, [e.target.name]: e.target.value },addAddress(fromData))
        if(fullName!=""&&phone!=""&&city!=""&&state!=""&&Street!=""){
            addAddress(fromData)
        }
    };

  const onsubmit = (e) => {
    e.preventDefault();

  };

  return (
    <Fragment>
    <Container>
      <Main>
          <form  onSubmit={(e) => onsubmit(e)}>
        <FormContainer>
          <InputContainer>
            <p>Full Name</p>
            <input
              value={fullName}
              name="fullName"
              onChange={(e) => hundelchange(e)}
              type="text"
              placeholder="Your Full Name"
            
            />
          </InputContainer>
          <InputContainer>
            <p>Phone Number</p>
            <input
              type="number"
              name="phone"

              onChange={(e) => hundelchange(e)}
              value={phone}
            />
          </InputContainer>
          <InputContainer>
            <p>Region</p>
            <input
              name="Street"

              type="text"
              onChange={(e) => hundelchange(e)}
              value={Street}
            />
          </InputContainer>
        
          <InputContainer>
            <p>City</p>
            <input
              name="city"

              type="text"
              onChange={(e) => hundelchange(e)}
              value={city}
            />
          </InputContainer>
          <InputContainer>
            <p>Address</p>
            <input
              type="text"
              onChange={(e) => hundelchange(e)}
              value={state}
              name="state"

            />
          </InputContainer>

<Link to='/payment'>
          <input type="submit"value="Deliver to this Address" />
          </Link>
        </FormContainer>
        </form>
      
         <div>
  
      <Iframe width="600" height="450"style="border:0;width:100%;"margin="10px 70px"loading="lazy" allowfullscreen src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDX-nRJ8JxhkpsCsD_-7qGO1vgGtRfMWG4&q=${Street},${city},${state}`}> </Iframe>

        </div>

        {/* <PlaceOrder address={address}/> */}

      </Main>
    
        </Container>
    </Fragment>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1400px;
  margin: auto;
  background-color: rgb(234, 237, 237);
  position: relative;
`;

const Main = styled.div`
  padding: 15px;
  display:flex;
  flex-direction:row
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 55%;
  min-width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #fff;
  margin: auto;
  button {
    align-self: flex-start;
    height: 33px;
    width: 250px;
    margin-top: 20px;
    background-color: #ffa32a;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;
  p {
    font-size: 14px;
    font-weight: 600;
  }
  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;
    &:hover {
      border: 1px solid orange;
    }
  }
`;


const mapStateToProps = state => ({
    order: state.order });

export default connect(mapStateToProps, {addAddress}) (Address);