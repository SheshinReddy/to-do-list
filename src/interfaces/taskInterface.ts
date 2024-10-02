export interface TaskData {
    id: number;
    taskName: string;
    currentStatus: Status; //should be enum with values: "Not Started", "In Progress", "Completed" and have a default value
    dueDate?: string; //should be in format: "dd/mm/yyyy"
    comments?: string;
    createdTime: string; //should be in format: "dd/mm/yyyy hh:mm:ss"
    lastUpdatedTime?: string; //should be in format: "dd/mm/yyyy hh:mm:ss"
    taskCategory?: string; //should be enum with values: "Personal", "Work", "Shopping", "Others" and have a default value
    taskPriority: string; //should be enum with values: "Low", "Medium", "High" and have a default value
};
export enum Status {
    NotStarted = "Not Started",
    InProgress = "In Progress",
    Completed = "Completed"
};