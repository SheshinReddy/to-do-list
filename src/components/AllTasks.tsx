import React from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const allTasksHeading: string[] = ["S.No.", "Task Name", "Status", "Priority", "Due Date", "Comments"];

export interface TaskData {
    id: number;
    taskName: string;
    status: string; //should be enum with values: "Not Started", "In Progress", "Completed" and have a default value
    dueDate?: string; //should be in format: "dd/mm/yyyy"
    comments?: string;
    createdTime: string; //should be in format: "dd/mm/yyyy hh:mm:ss"
    lastUpdatedTime?: string; //should be in format: "dd/mm/yyyy hh:mm:ss"
    taskCategory?: string; //should be enum with values: "Personal", "Work", "Shopping", "Others" and have a default value
    taskPriority: string; //should be enum with values: "Low", "Medium", "High" and have a default value
};

export const allTasksData: TaskData[] = [
    {
        id: 1,
        taskName: "Buy groceries",
        status: "Not Started",
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
        status: "In Progress",
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
        status: "Not Started",
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
        status: "Not Started",
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
        status: "Completed",
        dueDate: "14/10/2023",
        comments: "Focus on the living room",
        createdTime: "09/10/2023 06:00:00",
        lastUpdatedTime: "14/10/2023 12:00:00",
        taskCategory: "Others",
        taskPriority: "High"
    }
];

function AllTasks() {
  return (
    <Container className='AllTasks'>
        <Table>
            <TableHead>
                <TableRow>
                    {allTasksHeading.map((heading) => (
                        <TableCell>{heading}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {allTasksData.map((task, key) => (
                    <TableRow key={key}>
                        <TableCell>{++key}</TableCell>
                        <TableCell>{task.taskName}</TableCell>
                        <TableCell>{task.status}</TableCell>
                        <TableCell>{task.taskPriority}</TableCell>
                        <TableCell>{task.dueDate}</TableCell>
                        <TableCell>{task.comments}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Container>
  );
}

export default AllTasks;