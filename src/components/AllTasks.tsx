import React from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import StatusCell from './StatusCell';
import { allTasksHeading } from '../data/AllTasksData';
import { getAllTasksData } from '../services/TasksDataServices';

const allTasks = getAllTasksData();

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
                    {allTasks.map((task, key) => (
                        <TableRow key={key}>
                            <TableCell>{++key}</TableCell>
                            <TableCell>{task.taskName}</TableCell>
                            <StatusCell CurrentStatus={task.currentStatus} />
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