import React, { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";

// PART OF INVENTORY ////////////////////////////////////////////
import LogIn from "./login/inventory/index.jsx";
import Layout from "scenes/scenes_inventory/layout";
import Dashboard from "scenes/scenes_inventory/dashboard";
import Inventories from "scenes/scenes_inventory/inventories";
import Medicine from "scenes/scenes_inventory/medicine";
import Food from "scenes/scenes_inventory/food";
import AddMedicine from "scenes/scenes_inventory/medicine/AddMedicine.jsx";
import EditMedicine from "scenes/scenes_inventory/medicine/EditMedicine.jsx";
import AddFood from "scenes/scenes_inventory/food/AddFood.jsx";
import EditFood from "scenes/scenes_inventory/food/EditFood.jsx";
import Status from "scenes/scenes_inventory/status";
import RequireAuth from "middleware/inventory/RequireAuth.js";
import RedirectIfAuthenticated from "middleware/inventory/RedirectedIfAuthenticated.js";

// PART OF STAFF /////////////////////////////////////////////////
import LogInStaff from "./login/staff/index.jsx";
import LayoutStaff from "scenes/staffscences/layout";
import DashboardStaff from "scenes/staffscences/dashboard";
import Staffs from "scenes/staffscences/staffs/index.jsx";
import AddStaffs from "scenes/staffscences/staffs/AddStaff.jsx";
import EditStaff from "scenes/staffscences/staffs/EditStaff";
import ResignationStaff from "scenes/staffscences/staffs/ResignationStaff";
import AddAttendance from "scenes/staffscences/staffs/AddAttendance";
import StaffChart from "scenes/staffscences/staffs/StaffChart.jsx";
import RequireAuth_staff from "middleware/staff/RequireAuth.js";
import RedirectIfAuthenticated_staff from "middleware/staff/RedirectedIfAuthenticated.js";

// PART OF PROFILE ///////////////////////////////////////////////
import LogInProfile from "./login/prisoner/index.jsx";
import LayoutProfile from "scenes/scenes_prisoner/layout";
import DashboardProfile from "scenes/scenes_prisoner/prisonerDashboard";
import ListofallPrisoners from "scenes/scenes_prisoner/listPrisoners/index.jsx";
import AddPrisoners from "scenes/scenes_prisoner/addPrisoners/index.jsx";
import StatusProfile from "scenes/scenes_prisoner/statusPrisoner/index.jsx";
import UpdatePrisoner from "scenes/scenes_prisoner/updatePrisoner/index.jsx";
import Profile from "scenes/scenes_prisoner/profile/index.jsx";
import RequireAuth_profile from "middleware/prisoner/RequireAuth.js";
import RedirectIfAuthenticated_profile from "middleware/prisoner/RedirectedIfAuthenticated.js";

// PART OF JAIL //////////////////////////////////////////////////
import LogInJail from "./login/jail/index.jsx";
import LayoutJail from "scenes/scenes_jail/layout";
import DashboardJail from "scenes/scenes_jail/dashboardJail/index.jsx";
import Jails from "scenes/scenes_jail/jails";
import Jailing from "scenes/scenes_jail/jailing/index.jsx";
import Category from "scenes/scenes_jail/category";
import AddJailing from "scenes/scenes_jail/jailing/AddJailing.jsx";
import EditJailing from "scenes/scenes_jail/jailing/EditJailing.jsx";
import AddCategory from "scenes/scenes_jail/category/AddCategory.jsx";
import Psychologist from "scenes/scenes_jail/psychologist";
import AddPsychologist from "scenes/scenes_jail/psychologist/AddPsychologist.jsx";
import EditPsychologist from "scenes/scenes_jail/psychologist/EditPsychologist.jsx";
import Situation from "scenes/scenes_jail/situation/index.jsx";
import RequireAuth_jail from "middleware/jail/RequireAuth.js";
import RedirectIfAuthenticated_jail from "middleware/jail/RedirectedIfAuthenticated.js";

/////////////////////////////////////////////////////////////////////
import Home from "./view/home/index.jsx";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} />

            {/**Inventory */}
            <Route
              path="/inventorylogin"
              element={<RedirectIfAuthenticated Component={LogIn} />}
            />
            <Route element={<RequireAuth Component={Layout} />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/inventories" element={<Inventories />} />
              <Route path="/food" element={<Food />} />
              <Route path="/medicine" element={<Medicine />} />
              <Route path="/status" element={<Status />} />
              <Route path="/addMedi" element={<AddMedicine />} />
              <Route path="/editMedi/:id" element={<EditMedicine />} />
              <Route path="/addFood" element={<AddFood />} />
              <Route path="/editFood/:id" element={<EditFood />} />
            </Route>

            {/**Staff */}
            <Route
              path="/stafflogin"
              element={<RedirectIfAuthenticated_staff Component={LogInStaff} />}
            />
            <Route element={<RequireAuth_staff Component={LayoutStaff} />}>
              <Route path="/staff dashboard" element={<DashboardStaff />} />
              <Route path="/Display  Staff Details" element={<Staffs />} />
              <Route path="/Add Staff Member" element={<AddStaffs />} />
              <Route path="/Edit/:_id" element={<EditStaff />} />
              <Route path="/Staff Report" element={<StaffChart />} />
              <Route path="/Resignation/:_id" element={<ResignationStaff />} />
              <Route path="/Discard" element={<Staffs />} />
              <Route
                path="/staff attendance/:_id"
                element={<AddAttendance />}
              />
            </Route>

            {/**Profile */}
            <Route
              path="/profilelogin"
              element={
                <RedirectIfAuthenticated_profile Component={LogInProfile} />
              }
            />
            <Route element={<RequireAuth_profile Component={LayoutProfile} />}>
              <Route
                path="/prisoner dashboard"
                element={<DashboardProfile />}
              />
              <Route path="/listPrisoners" element={<ListofallPrisoners />} />
              <Route path="/addPrisoners" element={<AddPrisoners />} />
              <Route path="/status prisoner" element={<StatusProfile />} />
              <Route path="/updatePrisoner/:id" element={<UpdatePrisoner />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Route>

            {/**Jail */}
            <Route
              path="/jaillogin"
              element={<RedirectIfAuthenticated_jail Component={LogInJail} />}
            />
            <Route element={<RequireAuth_jail Component={LayoutJail} />}>
              <Route path="jail dashboard" element={<DashboardJail />} />
              <Route path="/jails" element={<Jails />} />
              <Route path="/jailing" element={<Jailing />} />
              <Route path="/category" element={<Category />} />
              <Route path="/psychologist" element={<Psychologist />} />
              <Route path="/addJailing" element={<AddJailing />} />
              <Route path="/editJailing/:id" element={<EditJailing />} />
              <Route path="/addcategory" element={<AddCategory />} />
              <Route path="/addPsycholo" element={<AddPsychologist />} />
              <Route path="/editPsycholo/:id" element={<EditPsychologist />} />
              <Route path="/situation" element={<Situation />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
