import { Typography } from '@mui/material'

const PageTitle = (props: {name: string}) => {
  return (
    <>
    <Typography fontWeight={700} variant="h4" component="h4" sx={{my: 2}}>
        {props.name}
    </Typography>
    </>
  )
}

export default PageTitle