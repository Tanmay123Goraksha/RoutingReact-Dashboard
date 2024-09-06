import React from 'react';
import styled from 'styled-components';
import { QRCodeSVG } from 'qrcode.react';

// Styled components
const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: #000;
  color: #fff;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const BackArrow = styled.a`
  font-size: 24px;
  color: #fff;
  text-decoration: none;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const MoreOptions = styled.span`
  font-size: 24px;
`;

const MuseumImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const TicketDetails = styled.div`
  background-color: #fff;
  color: #000;
  padding: 20px;
  border-radius: 20px 20px 0 0;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const DetailIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Hr = styled.hr`
  border-top: 1px dotted #6e6c6c;
`;

const QRCodeWrapper = styled.div`
  display: flex;
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  padding-left: 5px;
`;

const BookingId = styled.div`
  font-size: 14px;
  margin-top: 10px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const ActionButton = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  text-decoration: none;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #008080;
    transform: scale(1.1);
  }
`;

const ActionIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 5px;
`;

const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-weight: bold;
`;

const Footer = styled.div`
  box-sizing: border-box;
  max-width: 400px;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #008080;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const FooterButton = styled.a`
  color: #fff;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #d68c1c;
    transform: scale(1.1);
  }
`;

const FooterIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 5px;
`;

// Main component
const TicketBookingInterface = () => {
  return (
    <Container>
      <Header>
        <BackArrow href="#">←</BackArrow>
        <Title>Ticket details</Title>
        <MoreOptions>...</MoreOptions>
      </Header>
      <MuseumImage src="images/MusuemImage.jpg" alt="Kerala Folklore Museum" />
      <TicketDetails>
        <DetailItem>
          <DetailIcon src="images/location.svg" alt="Location" />
          <span>Kerala Folklore Museum</span>
        </DetailItem>
        <DetailItem>
          <DetailIcon src="images/calendar.svg" alt="Date" />
          <span>5th September, 2024</span>
        </DetailItem>
        <DetailItem>
          <DetailIcon src="images/clock.svg" alt="Time" />
          <span>4:00 PM to 5:00 PM</span>
        </DetailItem>
        <Hr />
        <QRCodeWrapper>
          <QRCodeSVG value="https://example.com/ticket/HELLO12" size={128} />
          <BookingId>
            VIP Ticket<br />BOOKING ID: HELLO12
          </BookingId>
        </QRCodeWrapper>
        <Actions>
          <ActionButton href="#">
            <ActionIcon src="images/ticket.svg" alt="Cancel" />
            <span>Cancel Booking</span>
          </ActionButton>
          <ActionButton href="#">
            <ActionIcon src="images/phone.svg" alt="Contact" />
            <span>Contact us</span>
          </ActionButton>
        </Actions>
        <TotalAmount>
          <span>Total Amount</span>
          <span>Rs. 500 ▼</span>
        </TotalAmount>
      </TicketDetails>
      <Footer>
        <FooterButton href="#">
          <FooterIcon src="images/home.svg" alt="Home" />
          <span>Home</span>
        </FooterButton>
        <FooterButton href="/form">
          <FooterIcon src="images/menu.svg" alt="Menu" />
          <span>Menu</span>
        </FooterButton>
      </Footer>
    </Container>
  );
};

export default TicketBookingInterface;