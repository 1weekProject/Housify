import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MapInput = ({ Autocomplete, getAdresse }) => {
  const [addresse, setAddresse] = useState([]);
  const [x, setX] = useState("");


  const onSubmitAdresse = (e) => {
    e.preventDefault();
    // console.log("adresse",addresse);
    getAdresse(addresse)
  };
  const handlePlaceSelect = (addresse) => {
    setAddresse(addresse.formatted_address);

  };
  console.log("this is your adress",addresse);

  return (
    <div className="mapinput">
      <Card className="input" style={{ height: "10vh", width: "100%" }}>
        <Card.Body
          className="w-15 h-100"
          style={{ maxWidth: "600px", marginBottom: "12px" }}
        >
          <Form onSubmit={(e)=>{onSubmitAdresse(e)}}>
            <div className="locate_button">
              <div className="adresse">
                <Autocomplete
                  onLoad={(autocomplete) =>
                //   console.log("autocomplete:", autocomplete)
                  setX(autocomplete)
                }
                  onPlaceChanged={() =>
                    handlePlaceSelect(x.getPlace())
                }
                >
                  <Form.Group className="mb-1 ">
                    <Form.Control type="text" placeholder="Enter Your Adress" />
                  </Form.Group>
                </Autocomplete>
              </div>
              <div>
                <Button
                  className="w-10 mt-0"
                  type="submit"
                  onSubmit={(e)=>{onSubmitAdresse(e)}}
                >
                  ok
                </Button>
              </div>
              <div>
                <Button className="w-10 mt-0" type="button ">
                  Enzel
                </Button>
              </div>
              <div>
                <Button className="w-10 mt-0" type="submit ">
                  Enzel
                </Button>
              </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MapInput;
