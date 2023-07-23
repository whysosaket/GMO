import { Typography } from '@mui/material'

const PageTitle = (props: {name: string}) => {
  return (
    <>
    <Typography fontWeight={700} variant="h2" component="h2" sx={{my: 2}}>
        {props.name}
    </Typography>
    </>
  )
}

export default PageTitle