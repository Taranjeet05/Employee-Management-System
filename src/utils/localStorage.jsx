const employees = [
  {
    "id": 1,
    "firstName": "John",
    "email": "employee1@example.com",
    "password": "Password123",
    "taskSummary": {
      "totalTasks": 3,
      "active": 2,
      "newTask": 1,
      "completeTask": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": false,
        "completeTask": true,
        "failed": false,
        "taskTitle": "Task 1",
        "taskDescription": "Complete project report",
        "taskDate": "2024-10-21",
        "category": "Project"
      },
      {
        "taskNumber": 2,
        "active": true,
        "newTask": true,
        "completeTask": false,
        "failed": false,
        "taskTitle": "Task 2",
        "taskDescription": "Prepare presentation slides",
        "taskDate": "2024-10-22",
        "category": "Presentation"
      },
      {
        "taskNumber": 3,
        "active": false,
        "newTask": false,
        "completeTask": false,
        "failed": true,
        "taskTitle": "Task 3",
        "taskDescription": "Fix bugs in application",
        "taskDate": "2024-10-23",
        "category": "Development"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Jane",
    "email": "employee2@example.com",
    "password": "Password456",
    "taskSummary": {
      "totalTasks": 3,
      "active": 2,
      "newTask": 1,
      "completeTask": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completeTask": false,
        "failed": false,
        "taskTitle": "Task 1",
        "taskDescription": "Conduct market research",
        "taskDate": "2024-10-21",
        "category": "Research"
      },
      {
        "taskNumber": 2,
        "active": true,
        "newTask": false,
        "completeTask": false,
        "failed": false,
        "taskTitle": "Task 2",
        "taskDescription": "Prepare financial report",
        "taskDate": "2024-10-22",
        "category": "Finance"
      },
      {
        "taskNumber": 3,
        "active": false,
        "newTask": false,
        "completeTask": true,
        "failed": false,
        "taskTitle": "Task 3",
        "taskDescription": "Update website content",
        "taskDate": "2024-10-23",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Michael",
    "email": "employee3@example.com",
    "password": "Password789",
    "taskSummary": {
      "totalTasks": 3,
      "active": 2,
      "newTask": 1,
      "completeTask": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": true,
        "completeTask": false,
        "failed": false,
        "taskTitle": "Task 1",
        "taskDescription": "Develop new feature for app",
        "taskDate": "2024-10-21",
        "category": "Development"
      },
      {
        "taskNumber": 2,
        "active": true,
        "newTask": false,
        "completeTask": true,
        "failed": false,
        "taskTitle": "Task 2",
        "taskDescription": "Test application functionality",
        "taskDate": "2024-10-22",
        "category": "Testing"
      },
      {
        "taskNumber": 3,
        "active": false,
        "newTask": false,
        "completeTask": false,
        "failed": true,
        "taskTitle": "Task 3",
        "taskDescription": "Research new technologies",
        "taskDate": "2024-10-23",
        "category": "Research"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Sarah",
    "email": "employee4@example.com",
    "password": "Password101",
    "taskSummary": {
      "totalTasks": 3,
      "active": 2,
      "newTask": 1,
      "completeTask": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": false,
        "completeTask": true,
        "failed": false,
        "taskTitle": "Organize team meeting",
        "taskDescription": "Organize team meeting",
        "taskDate": "2024-10-21",
        "category": "Management"
      },
      {
        "taskNumber": 2,
        "active": true,
        "newTask": true,
        "completeTask": false,
        "failed": false,
        "taskTitle": "Write project proposal",
        "taskDescription": "Write project proposal",
        "taskDate": "2024-10-22",
        "category": "Project"
      },
      {
        "taskNumber": 3,
        "active": false,
        "newTask": false,
        "completeTask": false,
        "failed": true,
        "taskTitle": "Review team performance",
        "taskDescription": "Review team performance",
        "taskDate": "2024-10-23",
        "category": "Performance"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Emily",
    "email": "employee5@example.com",
    "password": "Password202",
    "taskSummary": {
      "totalTasks": 3,
      "active": 2,
      "newTask": 1,
      "completeTask": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "active": true,
        "newTask": false,
        "completeTask": false,
        "failed": false,
        "taskTitle": "Task 1",
        "taskDescription": "Update social media strategy",
        "taskDate": "2024-10-21",
        "category": "Marketing"
      },
      {
        "taskNumber": 2,
        "active": true,
        "newTask": true,
        "completeTask": false,
        "failed": false,
        "taskTitle": "Task 2",
        "taskDescription": "Create a blog post",
        "taskDate": "2024-10-22",
        "category": "Content"
      },
      {
        "taskNumber": 3,
        "active": false,
        "newTask": false,
        "completeTask": true,
        "failed": false,
        "taskTitle": "Task 3",
        "taskDescription": "Conduct user feedback sessions",
        "taskDate": "2024-10-23",
        "category": "Feedback"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "firstName": "Admin",
    "email": "admin@example.com",
    "password": "AdminPass123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};
