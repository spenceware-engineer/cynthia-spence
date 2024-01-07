import { Button } from '@mui/material'

const CustomButton = (props) => {
  const mapProps = {
    href: props.link,
    startIcon: props.icon,
    onClick: props.handleClick
  }

  return (
    <Button
      style={props?.style ? props.style : {}}
      variant="contained"
      {...mapProps}
    >
      {props.label}
    </Button>
  )
}

export default CustomButton
