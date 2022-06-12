import React from 'react'
import { Grid } from '@mui/material';
import  './heroHeader.scss'
const HeroHeader = () => {
    const [state, setState] = React.useState({
        kd:""
      })



    function handleChange(evt) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      }
  
  
  
  
    return (
   <div className='char'>
        <div className='char__items'>
        <Grid container spacing={0.5}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          columns={16}>
            <Grid item xs={2}>
            <div className='char__item'>
              
                <label className='char__item-name'>KD
                <input  className='char__item-input'
                maxlength = "20"
                size ="3"
                type="text"
                name="kd"
                value={state.kd}
                onChange={handleChange}
                /></label>
                
            </div>
            </Grid>
            <Grid item xs={1}>
            <div className='char__item'>
              
                <label className='char__item-name'>KD
                <input className='char__item-input'
                maxlength = "3"
                
                type="text"
                name="kd"
                value={state.kd}
                onChange={handleChange}
                /></label>
                
            </div>
            </Grid>
            




        </Grid>
        </div>
   </div>
  )
}

export default HeroHeader