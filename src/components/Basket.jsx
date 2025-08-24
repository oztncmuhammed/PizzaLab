import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";

// Badge konumunu biraz yukarı ve sağa alıyoruz
const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -5px;
    right: -5px;
  }
`;

export default function Basket({ basketItemCount }) {
  const navigate = useNavigate();

  return (
    <IconButton
      onClick={() => navigate("/basket")}
      size="large"
      color="inherit"
    >
      <CartBadge
        badgeContent={basketItemCount}
        color="primary"
        overlap="circular"
      >
        <ShoppingCartIcon fontSize="medium" />
      </CartBadge>
    </IconButton>
  );
}
