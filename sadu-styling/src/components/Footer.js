import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
} from 'mdb-react-ui-kit';
import NewsletterForm from './Newsletter';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
        <a href='https://www.instagram.com/sadustyling/' target='_blank' rel='noopener noreferrer'>
            <MDBIcon fab icon='instagram' />
        </a>
        </section>

        <section>
          <NewsletterForm/> 
        </section>

      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright Oshikanlu Web Designs
      </div>
    </MDBFooter>
  );
}