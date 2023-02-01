import { InputBase, Paper, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


function SearchBar(props) {
  return (
    <Paper className="search">
      <InputBase
        className="input"
        placeholder="Wyszukaj gracza"
        onChange={props.onChange}
      />
      <IconButton className="iconButton" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
