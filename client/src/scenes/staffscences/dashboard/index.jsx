import React from "react";
import FlexBetween from "components/componentsStaff/FlexBetween";
import Header from "components/componentsStaff/Header";
import { Traffic } from "@mui/icons-material";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useGetDashboardStaffStatsQuery } from "state/api";
import StatBox from "components/componentsStaff/StatBox";
import StaffChart from "../staffs/StaffChart";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data } = useGetDashboardStaffStatsQuery();

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
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
          title="Correctional Officers"
          value={data && data.category}
          increase="+84%"
          description="Today"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Wardens"
          value={data && data.manufacturer}
          increase="+91%"
          description="Today"
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
          <StaffChart view="staffchart" isDashboard={true} />
        </Box>

        <StatBox
          title="Administrative Staff"
          value={data && data.quantity}
          increase="+93%"
          description="Today"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Medical Staff"
          value={data && data.manufacturer}
          increase="+98%"
          description="Today"
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
            Total quantity
          </Typography>
          <br></br>

          <Typography
            p="0 0.6rem"
            fontSize="0.8rem"
            sx={{ color: theme.palette.secondary[200] }}
          >
            Staff attendance is crucial for organizations. It ensures smooth
            operations and task completion. Monitoring attendance helps identify
            absenteeism patterns and address issues. Accurate records aid in
            scheduling, calculating wages, and planning staffing. Attendance
            records are valuable for dispute resolution and legal matters. They
            ensure compliance with labor regulations and promote fairness.
            Overall, staff attendance is essential for productivity and
            effective workforce management.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
