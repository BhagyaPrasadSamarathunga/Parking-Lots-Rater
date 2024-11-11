import React from 'react';
import { render } from '@testing-library/react';
import SummaryView from '../../src/pages/home/components/summaryView/SummaryView';

const goodLotsList = [ 
    {
        "id": "0945f12b-5b44-428d-aec5-df703dfadeb6",
        "image": "https://images.freeimages.com/images/large-previews/e8e/underground-parking-1206464.jpg",
        "live_date": "2021-01-01",
        "name": "Lot Munich 29",
        "size": 25,
        "address": "Verdistrasse 209, 81257 München",
        "__typename": "Lot"
    },
    {
        "id": "0ef7ff09-b32e-43e6-ab58-95b6c0a39b4a",
        "image": "https://images.freeimages.com/images/large-previews/e8e/underground-parking-1206464.jpg",
        "live_date": "2020-11-03",
        "name": "Lot Munich 26",
        "size": 25,
        "address": "Verdistrasse 26, 81257 München",
        "__typename": "Lot"
    },];
const badLotsList = [
    {
        "id": "15800269-f4ac-4e83-9bfe-e3da470075d0",
        "image": "https://images.freeimages.com/images/large-previews/68d/narrow-street-1204865.jpg",
        "live_date": "2021-06-01",
        "name": "Lot Munich 30",
        "size": 25,
        "address": "Amalienburgstr. 130, 81247 München",
        "__typename": "Lot"
    },
    {
        "id": "19d9fb52-d0b3-43b0-8c38-1a4a8b9caa5b",
        "image": "https://images.freeimages.com/images/large-previews/e8e/underground-parking-1206464.jpg",
        "live_date": "2020-10-04",
        "name": "Lot Munich 24",
        "size": 25,
        "address": "Verdistrasse 90, 81257 München",
        "__typename": "Lot"
    },
    {
        "id": "2ba3887e-8db6-4173-8e48-d76cccfa8454",
        "image": "https://images.freeimages.com/images/large-previews/e8e/underground-parking-1206464.jpg",
        "live_date": null,
        "name": "Lot Munich 36",
        "size": 25,
        "address": "Verdistrasse 146 81257 München",
        "__typename": "Lot"
    }];
    
describe('Summary View component', () => {
    test('matches snapshot', () => {
      const { asFragment } = render(<SummaryView goodParkingLots={goodLotsList} badParkingLots ={badLotsList}/>);
      expect(asFragment()).toMatchSnapshot();
    });
  });