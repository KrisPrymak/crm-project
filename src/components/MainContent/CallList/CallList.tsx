import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CallReceivedIcon from '@mui/icons-material/CallReceived';

import { useAppDispatch, useAppSelector } from '../../../store/store';
import { getCalls } from '../../../store/callsSlice';
import { getTimeFormat } from '../../../helpers/getTimeFormat';
import { getTimeFromDate } from '../../../helpers/getTimeFromDate';
import { formatPhoneNumber } from '../../../helpers/formatPhoneNumber';
import { filterCalls } from '../../../helpers/filterCalls';
import { getRequestObjectDate } from '../../../helpers/getRequestObjectDate';
import Preloader from '../../common/Preloader';
import { cellsData } from '../../../helpers/LocalDatas';

import style from './CallList.module.css';
import Audio from './Audio/Audio';

const CallList = () => {
    const loadingStatus = useAppSelector(state => state.callsSlice.status);

    const dispatch = useAppDispatch();
    const currEndDate = useAppSelector(state => state.filterSlice.currEndDate);
    const currTimespan = useAppSelector(state => state.filterSlice.timespan);

    React.useEffect(() => {
        dispatch(getCalls(getRequestObjectDate(currEndDate, currTimespan)));
    }, [currEndDate, currTimespan, dispatch]);

    const currentFilter = useAppSelector(state => state.filterSlice.currentSelectCalls);
    const callListMiddleData = useAppSelector(state => state.callsSlice.calls);

    const callListData = filterCalls(callListMiddleData, currentFilter);

    const getCallArrow = (in_out: number, status: string) => {
        if (in_out) {
            if (status === 'Дозвонился') {
                return <ArrowOutwardIcon style={{ color: 'var(--main-blue)' }} />;
            } else {
                return <ArrowOutwardIcon style={{ color: 'var(--red)' }} />;
            }
        } else {
            if (status === 'Не дозвонился') {
                return <CallReceivedIcon style={{ color: 'var(--red)' }} />;
            } else {
                return <CallReceivedIcon style={{ color: 'var(--green)' }} />;
            }
        }
    };
    return (
        <TableContainer component={Paper} style={{ padding: '26px 40px' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {cellsData.map(item => {
                            return (
                                <TableCell
                                    style={{ color: 'var(--text-header)' }}
                                    key={item.id} align={item.text === 'Длительность' ? 'right' : 'left'}
                                >{item.text}</TableCell>
                            );
                        })}
                    </TableRow>
                </TableHead>
                {loadingStatus === 'pending' 
                    ?
                    <Preloader />
                    :  
                    <TableBody>
                        {callListData && callListData.map((call) => (
                            <TableRow
                                key={call.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" component="th" scope="row">
                                    {getCallArrow(call.in_out, call.status)}
                                </TableCell>
                                <TableCell align="left">{getTimeFromDate(call.date)}</TableCell>
                                <TableCell align="left">
                                    <img src={`${call.person_avatar || 'https://lk.skilla.ru/img/noavatar.jpg'}`} alt="Avatar" />
                                </TableCell>
                                <TableCell align="left" className={style.phone}>{formatPhoneNumber(call.partner_data.phone)}</TableCell>
                                <TableCell align="left">{call.source}</TableCell>
                                <TableCell align="left" style={{ color: 'var(--red)' }}>{call.errors}</TableCell>
                                <TableCell align="left">
                                    {call.record
                    &&
                    <Audio record={call.record} partnership_id={call.partnership_id} time={getTimeFormat(call.time)} />}
                                </TableCell>
                                <TableCell align="right">{getTimeFormat(call.time)}</TableCell>
                            </TableRow>
                        ))
                        }
                    </TableBody>
                }
            </Table>
        </TableContainer>
    );
};

export default CallList;