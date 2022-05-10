import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../../Layouts/Header'
import DataTable from '../../components/Table'
import { AppState } from '../../types'
import { fetchNations } from '../../redux/actions/nation'
import { CircularProgress, Paper } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { AlertTitle } from '@material-ui/lab'

const Home = () => {
  const { loading, data, isError, error } = useSelector(
    (state: AppState) => state.nation
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNations())
  }, [dispatch])

  return (
    <Paper elevation={0} component="main" className="home">
      <Header></Header>
      <div className="home__dataTable">
        {loading && (
          <div className="home__logo">
            <CircularProgress></CircularProgress>
          </div>
        )}

        {isError && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Error — <strong>{error}!</strong>
          </Alert>
        )}
        <DataTable data={data}></DataTable>
      </div>
    </Paper>
  )
}

export default Home
