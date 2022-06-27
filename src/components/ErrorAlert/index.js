import Alert from "@mui/material/Alert"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import AlertTitle from "@mui/material/AlertTitle"

export const ErrorAlert = ({ errormessage }) => {
  const handleReload = () => {
    window.location.reload(true)
  }

  return (
    <Stack sx={{ width: "100%", margin: "30px  auto 0 " }}>
      <Alert
        // variant="filled"
        severity="error"
        action={
          <Button color="inherit" onClick={handleReload}>
            Try again
          </Button>
        }
      >
        <AlertTitle>Error !</AlertTitle>
        {errormessage}
      </Alert>
    </Stack>
  )
}
