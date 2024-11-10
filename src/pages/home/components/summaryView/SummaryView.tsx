import React, { useState } from 'react';

interface ParkingLot {
  id: string;
  name: string;
  address: string;
  image: string;
}

interface SummaryViewProps {
  goodParkingLots: ParkingLot[];
  badParkingLots: ParkingLot[];
}

const ParkingLotItem = ({item}: {item:ParkingLot}) => {
  return (
    <div className='flex flex-col w-30 h-30 m-2 '>
      <img className='flex w-20 h-20 place-self-center' src={item.image} />
        <span className='text-xs font-semibold'>{item.name}</span>
        <span className='text-xs max-w-20 text-wrap font-extralight'>{item.address}</span>
    </div>
  )
}

const SummaryView: React.FC<SummaryViewProps> = ({ goodParkingLots, badParkingLots }) => {
  const [filter, setFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');

  const filterAndSortLots = (lots: ParkingLot[]) => {
    return lots
      .filter((lot) => lot.name.toLowerCase().includes(filter.toLowerCase()) || lot.address.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  };

  const filteredGoodParkingLots = filterAndSortLots(goodParkingLots);
  const filteredBadParkingLots = filterAndSortLots(badParkingLots);

  return (
    <div className='flex flex-col w-3/4 justify-center items-center'>
      <div className="mb-4 ">
        <input
          type="text"
          placeholder="Filter by name or address"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-2 py-1 border rounded"
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="ml-2 px-2 py-1 border rounded">
          <option value="name">Name</option>
          <option value="address">Address</option>
        </select>
      </div>
      <h2 className='w-full justify-center flex animate-pulse text-stone-800'>Good parking Lots</h2>
      <div className='flex flex-row overflow-x-auto overflow-x-scroll'>
        {filteredGoodParkingLots.map((lot) => (
          <ParkingLotItem key={lot.id} item={lot} />
        ))}
      </div>
      <h2 className='w-full justify-center flex animate-pulse text-stone-800'>Bad Parking Lots</h2>
      <div className='flex flex-row'>
        {filteredBadParkingLots.map((lot) => (
           <ParkingLotItem key={lot.id} item={lot} />
        ))}
      </div>
    </div>
  );
};

export default SummaryView;