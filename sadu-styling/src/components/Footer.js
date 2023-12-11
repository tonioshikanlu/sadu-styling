import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
        <a href='https://www.instagram.com/sadustyling/' target='_blank' rel='noopener noreferrer'>
            <MDBIcon fab icon='instagram' />
        </a>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Navigation</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/' className='text-white'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='/services' className='text-white'>
                    Services
                  </a>
                </li>
                <li>
                  <a href='/gallery' className='text-white'>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href='/contact' className='text-white'>
                    Contact
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Contact Us</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='contact@sadustyling.com' className='text-white'>
                    contact@sadustyling.com
                  </a>
                </li>
                <li>
                  <a href='/services' className='text-white'>
                    667-223-6732
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: Oshikanlu Web Designs
      </div>
    </MDBFooter>
  );
}