import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSearchId } from '../../redux/reducers/searchIdReducer';
import { fetchTickets } from '../../redux/reducers/ticketReducer';
import ServerError from '../ErrorHandler/ErrorHandler';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import Sorting from '../Sorting/Sorting';
import StopsFilter from '../StopsFilter/StopsFilter';
import TicketList from '../TicketList/TicketList';

import classes from './App.module.scss';

function App() {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.searchId);
  const isLoading = useSelector((state) => state.tickets.isLoading);

  useEffect(() => {
    dispatch(fetchSearchId());
  }, []);

  useEffect(() => {
    if (id !== undefined) dispatch(fetchTickets(id));
  }, [id]);

  const loading = isLoading ? <Loading /> : null;

  return (
    <main className={classes.main}>
      <Header />
      <ServerError />
      <div className={classes.container}>
        <div className={classes.leftColumn}>
          <StopsFilter />
        </div>
        <div className={classes.rightColumn}>
          <Sorting />
          {loading}
          <TicketList />
        </div>
      </div>
    </main>
  );
}

export default App;
