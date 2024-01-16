import NextLink from "next/link";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  ClearOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { UiContext } from "@/context";

export const Navbar = () => {
  const { toggleSideMenu } = useContext(UiContext);
  const { asPath, push } = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;

    push(`/search/${searchTerm}`);
  };

  return (
    <AppBar>
      <Toolbar>
        <NextLink href={"/"} passHref>
          <Box display="flex" alignItems="center">
            <Typography variant="h6"> Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Box>
        </NextLink>

        <Box flex={1} />
        <Box
          sx={{
            display: isSearchVisible ? "none" : { xs: "none", sm: "block" },
          }}
        >
          <NextLink href={"/category/men"} passHref>
            <Button color={asPath === "/category/men" ? "primary" : "info"}>
              Hombres
            </Button>
          </NextLink>
          <NextLink href={"/category/women"} passHref>
            <Button color={asPath === "/category/women" ? "primary" : "info"}>
              Mujeres
            </Button>
          </NextLink>
          <NextLink href={"/category/kid"} passHref>
            <Button color={asPath === "/category/kid" ? "primary" : "info"}>
              Niños
            </Button>
          </NextLink>
        </Box>

        <Box flex={1} />

        {isSearchVisible ? (
          <Input
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
            className="fadeIn"
            value={searchTerm}
            autoFocus
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            onKeyPress={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
            placeholder="Buscar..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={onSearchTerm}
                >
                  <ClearOutlined
                    onClick={() => setIsSearchVisible(false)}
                    className="fadeIn"
                  />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <IconButton
            sx={{ display: { xs: "none", sm: "flex" } }}
            onClick={() => setIsSearchVisible(true)}
          >
            <SearchOutlined />
          </IconButton>
        )}

        {/* Pantallas pequeñas */}
        <IconButton
          onClick={toggleSideMenu}
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <SearchOutlined />
        </IconButton>

        <NextLink href={"/cart"} passHref>
          <IconButton>
            <Badge badgeContent={2} color="primary">
              <ShoppingBagOutlined />
            </Badge>
          </IconButton>
        </NextLink>

        <Button onClick={toggleSideMenu}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
