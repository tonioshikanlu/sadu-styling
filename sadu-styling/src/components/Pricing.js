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
        <MDBCol xl="3">
        <MDBCard style={{ borderRadius: '25px' }}>
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Lite Package</MDBCardTitle>
              <p className="text-muted">
                Perfect for one-off events like work parties, baby showers, photoshoots etc.
              </p>
              <MDBBtn
                href="mailto:contact@sadustyling.com?subject=Lite Package Request"
                color="dark"
                className="d-block mb-2 mt-3 text-capitalize"
            >
                Request Lite
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
                  <MDBIcon fas icon="check" className="text-grey me-3" />
                  <small>1 Consultation</small>
                </li>
              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>

        <MDBCol xl="3">
          <MDBCard style={{ borderRadius: '25px' }}>
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Basic Package</MDBCardTitle>
              <p className="text-muted">
              Good value if you already have an idea of your style.
              </p>
              <MDBBtn
                href="mailto:contact@sadustyling.com?subject=Basic Package Request"
                color="dark"
                className="d-block mb-2 mt-3 text-capitalize"
              >
                Request Basic
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
                  <MDBIcon fas icon="check" className="text-grey me-3" />
                  <small>2 Consultations</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-grey me-3" />
                  <small>2 Events</small>
                </li>
              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>

        <MDBCol xl="3">
          <MDBCard style={{ borderRadius: '25px' }}>
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Standard Package</MDBCardTitle>
              <p className="text-muted">
                Not sure where to start? This is the package for you!
              </p>
 
              <MDBBtn
                href="mailto:contact@sadustyling.com?subject=Standard Package Request"
                color="dark"
                className="d-block mb-2 mt-3 text-capitalize"
              >
                Request Standard
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
                  <MDBIcon fas icon="check" className="text-grey me-3" />
                  <small>3 Consultations</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-grey me-3" />
                  <small>3 Events</small>
                </li>

              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>

        <MDBCol xl="3">
          <MDBCard style={{ borderRadius: '25px' }}>
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Premium Package</MDBCardTitle>
              <p className="text-muted">
                Ideal for those that want that extra attention.
              </p>
         
              <MDBBtn
                href="mailto:contact@sadustyling.com?subject=Premium Package Request"
                color="dark"
                className="d-block mb-2 mt-3 text-capitalize"
              >
                Request Premium
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
                  <MDBIcon fas icon="check" className="text-grey me-3" />
                  <small>Unlimited Consultations</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-grey me-3" />
                  <small>4 Events</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-grey me-3" />
                  <small>On-site styling</small>
                </li>
              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

