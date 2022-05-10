import React from 'react'
import { useHistory } from 'react-router-dom'

import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import Card from '@material-ui/core/Card'

const CountryDetails = ({ data }: any) => {
  const history = useHistory()

  return (
    <>
      {data[0]?.map((data: any) => (
        <Card style={{ width: '400px' }} key={data.name.common}>
          <CardMedia
            component="img"
            image={data.flags.png}
            alt={`${data.name.common} Flag`}
            style={{ height: '250px' }}
          ></CardMedia>
          <CardContent>
            <div className="country__details">
              <Typography>
                <strong>Name</strong>{' '}
              </Typography>
              <Typography>{data.name.common} </Typography>
            </div>
            <div className="country__details">
              <Typography>
                <strong>Capital City</strong>{' '}
              </Typography>
              <Typography>{data.capital} </Typography>
            </div>
            <div className="country__details">
              <Typography>
                <strong>Population</strong>{' '}
              </Typography>
              <Typography>{data.population.toLocaleString('en-US')}</Typography>
            </div>
            <div className="country__details">
              <Typography>
                <strong>Region</strong>
              </Typography>
              <Typography>{data.region} </Typography>
            </div>
          </CardContent>

          <CardActions>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              onClick={() => history.goBack()}
            >
              BACK
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  )
}

export default CountryDetails
