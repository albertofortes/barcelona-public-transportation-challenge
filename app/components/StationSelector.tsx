import { FC, ChangeEvent, useState, useEffect, useMemo } from 'react'
import { gql, useQuery} from '@apollo/client'
import { Autocomplete, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material'
import { AutocompleteStyled, StationSelectorStyled } from '../../styles/Components.styles'

type stopsAndstationsType = {
  stopsAndstations: any
}

const StationSelector: FC<stopsAndstationsType> = ({stopsAndstations}) => {
  const [ station, setStation ] = useState<string>(stopsAndstations[0].node.name);
  const [inputValue, setInputValue] = useState<string>('');
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  
  const handleStationChange = (e: ChangeEvent<{}>, value: any): void => {
    setStation(value)
    setOpenDialog(true)
  }
  const handleInputChange = (e: ChangeEvent<{}>, value: any): void => setInputValue(value)

  return (
    <>
      {/* Autocomplete types: seems that any is the only way to go: https://github.com/mui-org/material-ui/issues/19484 */}
      <StationSelectorStyled>
        <AutocompleteStyled
          disablePortal
          disableClearable
          value={station}
          onChange={handleStationChange}
          onInputChange={handleInputChange}
          inputValue={inputValue}
          options={stopsAndstations.map((station:any ) => station.node.name)}
          renderOption={(props: any, option: any) => <li {...props} key={props.id}>{option}</li>}
          renderInput={(params) => <TextField {...params} label="Busque su estación" />}
        />
      </StationSelectorStyled>
      
      {/* To DO: add the dialog in a separate component*/}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      >
        <DialogTitle>{station}</DialogTitle>
        <DialogContent><p>TO DO: poner si es una estación de metro o de bus, y el nombre y color de la línea.</p></DialogContent>
      </Dialog>
    </>
  )
}

export default StationSelector
