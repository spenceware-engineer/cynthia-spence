import { Button } from '@mui/material'

const CustomButton = (props) => {
  let menuProps = {}
  if (props.ariaControls) {
    menuProps = {
      "aria-controls": props.ariaControls,
      "aria-haspopup": props.hasPopup,
      "aria-expanded": props.ariaExpanded,
    }
  }

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
      {...menuProps}
    >
      {props.label}
    </Button>
  )
}

export default CustomButton
