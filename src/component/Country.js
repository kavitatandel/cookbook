import styled from "styled-components";
import Card from "./Card";
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router';
import { Client } from './Client';
import * as contentful from 'contentful'

export default function Country({ flag, CountryName }) {

  const location = useLocation();
  const newLocation = location.pathname.slice(1);
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  let space_id = "muz2113dk9y2";
  let access_token = "ng3MtA1yc1sXOmljgbbr-Ge7AmxrVZKtDwYu-ywRpes";
  let environment_id = "master";
  let content_type_id = "cookbookproject";

  const fetchData = async () => {
    try {
      await Client.getEntries({ content_type: 'cookbookproject' })
        .then((contentType) => {
          setAllData(contentType.items)
          console.log(contentType.items)

          setLoading(false);
        }
        )

    }
    catch (error) {
      setError(true);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])


  if (loading) return <h1>Page is loading</h1>
  if (error) return <h1>There is an error occured. Please try again later....</h1>
  return (

    <>
      <CountryComponent>
        <CountryHeader>
          <Flag src={flag} alt="flag" />
          <H1>{CountryName}</H1>
        </CountryHeader>


        <CountryMain>
          {allData
            .filter(e => e.fields.countryName[0].toUpperCase() === newLocation.toUpperCase())

            .map(e => {

              return (

                <>

                  <Card id={e.fields.id} sysId={e.sys.id} foodType={e.fields.foodType} title={e.fields.title} description={e.fields.description} image={e.fields.image.fields.file.url} countryName={CountryName} />

                </>
              )
            })}

        </CountryMain>
      </CountryComponent>
    </>

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
