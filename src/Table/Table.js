import { useEffect, useState } from 'react';

import {
  getSkateboardBrandLocations,
  getSkateboardBrands,
} from '../api';

const Table = () => {
  const [ brands, setBrands ] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    console.log('%c---- %s -----', 'font-size: 12px;', 'fetchData');
    Promise.all([
      getSkateboardBrands(),
      getSkateboardBrandLocations(),
    ])
    .then((values) => {
      console.log('-- response -- ');
      const [ brandData, brandLocationData ] = values;

      console.log('brandData:');
      console.dir(brandData);

      console.log('brandLocationData:');
      console.dir(brandLocationData);

      // Solution 1: O(nm)
      // for brandData
        // for brandLocation
          // if (brandData.id === brandLocation.id)
            // create newItem
            // newArra.push(newItem);

      // Solution 2: O(n+m)
      const dict = {};
      brandLocationData
        .filter((item) => !!item.location)
        .forEach((item) => {
          dict[item.id] = item;
        });
      const newBrandData = brandData
        .map((item) => ({
          ...item,
          ...dict[item.id],
        }));

      setBrands(newBrandData);
    });
  };

  return (
    <div>
      <h1>Skate Brands</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
