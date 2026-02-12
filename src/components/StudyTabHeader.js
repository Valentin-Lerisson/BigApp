import React from "react";
import { Stack, Box, Typography } from "@mui/material";

const StudyTabHeader = ({
  tabs,
  activeTab,
  onTabChange,
  getLabel,
  borderRadiusLarge,
}) => (
  <Stack direction="row" sx={{ width: "100%" }}>
    {tabs.map((id, index) => {
      const active = activeTab === id;
      return (
        <Box
          key={id}
          onClick={() => onTabChange(id)}
          sx={{
            flex: 1,
            textAlign: "center",
            py: 2,
            cursor: "pointer",
            borderRadius:
              index === 0
                ? `${borderRadiusLarge} 0 0 0`
                : index === tabs.length - 1
                  ? `0 ${borderRadiusLarge} 0 0`
                  : "0",
            bgcolor: active ? "white" : "rgba(255, 255, 255, 0.45)",
            border: active ? "1px solid #E0E4EC" : "1px solid transparent",
            borderBottom: "none",
            zIndex: active ? 2 : 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Neue Haas Grotesk Text Pro",
              fontSize: "15px",
              fontWeight: 600,
              color: "#5329C2",
              opacity: active ? 1 : 0.4,
            }}
          >
            {getLabel(id)}
          </Typography>
          {active && (
            <Box
              sx={{
                width: "40%",
                height: "1.5px",
                bgcolor: "#5329C2",
                mt: 0.5,
                borderRadius: "10px",
              }}
            />
          )}
        </Box>
      );
    })}
  </Stack>
);

export default StudyTabHeader;
