import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PARKING_LOTS } from "../../../../graphql/queries";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import ParkingLotCard, {ParkingLot} from "../parkingLot/ParkingLot";
import SummaryView from "../summaryView/SummaryView";

const TinderView = (): JSX.Element => {
  const [parkingLots, setParkingLots] = useState<ParkingLot[]>([]);
  const [currentDisplayIndex, setCurrentDisplayIndex] = useState<number>(0);
  const [goodLotsList, setGoodLotsList] = useState<ParkingLot[]>([]);
  const [badLotsList, setBadLotsList] = useState<ParkingLot[]>([]);
  const [offSet, setOffSet] = useState<number>(0);
  const [isSummaryViewEnable, setIsSummaryViewEnable] = useState<boolean>(false);
  const { loading, error, data } = useQuery(GET_PARKING_LOTS, {
    variables: { limit: 5, offset: offSet },
  });
  
  
  let totalOffset = 0;
  const onSwipe = (direction: any, currentLot:ParkingLot) => {
    console.log("direction --->", direction);
    
    if(direction === 'right') {
      console.log("good lots --->", goodLotsList);
      
      setGoodLotsList([...goodLotsList, currentLot]);
    } else {
      setBadLotsList([...badLotsList, currentLot]);
    }
  }
  
  const onCardLeftScreen = (lotId: string) => {
    console.log(lotId + ' left the screen');
    setCurrentDisplayIndex(currentDisplayIndex+1);
  }
  const handelSessionEnd = () => {
    setIsSummaryViewEnable(true);
  }
  useEffect(() => {
    if(data) {
      const parkingLotsList = [...parkingLots, ...data.getAllParkingLots];
      setParkingLots(parkingLotsList);
    }
  },[data, loading]);

  useEffect(() => {
    if (totalOffset !== 0){
      console.log('OFFSET');
    setOffSet(offSet + 5);
  }
  },[totalOffset]);

  useEffect(() => {
    if(parkingLots && currentDisplayIndex === (parkingLots.length - 1)) {
      setOffSet(offSet+5);
    }
  },[currentDisplayIndex])

  return (
    <>
    {!isSummaryViewEnable ?
      <div className="flex flex-col w-full h-3/4 ">
        <div className="flex flex-col w-full h-full items-center justify-center ">
          {parkingLots && parkingLots.map((CurrentParkingLot)=>
          <ParkingLotCard 
            parkingLot={CurrentParkingLot} 
            onSwipe={(dir) => onSwipe(dir, CurrentParkingLot)} 
            onCardLeftScreen={() => onCardLeftScreen(CurrentParkingLot.id)} 
          />
          )}
        </div>
        <div className="flex w-full h-20 place-content-around relative bottom-0 ">
          <div className="flex flex-1 place-content-end pr-20" >
            <div className="flex w-10 h-10 rounded-full justify-center items-center bg-gray-200 border-4 border-gray-400" >
              <Close color="error" sx={{fontSize: 28 }} />
            </div>
          </div>
          <div className="flex flex-1 place-content-start pl-20">
            <div className="flex w-10 h-10 rounded-full justify-center items-center bg-gray-200 border-4 border-gray-400" >
              <FavoriteIcon color="success" sx={{fontSize: 28 }} /> 
            </div>
          </div>
        </div>
        <div className="self-center">
            <Button variant="contained" onClick={handelSessionEnd}>Show Summary</Button>
        </div>
      </div> :
      <SummaryView goodParkingLots={goodLotsList} badParkingLots ={badLotsList}/>
      }
    </>

  )
}

export default TinderView;