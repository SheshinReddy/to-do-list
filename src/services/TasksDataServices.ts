import { allTasksData } from "../data/AllTasksData";
import { TaskData } from "../interfaces/taskInterface";

export function getAllTasksData(): TaskData[] {
    return allTasksData;
}

export function addTask(task: TaskData) {
    allTasksData.push(task);
}