const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "Password123",
    "tasks": [
      {
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
    "email": "employee2@example.com",
    "password": "Password456",
    "tasks": [
      {
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
    "email": "employee3@example.com",
    "password": "Password789",
    "tasks": [
      {
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
    "email": "employee4@example.com",
    "password": "Password101",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completeTask": true,
        "failed": false,
        "taskTitle": "Task 1",
        "taskDescription": "Organize team meeting",
        "taskDate": "2024-10-21",
        "category": "Management"
      },
      {
        "active": true,
        "newTask": true,
        "completeTask": false,
        "failed": false,
        "taskTitle": "Task 2",
        "taskDescription": "Write project proposal",
        "taskDate": "2024-10-22",
        "category": "Project"
      },
      {
        "active": false,
        "newTask": false,
        "completeTask": false,
        "failed": true,
        "taskTitle": "Task 3",
        "taskDescription": "Review team performance",
        "taskDate": "2024-10-23",
        "category": "Performance"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "Password202",
    "tasks": [
      {
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

const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "AdminPass123"
}
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin)) 
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  console.log((employees, admin));
}