import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const CustomDropdown = ({ label, value, options }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexShrink: 0 }}>
      <Typography
        sx={{
          fontFamily: "Neue Haas Grotesk Text Pro",
          fontSize: "11px",
          color: "#3A3784",
          mb: 0.2,
          ml: 1.5,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </Typography>
      <Box
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          gap: 1,
          bgcolor: "#E0DDFB",
          px: 2,
          py: 0.5,
          borderRadius: "36px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Neue Haas Grotesk Text Pro",
            fontSize: "12px",
            fontWeight: 600,
            color: "#220996",
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </Typography>
        <KeyboardArrowDownIcon sx={{ fontSize: "14px", color: "#220996" }} />
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {options.map((opt) => (
          <MenuItem
            key={opt}
            onClick={() => setAnchorEl(null)}
            sx={{ fontSize: "12px", fontFamily: "Neue Haas Grotesk Text Pro" }}
          >
            {opt}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

const Topbar = () => {
  return (
    <Box
      sx={{
        bgcolor: "#F0F1FC",
        borderRadius: "35px",
        flexGrow: 1,
        height: "72px",
        display: "flex",
        alignItems: "center",
        border: "1px solid #E0E4EC",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          px: "25px",
          width: "100%",
          height: "100%",
          overflowX: "auto",
          maskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          "&::-webkit-scrollbar": { height: "3px" },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
            margin: "0 100px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(125, 77, 232, 0.3)",
            borderRadius: "10px",
          },
        }}
      >
        <Box
          component="img"
          src="/logo-interbio.png"
          sx={{ height: "40px", borderRadius: "8px", flexShrink: 0 }}
        />
        <Box sx={{ flexShrink: 0 }}>
          <Typography
            sx={{
              fontFamily: "Neue Haas Grotesk Text Pro",
              fontSize: "20px",
              fontWeight: 600,
              color: "#3A3784",
              whiteSpace: "nowrap",
            }}
          >
            Étude InternBio
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              color: "#3A3784",
              opacity: 0.7,
              whiteSpace: "nowrap",
            }}
          >
            Version V-1
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: "#947AD8", height: "30px", alignSelf: "center" }}
        />
        <CustomDropdown
          label="clés d’entrées"
          value="Mots clés"
          options={["Bio", "Prix"]}
        />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: "#947AD8", height: "30px", alignSelf: "center" }}
        />
        <CustomDropdown
          label="Zone"
          value="France"
          options={["France", "Espagne"]}
        />
        <Box sx={{ flexShrink: 0 }}>
          <Typography sx={{ fontSize: "10px", color: "#3A3784" }}>
            Volume
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: 600, color: "#220996" }}
          >
            1 542 256
          </Typography>
        </Box>
        <Button
          sx={{
            background: "linear-gradient(135deg, #691BFC, #171FE5)",
            height: "42px",
            borderRadius: "12px",
            color: "white",
            px: 2,
            ml: "auto",
            flexShrink: 0,
          }}
        >
          <FileDownloadIcon fontSize="small" />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
