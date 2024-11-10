import TinderCard from "react-tinder-card";

export type ParkingLot  = {
  id: string;
  image: string;
  live_date: string;
  name: string;
  address: string;
}

interface ParkingLotProps {
  parkingLot: ParkingLot;
  onSwipe: (dir:any) => void;
  onCardLeftScreen: (name: string) => void;
}

const ParkingLotCard = (props: ParkingLotProps): JSX.Element => {
  const {parkingLot, onSwipe, onCardLeftScreen} = props;

  return (
    <TinderCard 
      className="flex flex-2 absolute"
      key={parkingLot.id}
      onSwipe={(dir) => onSwipe(dir)} 
      onCardLeftScreen={() => onCardLeftScreen(parkingLot.name)} 
      preventSwipe={['down', 'up']}
      >
        <div className="bg-white relative w-80vw max-w-72 h-96 rounded-3xl bg-cover bg-center shadow-md shadow-gray-400" style={{ backgroundImage: `url(${parkingLot.image})` }}>
          <div className="flex flex-col min-h-20 pr-4 rounded-b-3xl text-gray-800 bottom-0 w-full bg-gray-200/50 items-center absolute">
            <span>{parkingLot.name}</span>
            <span>{parkingLot.address}</span>
            <span className="text-xs">{parkingLot.live_date}</span>
          </div>
        </div>
    </TinderCard>
  )
}

export default ParkingLotCard;