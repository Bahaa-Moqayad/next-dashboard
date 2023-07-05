import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ChartBar as ChartBarIcon } from "../../icons/chart-bar";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import NavItem from "./NavItem";
import Image from "next/image";
const items = [
  {
    href: "/",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/header",
    icon: <ProductionQuantityLimitsIcon fontSize="small" />,
    title: "Header",
  },
  {
    href: "/teams",
    icon: <ProductionQuantityLimitsIcon fontSize="small" />,
    title: "Teams",
  },
  {
    href: "/faq",
    icon: <ProductionQuantityLimitsIcon fontSize="small" />,
    title: "FAQ",
  },
  {
    href: "/about",
    icon: <ProductionQuantityLimitsIcon fontSize="small" />,
    title: "About",
  },
  {
    href: "/features",
    icon: <ProductionQuantityLimitsIcon fontSize="small" />,
    title: "Features",
  },
  {
    href: "/messages",
    icon: <ProductionQuantityLimitsIcon fontSize="small" />,
    title: "Messages",
  },
];

export default function Sidebar(props) {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (open) {
      onClose?.();
    }
  }, [router.asPath]);

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box
          sx={{ p: 1 }}
          style={{
            background: "#fff",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <NextLink href="/" passHref>
              <Image
                src="/images/footer-logo.png"
                width={120}
                height={80}
                alt="test"
              />
            </NextLink>
          </Box>
        </Box>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <NavItem items={items} />
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
}

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
