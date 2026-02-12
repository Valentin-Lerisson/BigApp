import React from "react";
import { Box, Typography, IconButton, Avatar, Badge } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ProfileBar = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: "35px",
        px: "20px",
        display: "flex",
        alignItems: "center",
        gap: 2,
        height: "72px",
        flexShrink: 0,
        boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
        border: "1px solid #E0E4EC",
      }}
    >
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
        sx={{
          "& .MuiBadge-badge": {
            bgcolor: "#44b700",
            border: "2px solid white",
          },
        }}
      >
        <Avatar src="/momo.png" sx={{ width: 42, height: 42 }} />
      </Badge>
      <Box sx={{ flexShrink: 0 }}>
        <Typography
          sx={{
            fontWeight: 700,
            color: "#1F203B",
            fontFamily: "Neue Haas Grotesk Text Pro",
          }}
        >
          Mohamed
        </Typography>
        <Typography sx={{ fontSize: "12px", opacity: 0.7 }}>Admin</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 0.5 }}>
        <IconButton size="small">
          <NotificationsNoneIcon />
        </IconButton>
        <IconButton size="small">
          <SettingsIcon />
        </IconButton>
        <IconButton size="small">
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProfileBar;
