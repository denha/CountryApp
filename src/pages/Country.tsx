import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import CountryDetails from '../components/Country'
import { CircularProgress, Paper } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'
import { countryAttributeFetch } from '../redux/actions'
import { AppState } from '../types'

const Country = () => {
  const { id } = useParams<{ id: string }>()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(countryAttributeFetch(id))
  }, [dispatch, id])

  const { data, error, loading } = useSelector(
    (state: AppState) => state.countryAttribute
  )
  return (
    <Paper elevation={0} className="country" variant="outlined" square>
      {loading && (
        <div>
          <CircularProgress></CircularProgress>
        </div>
      )}
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Error — <strong>{error}!</strong>
        </Alert>
      )}
      <CountryDetails data={data}></CountryDetails>
    </Paper>
  )
}
export default Country
