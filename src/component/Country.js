import styled from "styled-components";
import Card from "./Card";
import { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { Client } from './Client';

export default function Country({flag, CountryName}) {

  const [allData, setAllData] = useState([]);

	let space_id = "muz2113dk9y2";
	let access_token = "ng3MtA1yc1sXOmljgbbr-Ge7AmxrVZKtDwYu-ywRpes";
	let environment_id = "master";
	let content_type_id = "muz2113dk9y2";

    const fetchData = () => {
		Client.getEntries(`/spaces/${space_id}/environments/${environment_id}/content_types/${content_type_id}?access_token=${access_token}`)
		.then((contentType) => setAllData(contentType.items))
		.catch(console.error)
    }

    useEffect(() => {
        fetchData();
    }, [] )

    // console.log(allData[0].fields.countryName[0]);
//  allData.filter(e => (e.fields.title==='Roasted Squash with Thyme')).map(e => {console.log(e)})
//  const filtered=allData.filter(e => {
//    return e.fields.CountryName[0] === "UK"
//  }
  
//   );

//  console.log(filtered);

// console.log(allData[0].fields.countryName[0])

// console.log(CountryName)

  return (
    <CountryComponent>
      <CountryHeader>
        <Flag src={flag} alt="flag"/>
        <H1>{CountryName}</H1>
      </CountryHeader>]
      
    
      <CountryMain>
      {allData
      // .filter(e=>e.fields.countryName[0] === "India")
            
      .filter(e=>e.fields.title === "Roasted Squash with Thyme")

      .map(e => {

          return (

            <>
            
            <Card id={e.fields.id} foodType={e.fields.foodType} title={e.fields.title} description={e.fields.description} countryName={CountryName}/>

            </>
          )
        })}

        {/* <Card foodType="starters"/>
        <Card foodType="main" />
        <Card foodType="dessert" /> */}
      </CountryMain>
    </CountryComponent>
  );
}

const CountryComponent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // border: 1px solid red;
  padding: 10px;
`;

const CountryHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 30px;
  margin-top: 20px;
`;

const H1 = styled.h1`
  font-size: 4rem;
  margin: 0px 20px;
  font-weight: 800;
`;

const Flag = styled.img`
  border: 2px solid rgba(0,0,0, 0.1);
  width: 200px;
  height: auto;
  box-shadow: 0px 0px 3px rgba(0,0,0, 0.2);
`;

const CountryMain = styled.section`
  color: green;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  flex-direction: row;
  justify-content: space-around;
  padding: 30px;
`;
