import React from "react";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SearchBar from "./SearchBar";
import RefreshBar from "./RefreshBar";


function Header(props) {
  function handleSearch(event) {
    props.setSearchNickname(event.target.value);
  }

  function handleRefresh(event) {
    props.setRefreshRate(event.target.value);
  }

  return (
    <header>
      <h1>
        <SportsEsportsIcon /> Ranking Graczy 
      </h1>
      <div>
        <SearchBar onChange={handleSearch} />
      </div>

      <div><label>Częstotliwość odświeżania (ms):</label></div>
      <div><RefreshBar setRefreshRate={handleRefresh} refreshRate={props.refreshRate} /></div>

    </header>
  );
}

export default Header;
