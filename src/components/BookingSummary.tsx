import React from 'react';
import styled from "@emotion/styled";

export const BookingSummary = () => (
    <Container>
        <div>תאריכי המפגשים</div>
        <div>ימי שלישי בשעה 13:00</div>
        <div>11.5 11.5 11.5 11.5 11.5 11.5 11.5 11.5</div>
    </Container>
);

const Container = styled.div`
  margin: auto;
  text-align: center;
  margin-top: 16px;
`;