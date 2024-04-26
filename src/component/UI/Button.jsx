import styled, { css } from "styled-components";
import PropTypes from "prop-types";

export const Button = ({ children, variant }) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};

const Button_Styled = {
  outlined: {
    default: "#ffff",
    active: "#0052bc",
  },
  contained: {
    default: "#217cf3",
    active: "rgb(9, 94, 205)",
    hover: "#4e87d2",
  },
  Warning: {
    default: "#ff7b00",
    active: "#b94101",
    hover: "#e3954c",
  },
  Danger: {
    default: "#ff0000",
    active: "#bd0202",
    hover: "#e85151",
  },
};

const Button_border = {
  outlined: {
    default: "1px solid #0052bc",
    active: "#0052bc",
    hover: "3px solid #0052bc",
  },
  contained: {
    default: "none",
  },
  Warning: {
    default: "none",
  },
  Danger: {
    default: "none",
  },
};
const Button_color = {
  outlined: {
    default: "#0052bc",
    active: "#ffff",
    hover: " #0052bc",
  },
  contained: {
    default: "#ffffff",
    active: "#ffffff",
    hover: "#ffffff",
  },
  Warning: {
    default: "#ffffff",
    active: "#ffffff",
    hover: "#ffffff",
  },
  Danger: {
    default: "#ffffff",
    active: "#ffffff",
    hover: "#ffffff",
  },
};

function getVariant(prop) {
  const initVatiant = Button_Styled[prop.variant];

  return css`
    background-color: ${initVatiant.default};
    &:hover {
      background-color: ${initVatiant.hover};
    }
    &:active {
      background-color: ${initVatiant.active};
    }
  `;
}
function getVariantButton(prop) {
  const initVatiantBorder = Button_border[prop.variant];

  return css`
    border: ${initVatiantBorder.default};
    &:hover {
      border: ${initVatiantBorder.hover};
    }
    &:active {
      border: ${initVatiantBorder.active};
    }
  `;
}
function getVariantColor(prop) {
  const initVatiantaColor = Button_color[prop.variant];

  return css`
    color: ${initVatiantaColor.default};
    &:hover {
      color: ${initVatiantaColor.hover};
    }
    &:active {
      color: ${initVatiantaColor.active};
    }
  `;
}

const StyledButton = styled.button`
  ${getVariantButton}
  ${getVariant}
  ${getVariantColor}
  padding: 10px 30px;
  border-radius: 5px;
  font-size: 25px;
`;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.func.isRequired,
};
