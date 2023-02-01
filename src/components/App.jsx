import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TableZone from "./Table";
import CircularProgress from '@mui/joy/CircularProgress';

function App() {
  const [players, setPlayers] = useState(null);
  const [refreshRate, setRefreshRate] = useState(1000);
  const [searchNickname, setSearchNickname] = useState("");

  useEffect(() => {
    if (refreshRate == 0) return;

    const refreshInterval = setInterval(() => {
      fetch("http://localhost:3001/ranking")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
      })
        .catch(error => console.error(error));
    }, refreshRate);
  
    return () => clearInterval(refreshInterval);
  }, [refreshRate]);

  return (
    <div>
      <Header setSearchNickname={setSearchNickname} setRefreshRate={setRefreshRate} refreshRate={refreshRate}/>
      {players != null ? <TableZone players={players} searchNickname={searchNickname} /> : 
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <CircularProgress color="danger" size="lg" />
      </div>}
      <Footer />
    </div>
  );
}

export default App;
