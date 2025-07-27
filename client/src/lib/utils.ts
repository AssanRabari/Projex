import { GridColDef } from "@mui/x-data-grid";

export const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const DARK_MODE_COLORS = {
  bar: "#8884d8",
  barGrid: "#303030",
  pieFill: "#4A90E2",
  text: "#FFFFFF",
};

export const NORMAL_COLORS = {
  bar: "#8884d8",
  barGrid: "#E0E0E0",
  pieFill: "#82ca9d",
  text: "#000000",
};

export const PROJECT_STATUS = {
  Active: "Active",
  Completed: "Completed",
};

export const PROJECT_TABS = {
  BOARD: "Board",
  LIST: "List",
  TIMELINE: "Timeline",
  TABLE: "Table",
} as const;

export const TASK_STATUS = [
  "To Do",
  "Work In Progress",
  "Under Review",
  "Completed",
];

export const TASK_PRIORITY = {
  URGENT: "Urgent",
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
} as const;

export const CONST_USER = {
  username: "asan",
  email: "asan.das@example.com",
  teamName: "Development Team",
  roleName: "Developer",
};

//MUI Grids
export const TEAMS_COLUMNS: GridColDef[] = [
  { field: "id", headerName: "Team ID", width: 100 },
  { field: "teamName", headerName: "Team Name", width: 200 },
  { field: "productOwnerUserName", headerName: "Product Owner", width: 200 },
  {
    field: "projectManagerUserName",
    headerName: "Project Manager",
    width: 200,
  },
];

export const TASK_COLUMNS: GridColDef[] = [
  { field: "title", headerName: "Title", width: 200 },
  { field: "status", headerName: "Status", width: 150 },
  { field: "priority", headerName: "Priority", width: 150 },
  { field: "dueDate", headerName: "Due Date", width: 150 },
];

export const dataGridSxStyles = (isDarkMode: boolean) => {
  return {
    "& .MuiDataGrid-columnHeaders": {
      color: `${isDarkMode ? "#e5e7eb" : ""}`,
      '& [role="row"] > *': {
        backgroundColor: `${isDarkMode ? "#1d1f21" : "white"}`,
        borderColor: `${isDarkMode ? "#2d3135" : ""}`,
      },
    },
    "& .MuiIconbutton-root": {
      color: `${isDarkMode ? "#a3a3a3" : ""}`,
    },
    "& .MuiTablePagination-root": {
      color: `${isDarkMode ? "#a3a3a3" : ""}`,
    },
    "& .MuiTablePagination-selectIcon": {
      color: `${isDarkMode ? "#a3a3a3" : ""}`,
    },
    "& .MuiDataGrid-cell": {
      border: "none",
    },
    "& .MuiDataGrid-row": {
      borderBottom: `1px solid ${isDarkMode ? "#2d3135" : "e5e7eb"}`,
    },
    "& .MuiDataGrid-withBorderColor": {
      borderColor: `${isDarkMode ? "#2d3135" : "e5e7eb"}`,
    },
  };
};

//styles
export const labelStyles = "block text-sm font-medium dark:text-white";

export const textStyles =
  "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:text-white";

export const inputStyles =
  "w-full rounded border border-gray-300 p-2 shadow-sm dark:border-dark-tertiary dark:bg-dark-tertiary dark:text-white dark:focus:outline-none";

export const selectStyles =
  "mb-4 block w-full rounded border border-gray-300 px-3 py-2 dark:border-dark-tertiary dark:bg-dark-tertiary dark:text-white dark:focus:outline-none";

export const dataGridClassNames =
  "border border-gray-200 bg-white shadow dark:border-stroke-dark dark:bg-dark-secondary dark:text-gray-200";
