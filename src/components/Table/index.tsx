import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableSortLabel,
  Button,
} from '@material-ui/core'
import Link from '@material-ui/core/Link'
import { addToCart, sortCountry } from '../../redux/actions'
import { AppState } from '../../types'

const DataTable = ({ data }: any) => {
  const { order } = useSelector((state: AppState) => state.nation)
  const { nation } = useSelector((state: AppState) => state.cart)
  const dispatch = useDispatch()
  return (
    <TableContainer>
      <Table aria-label="Table containing all countries in the world">
        <TableHead>
          <TableRow>
            <TableCell>Flag</TableCell>
            <TableCell>
              <TableSortLabel
                onClick={() => dispatch(sortCountry())}
                active={true}
                direction={order ? 'asc' : 'desc'}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell>Capital</TableCell>
            <TableCell>Popluation</TableCell>
            <TableCell>Region</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data[0]?.map((data: any) => (
            <TableRow key={data.name.common}>
              <TableCell>
                <img
                  src={data.flags.png}
                  style={{ width: '40px', height: '20px' }}
                  alt={data.name.common}
                />
              </TableCell>
              <TableCell>
                <Link href={`/country/${data.name.common}`} color="inherit">
                  {data.name.common}
                </Link>
              </TableCell>
              <TableCell>{data.capital}</TableCell>
              <TableCell>{data.population.toLocaleString('en-US')}</TableCell>
              <TableCell>{data.region}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={nation.some(
                    (nationData) => nationData.name === data.name.common
                  )}
                  size="medium"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        name: data.name.common,
                        flag: data.flags.png,
                      })
                    )
                  }
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable
