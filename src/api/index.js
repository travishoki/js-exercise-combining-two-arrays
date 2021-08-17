const MOCK_SKATEBOARD_BRAND = [
  {
    id: 1,
    name: 'Hoki Skateboards'
  },
  {
    id: 2,
    name: 'Pixie Skateboards'
  },
  {
    id: 3,
    name: 'ABF Skate Lessons'
  },
  {
    id: 4,
    name: 'Zero Skateboards'
  },
  {
    id: 5,
    name: 'Santa Cruz Skateboards'
  },
];

const MOCK_SKATEBOARD_BRAND_LOCATIONS = [
  {
    id: 1,
    location: 'Utah'
  },
  {
    id: 2,
    location: 'Arizona'
  },
  {
    id: 4,
    location: 'California'
  },
  {
    id: 5,
    location: 'California'
  },
];

export const getSkateboardBrands = () => new Promise((resolve) => {
  resolve(MOCK_SKATEBOARD_BRAND);
});

export const getSkateboardBrandLocations = () => new Promise((resolve) => {
  resolve(MOCK_SKATEBOARD_BRAND_LOCATIONS);
});
