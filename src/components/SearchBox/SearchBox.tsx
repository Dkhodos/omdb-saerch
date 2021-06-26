import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface Props {
    query: string
    suggestions?: string[]
    onChange: (query: string) => void
    placeholder?: string
    label?: string
}

const SearchBox: React.FC<Props> = ({suggestions, query, onChange,placeholder="Search...",label = "Search"}) => {
    return (
        <Autocomplete
            freeSolo
            disableClearable
            options={suggestions ?? []}
            renderInput={(params) => (
                <TextField
                    {...params}
                    value={query}
                    label={label}
                    margin="normal"
                    variant="outlined"
                    onChange={event => onChange(event.target.value)}
                    placeholder={placeholder}
                    InputProps={{...params.InputProps, type: 'search'}}
                />
            )}
        />
    )
}

export default SearchBox;