import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"

export const Loading = () => {
  return (
    <div>
      <Backdrop sx={{ color: "#fff" }} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}
