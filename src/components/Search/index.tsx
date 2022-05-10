import React from 'react'
import { useDispatch } from 'react-redux'

import SearchIcon from '@material-ui/icons/Search'
import { alpha, InputBase, makeStyles } from '@material-ui/core'
import { filterCountry } from '../../redux/actions'

const useStyles = makeStyles((theme) => ({
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: theme.shape.borderRadius,
    width: '25%',
  },
  input: {
    color: 'white',
    marginLeft: theme.spacing(2),
  },
}))

const Search = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const queryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterCountry(event.target.value))
  }

  return (
    <div className={classes.search}>
      <SearchIcon className="header__searchIcon" />
      <InputBase
        onChange={queryHandler}
        placeholder="Country..."
        className={classes.input}
      ></InputBase>
    </div>
  )
}

export default Search
