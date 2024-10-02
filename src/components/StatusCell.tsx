import { MenuItem, Select, SelectChangeEvent, TableCell } from '@mui/material';
import React, { useState } from 'react';
import { Status } from '../interfaces/taskInterface';

interface StatusCellProps {
    CurrentStatus: Status;
};

function StatusCell (currentStatus: StatusCellProps) {
    const [status, setStatus] = useState(currentStatus.CurrentStatus);

    const handleChange = (event: SelectChangeEvent<Status>) => {
        setStatus(event.target.value as Status);
    };
    return (
        <TableCell>
            <Select
                value={status}
                onChange={handleChange}
            >
                <MenuItem value={Status.NotStarted}>{Status.NotStarted}</MenuItem>
                <MenuItem value={Status.InProgress}>{Status.InProgress}</MenuItem>
                <MenuItem value={Status.Completed}>{Status.Completed}</MenuItem>
            </Select>
        </TableCell>
    )
};

export default StatusCell;