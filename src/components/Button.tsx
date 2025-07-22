import { Button as MuiButton, Theme} from "@mui/material";
import styled from '@emotion/styled';

type ButtonProps = {
  onClick?: () => void;
  text: string
};

type StyledProps = {
  theme?: Theme
}

const Button = (props : ButtonProps) => {
  return (
    <StyledButton {...props}>
      {props.text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled(MuiButton)<StyledProps>(({theme}) => ({
  color: theme.palette.common.black,
  backgroundColor: theme.palette.common.white,
  //padding: theme.spacing(1),
  //borderRadius: theme.shape.borderRadius,
}));