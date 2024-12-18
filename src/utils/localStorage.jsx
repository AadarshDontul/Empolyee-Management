const employee = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e1@e.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI Design",
        taskDescription: "Design the user interface for the login page",
        taskDate: "2024-12-10",
        category: "UI/UX",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review the code for the new API endpoints",
        taskDate: "2024-12-11",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Write test cases for the payment module",
        taskDate: "2024-12-12",
        category: "QA",
      },
    ],
  },
  {
    id: 2,
    firstName: "Isha",
    email: "e2@e.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Documentation",
        taskDescription: "Prepare project documentation for the dashboard module",
        taskDate: "2024-12-10",
        category: "Documentation",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Feature Implementation",
        taskDescription: "Add sorting functionality to the employee table",
        taskDate: "2024-12-13",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Fix issue with login timeout",
        taskDate: "2024-12-15",
        category: "QA",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Research",
        taskDescription: "Research new technologies for the upcoming project",
        taskDate: "2024-12-20",
        category: "Research",
      },
    ],
  },
  {
    id: 3,
    firstName: "Karan",
    email: "e3@e.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Prepare presentation for team meeting",
        taskDate: "2024-12-09",
        category: "Management",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database Optimization",
        taskDescription: "Optimize the queries for the reports section",
        taskDate: "2024-12-15",
        category: "Database",
      },
    ],
  },
  {
    id: 4,
    firstName: "Meera",
    email: "e4@e.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Marketing Campaign",
        taskDescription: "Plan marketing strategy for the new feature launch",
        taskDate: "2024-12-08",
        category: "Marketing",
      },
    ],
  },
  {
    id: 5,
    firstName: "Rohan",
    email: "e5@e.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Customer Support",
        taskDescription: "Resolve support tickets assigned for December",
        taskDate: "2024-12-09",
        category: "Support",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Feature Demo",
        taskDescription: "Give a demo of the new analytics module",
        taskDate: "2024-12-15",
        category: "Presentation",
      },
    ],
  },
];

  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];
  
  export const setLocalStorage = () => {
    localStorage.setItem("employee",JSON.stringify(employee));
    localStorage.setItem("admin",JSON.stringify(admin));
  }

  export const getLocalStorage = () => {
    const employeeData = JSON.parse(localStorage.getItem("employee"))
    const adminData = JSON.parse(localStorage.getItem("admin"))
    return {employeeData, adminData}
  }
  