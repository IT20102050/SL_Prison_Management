import React from "react";
import FlexBetween from "components/com_jail/FlexBetween";
import Header from "components/com_jail/Header";
import {
  Traffic,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGetDashboardJailQuery } from "state/api";
import StatBox from "components/com_jail/StatBox";
import Status from "../situation";


const Jail_Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data } = useGetDashboardJailQuery();
 
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Jail Dashboard" subtitle="Welcome to your dashboard" />
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="Crime"
          value={data && data.category}
          increase="+14%"
          description="Since last month"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Robbery"
          value={data && data.manufacturer}
          increase="+21%"
          description="Since last month"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <Box
          gridColumn="span 8"
          gridRow="span 4"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <Status view="situation" isDashboard={true} />
        </Box>
        <StatBox
          title="Child Abuse"
          value={data && data.status}
          increase="+5%"
          description="Since last month"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Violance"
          value={data && data.quantity}
          increase="+43%"
          description="Since last month"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* ROW 2 */}

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
            Category Compared With Psychologists
          </Typography><br></br>

          <Typography
            p="0 0.6rem"
            fontSize="0.8rem"
            sx={{ color: theme.palette.secondary[200] }}
          >
            Breakdown of real states and information via category for jail and psychologist
            using to get records.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Jail_Dashboard;
