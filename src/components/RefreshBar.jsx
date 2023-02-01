import { InputBase, Paper } from "@mui/material";

function RefreshBar(props) {
  return (
    <Paper className="refresh">
      <InputBase
        className="input"
        onChange={props.setRefreshRate}
        value={props.refreshRate}
      />
    </Paper>
  );
};

export default RefreshBar;