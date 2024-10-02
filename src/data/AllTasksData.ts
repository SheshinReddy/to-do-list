import { Status, TaskData } from "../interfaces/taskInterface";

export const allTasksHeading: string[] = ["S.No.", "Task Name", "Status", "Priority", "Due Date", "Comments"];

export const allTasksData: TaskData[] = [
    {
        id: 1,
        taskName: "Buy groceries",
        currentStatus: Status.NotStarted,
        dueDate: "15/10/2023",
        comments: "Buy fruits and vegetables",
        createdTime: "10/10/2023 10:00:00",
        lastUpdatedTime: "10/10/2023 10:00:00",
        taskCategory: "Shopping",
        taskPriority: "Medium"
    },
    {
        id: 2,
        taskName: "Finish project report",
        currentStatus: Status.InProgress,
        dueDate: "20/10/2023",
        comments: "Complete the draft",
        createdTime: "12/10/2023 09:00:00",
        lastUpdatedTime: "14/10/2023 11:00:00",
        taskCategory: "Work",
        taskPriority: "High"
    },
    {
        id: 3,
        taskName: "Plan weekend trip",
        currentStatus: Status.NotStarted,
        dueDate: "18/10/2023",
        comments: "Look for destinations",
        createdTime: "11/10/2023 08:00:00",
        lastUpdatedTime: "11/10/2023 08:00:00",
        taskCategory: "Personal",
        taskPriority: "Low"
    },
    {
        id: 4,
        taskName: "Read a book",
        currentStatus: Status.NotStarted,
        dueDate: "25/10/2023",
        comments: "Start with 'Atomic Habits'",
        createdTime: "13/10/2023 07:00:00",
        lastUpdatedTime: "13/10/2023 07:00:00",
        taskCategory: "Personal",
        taskPriority: "Medium"
    },
    {
        id: 5,
        taskName: "Clean the house",
        currentStatus: Status.Completed,
        dueDate: "14/10/2023",
        comments: "Focus on the living room",
        createdTime: "09/10/2023 06:00:00",
        lastUpdatedTime: "14/10/2023 12:00:00",
        taskCategory: "Others",
        taskPriority: "High"
    }
];