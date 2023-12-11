import React from "react";
import {
  MDBContainer,
  MDBBtnGroup,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBTypography,
  MDBIcon,
  MDBCardTitle,
} from "mdb-react-ui-kit";

export default function Pricing() {
  return (
    <MDBContainer className="py-5 ">

      <MDBRow>
        <MDBCol md="3">
          <MDBCard>
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Lite Package</MDBCardTitle>
              <p className="text-muted">
                Perfect for one-off events eg. work parties, baby showers, photo shoots etc.
              </p>
              <p className="h2 fw-bold">
                $300
              </p>
              <MDBBtn
                href="#"
                color="dark"
                className="d-block mb-2 mt-3 text-capitalize"
              >
                Buy Hobby
              </MDBBtn>
            </MDBCardBody>

            <MDBCardFooter>
              <p
                className="text-uppercase fw-bold"
                style={{ fontSize: "12px" }}
              >
                What's included
              </p>

              <MDBTypography listUnStyled className="mb-0 px-4">
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>

        <MDBCol md="3">
          <MDBCard border="dark">
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Basic Package</MDBCardTitle>
              <p className="text-muted">
                Perfect for brides on a budget.
              </p>
              <p className="h2 fw-bold">
                $800

              </p>
              <MDBBtn
                href="#"
                color="dark"
                className="d-block mb-2 mt-3 text-capitalize"
              >
                Buy Freelancer
              </MDBBtn>
            </MDBCardBody>

            <MDBCardFooter>
              <p
                className="text-uppercase fw-bold"
                style={{ fontSize: "12px" }}
              >
                What's included
              </p>

              <MDBTypography listUnStyled className="mb-0 px-4">
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>

        <MDBCol md="3">
          <MDBCard border="dark">
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Standard Package</MDBCardTitle>
              <p className="text-muted">
                All the essentials for starting a business
              </p>
              <p className="h2 fw-bold">
                $1500

              </p>
              <MDBBtn
                href="#"
                color="dark"
                className="d-block mb-2 mt-3 text-capitalize"
              >
                Buy Startup
              </MDBBtn>
            </MDBCardBody>

            <MDBCardFooter>
              <p
                className="text-uppercase fw-bold"
                style={{ fontSize: "12px" }}
              >
                What's included
              </p>

              <MDBTypography listUnStyled className="mb-0 px-4">
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>

        <MDBCol md="3">
          <MDBCard border="dark">
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Premium Package</MDBCardTitle>
              <p className="text-muted">
                All the essentials for starting a business
              </p>
              <p className="h2 fw-bold">
                $2200
    
              </p>
              <MDBBtn
                href="#"
                color="dark"
                className="d-block mb-2 mt-3 text-capitalize"
              >
                Buy Enterprise
              </MDBBtn>
            </MDBCardBody>

            <MDBCardFooter>
              <p
                className="text-uppercase fw-bold"
                style={{ fontSize: "12px" }}
              >
                What's included
              </p>

              <MDBTypography listUnStyled className="mb-0 px-4">
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}