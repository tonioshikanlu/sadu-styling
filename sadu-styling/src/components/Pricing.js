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
          <MDBCard>
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Lite Package</MDBCardTitle>
              <p className="text-muted">
                Perfect for events like work parties, baby showers etc.
              </p>
              <p className="h2 fw-bold">
                $300
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
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>1 Consultation</small>
                </li>
              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>

        <MDBCol xl="3">
          <MDBCard border="dark">
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Basic Package</MDBCardTitle>
              <p className="text-muted">
                Perfect for brides with a smaller wedding or on a tighter budget.
              </p>
              <p className="h2 fw-bold">
                $800

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
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>2 Consultations</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>2 Ceremonies</small>
                </li>
              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>

        <MDBCol xl="3">
          <MDBCard border="dark">
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Standard Package</MDBCardTitle>
              <p className="text-muted">
                Good value if you already have an idea of your looks.
              </p>
              <p className="h2 fw-bold">
                $1500

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
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>3 Consultations</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>3 Ceremonies</small>
                </li>

              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>

        <MDBCol xl="3">
          <MDBCard border="dark">
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Premium Package</MDBCardTitle>
              <p className="text-muted">
                Most elegant and premium service you can get!
              </p>
              <p className="h2 fw-bold">
                $2200
    
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
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>4 Consultations</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>4 Ceremonies</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
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