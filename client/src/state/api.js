import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}`,
    credentials: "include",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": `${process.env.REACT_APP_BASE_URL}`,
    },
  }),

  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Inventories",
    "Medicine",
    "Food",
    "Status",
    "Dashboard",
    //Staff
    "Staff",
    "Attendance",
    "Staff Dashboard",
    //Profile
    "listPrisoners",
    "addPrisoners",
    "updatePrisoner",
    "Status Prisoner",
    "prisonerDashboard",
    "deletePrisoner",
    //Jail
    "Jails",
    "Jailing",
    "Category",
    "Psychologist",
    "Situation",
    "Jail Dashboard",
  ],

  //Inventory
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),

    getInventories: build.query({
      query: () => "client/inventories",
      providesTags: ["Inventories"],
    }),

    getMedicines: build.query({
      query: () => "client/medicines",
      providesTags: ["Medicine"],
    }),

    getFoods: build.query({
      query: () => "client/foods",
      providesTags: ["Food"],
    }),

    getStatus: build.query({
      query: () => "status/status",
      providesTags: ["Status"],
    }),

    getDashboardStats: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),

    //Staff
    getStaffs: build.query({
      query: () => "client/staffs/",
      providesTags: ["Staff"],
    }),
    getAttendance: build.query({
      query: () => "client/attendances",
      providesTags: ["Attendance"],
    }),
    getDashboardStaffStats: build.query({
      query: () => "general/dashboard",
      providesTags: ["Staff Dashboard"],
    }),

    //Profile
    getallPrisoners: build.query({
      query: () => "prisoner/prisoners",
      providesTags: ["allPrisoners"],
    }),

    getaddPrisoners: build.query({
      query: () => "prisoner/pri",
      providesTags: ["addPrisoners"],
    }),

    getupdatePrisoner: build.query({
      query: () => "prisoner/updatePrisoner",
      providesTags: ["updatePrisoner"],
    }),
    getstatusPrisoner: build.query({
      query: () => "status/prisoner",
      providesTags: ["Status Prisoner"],
    }),
    getprisonerDashboardStats: build.query({
      query: () => "general/prisonerDashboard",
      providesTags: ["Prisoner Dashboard"],
    }),
    getdeletePrisoner: build.query({
      query: () => "prisoner/deletePrisoner",
      providesTags: ["deletePrisoner"],
    }),
    //Jail
    getJails: build.query({
      query: () => "client/jailings/",
      providesTags: ["Jails"],
    }),

    getJailing: build.query({
      query: () => "client/jailings",
      providesTags: ["Jailing"],
    }),

    getCategories: build.query({
      query: () => "client/categories",
      providesTags: ["Category"],
    }),

    getPsychologist: build.query({
      query: () => "client/psychologists",
      providesTags: ["Psychologist"],
    }),

    getSituation: build.query({
      query: () => "situation/situations",
      providesTags: ["Situation"],
    }),

    getDashboardJail: build.query({
      query: () => "general/dashboard",
      providesTags: ["Jail Dashboard"],
    }),
  }),
});

export const {
  //Inventory
  useGetUserQuery,
  useGetInventoriesQuery,
  useGetMedicinesQuery,
  useGetFoodsQuery,
  useGetStatusQuery,
  useGetDashboardStatsQuery,
  //Staff
  useGetStaffsQuery,
  useGetAttendanceQuery,
  useGetDashboardStaffStatsQuery,
  //Profile
  useGetallPrisonersQuery,
  useGetaddPrisonersQuery,
  useGetstatusPrisonerQuery,
  useGetupdatePrisonerQuery,
  useGetprisonerDashboardStatsQuery,
  useGetdeletePrisonerQuery,
  //Jail
  useGetPsychologistQuery,
  useGetJailsQuery,
  useGetJailingQuery,
  useGetCategoriesQuery,
  useGetSituationQuery,
  useGetDashboardJailQuery,
} = api;
