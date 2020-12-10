import { Box, IconButton, Tooltip, Typography } from '@material-ui/core';
import { format, formatDistance } from 'date-fns';
import React from 'react';
import RingLoader from "react-spinners/RingLoader";
import { AiFillCheckCircle } from 'react-icons/ai';
import { BsCheckAll } from 'react-icons/bs';

export default function App () {
  const [{ data, status }, setState] = React.useState({
    data: null,
    status: 'initial'
  });

  const updateState = React.useCallback(handle => {
    setState(oldState => {
      let newState = handle;
      if (handle.constructor === Function) newState = handle(oldState);

      return {
        ...oldState,
        ...newState
      };
    });
  }, []);

  const markTodoAsComplete = React.useCallback(targetId => {
    updateState(({ data }) => ({
      data: data.map(todo => {
        if (todo.id !== targetId) return todo;
  
        return {
          ...todo,
          completedAt: new Date().toISOString()
        };
      })
    }));
  }, [updateState]);

  const fetchData = React.useCallback(async () => {
    try {
      updateState({ status: 'fetching' });

      const response = await xhr('/all-todos');
      const data = await response.json();

      updateState({
        status: 'fetchSuccess',
        data
      });
    } catch (error) {
      console.error(error);
    }
  }, [updateState]);

  React.useEffect(() => {
    if (data === null && status === 'initial') fetchData();
  }, [data, status, fetchData]);

  if (status === 'fetching' || data === null && status === 'initial') {
    return (
      <Box marginTop={20} display="flex" flex={1} justifyContent="center" alignItems="center">
        <RingLoader size={150} color="#123abc" loading />
      </Box>
    );
  }

  return (
    <Box marginTop={10} display="flex" flexDirection="column" flex={1} justifyContent="center" alignItems="center">
      <Box>
        {data.map(({ id, title, completedAt, createdAt }) => {
          const date = new Date(completedAt || createdAt);

          function completeTodo () {
            markTodoAsComplete(id);
          }

          return (
            <Box
              key={id}
              border="1px solid #d0d1d5"
              padding={1}
              marginBottom={1}
              borderRadius={4}
              display="flex"
              alignItems="flex-start"
              justifyContent="space-between"
            >
              <Box marginRight={1}>
                <Typography style={{ textDecoration: completedAt && 'line-through' }}>
                  {title}
                </Typography>
                <Tooltip title={format(date, 'PPp')}>
                  <Typography variant="caption">
                    {completedAt ? 'Completed ' : 'Created '}
                    {formatDistance(date, new Date())}
                  </Typography>
                </Tooltip>
              </Box>
              {!completedAt ? (
                <IconButton size="small" color="primary" onClick={completeTodo}>
                  <AiFillCheckCircle />
                </IconButton>
              ) : (
                <BsCheckAll />
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

// returns fake data for the sake of example
function xhr () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        status: 200,
        json: () => ([
          {
            id: '1',
            title: 'Get my dream career!',
            completedAt: '2020-12-10T13:39:57.472Z',
            createdAt: '2020-12-10T11:26:46.485Z'
          },
          {
            id: '2',
            title: 'Build a multi-million dollar company 😎',
            completedAt: null,
            createdAt: '2020-12-10T11:26:46.485Z'
          },
          {
            id: '3',
            title: 'Buy a house',
            completedAt: null,
            createdAt: '2020-12-10T11:26:46.485Z'
          },
          {
            id: '4',
            title: 'Buy a car',
            completedAt: null,
            createdAt: '2020-12-10T11:26:46.485Z'
          },
          {
            id: '5',
            title: 'Get a beautiful wife 😉',
            completedAt: null,
            createdAt: '2020-12-10T11:26:46.485Z'
          },
          {
            id: '6',
            title: 'Get married (with my beautiful wife 😉)',
            completedAt: null,
            createdAt: '2020-12-10T11:26:46.485Z'
          },
          {
            id: '7',
            title: 'Have first child (with my beautiful wife 😉)',
            completedAt: null,
            createdAt: '2020-12-10T11:26:46.485Z'
          },
          {
            id: '8',
            title: 'Buy another house',
            completedAt: null,
            createdAt: '2020-12-10T11:26:46.485Z'
          },
          {
            id: '9',
            title: 'Buy another car',
            completedAt: null,
            createdAt: '2020-12-10T11:26:46.485Z'
          }
        ])
      });
    }, 3000);
  });
}
