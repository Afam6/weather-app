import React from 'react';
import { render } from '@testing-library/react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Cities from './components/Cities';

const cities = [
  {
    id: 1,
    name: 'city1',
    weather: [
      {
        description: 'clear sky'
      }
    ],
    main: {
      temp: 3.53
    },
    wind: {
      speed: 0.6
    }
  },
  {
    id: 2,
    name: 'city2',
    weather: [
      {
        description: 'few clouds'
      }
    ],
    main: {
      temp: 13.53
    },
    wind: {
      speed: 3.4
    }
  }
];

test('renders header component', () => {
  const { getByText } = render(<Header />);
  const headerElement = getByText(/weather in australia/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders footer component', () => {
  const { getByText } = render(<Footer />);
  const footerElement = getByText(/design by afam ezechukwu/i);
  expect(footerElement).toBeInTheDocument();
});

test('renders city name and rounds temperature correctly', () => {
  const { getByText } = render(<Cities cities={cities} />);
  const elem = getByText('city1 / 4°');
  expect(elem).toBeInTheDocument();
});

test('renders city name and rounds temperature correctly', () => {
  const { getByText } = render(<Cities cities={cities} />);
  const elem = getByText('city2 / 14°');
  expect(elem).toBeInTheDocument();
});

test('renders title case of weather description correctly', () => {
  const { getByText } = render(<Cities cities={cities} />);
  const elem = getByText('Few Clouds');
  expect(elem).toBeInTheDocument();
});
