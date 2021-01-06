import styled, { keyframes } from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SCALES = {
  sm: 0.7,
  md: 1,
  lg: 1.3,
};

const scaleSize = ({ size = "md" }) => SCALES[size];

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingButton = styled(AiOutlineLoading3Quarters)`
  animation: ${rotate} 1s ease infinite;
`;

const StyledButton = styled.button`
  background-color: purple;
  outline: none;
  border: none;
  padding: 10px 20px;
  text-transform: lowercase;
  color: #fff;
  transition: all 0.23s ease;
  margin: 15px 0;
  cursor: pointer;
  transform: scale(${scaleSize});
  &:hover {
    background-color: magenta;
  }
`;

const Button = ({ children, loading, ...rest }) => (
  <StyledButton {...rest}>
    {loading ? <LoadingButton /> : <span>{children}</span>}
  </StyledButton>
);

export default Button;