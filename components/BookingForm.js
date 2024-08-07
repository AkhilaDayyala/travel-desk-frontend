import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;
    font-size: ${({ theme }) => theme.fontSizes.small};
    transition: border-color 0.3s;

    &:focus {
      border-color: ${({ theme }) => theme.colors.secondary};
      outline: none;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.05);
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const BookingForm = () => {
    const [destination, setDestination] = useState('');
    const [dates, setDates] = useState({ start: '', end: '' });
    const [guests, setGuests] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement booking logic here
    };

    return (
        <FormWrapper>
            <h2>Book Your Trip</h2>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <label htmlFor="destination">Destination:</label>
                    <input
                        id="destination"
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="start-date">Start Date:</label>
                    <input
                        id="start-date"
                        type="date"
                        value={dates.start}
                        onChange={(e) => setDates({ ...dates, start: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="end-date">End Date:</label>
                    <input
                        id="end-date"
                        type="date"
                        value={dates.end}
                        onChange={(e) => setDates({ ...dates, end: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="guests">Number of Guests:</label>
                    <input
                        id="guests"
                        type="number"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        min="1"
                    />
                </FormGroup>
                <SubmitButton type="submit">Book Now</SubmitButton>
            </form>
        </FormWrapper>
    );
};

export default BookingForm;
