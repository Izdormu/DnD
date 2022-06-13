import React from 'react'
import { Grid } from '@mui/material';
import  './heroHeader.scss'
const HeroHeader = () => {
    const [state, setState] = React.useState({
        charName: "",
        charKD:"",
        charHP: "",
        charInitiation: "",
        charBonusMastery: "",
        charSpeed:"",
        charInspiration:"",
        charExhaustion:"",
        charStatus:""

        
      })


    
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      }
    
    function labelLength(label){
      const elem = 
      if label.length > 6 {


      }

    }
  
  
  
  
    return (
   <div className='char'>
        <div className='char__items'>
        <Grid container spacing={0.5}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          columns={12}>
            <Grid item xs={2}>
            <div className='char__item'>
              
                <label className='char__item-name'>Имя
                <input  className='char__item-input'
                maxlength = "3"
                size ="3"
                type="text"
                name="charName"
                value={state.charName}
                onChange={handleChange}
                /></label>
                
            </div>
            </Grid>
            <Grid item xs={2}>
            <div className='char__item'>
              
                <label className='char__item-name'>КД
                <input  className='char__item-input'
                maxlength = "3"
                size ="3"
                type="text"
                name="charKD"
                value={state.charKD}
                onChange={handleChange}
                /></label>
                
            </div>
            </Grid>
            <Grid item xs={2}>
            <div className='char__item'>
              
                <label className='char__item-name'>
                <input  className='char__item-input'
                maxlength = "3"
                size ="3"
                type="text"
                name="charHP"
                value={state.charHP}
                onChange={handleChange}
                /></label>
                
            </div>
            </Grid>
            <Grid item xs={2}>
            <div className='char__item'>
              
                <label className='char__item-name'>БМ
                <input  className='char__item-input'
                maxlength = "3"
                size ="3"
                type="text"
                name="charBonuMastery"
                value={state.charBonusMastery}
                onChange={handleChange}
                /></label>
                
            </div>
            </Grid>
            <Grid item xs={2}>
            <div className='char__item'>
              
                <label className='char__item-name'>Скорость
                <input  className='char__item-input'
                maxlength = "3"
                size ="3"
                type="text"
                name="charSpeed"
                value={state.charSpeed}
                onChange={handleChange}
                /></label>
                
            </div>
            </Grid>
            <Grid item xs={2}>
            <div className='char__item'>
              
                <label className='char__item-name'>Вдохновение
                <input  className='char__item-input'
                maxlength = "3"
                size ="3"
                type="text"
                name="kd"
                value={state.charInspiration}
                onChange={handleChange}
                /></label>
                
            </div>
            </Grid>
            <Grid item xs={2}>
            <div className='char__item'>
              
                <label className='char__item-name'>Истощение
                <input  className='char__item-input'
                maxlength = "3"
                size ="3"
                type="text"
                name="charExhaustion"
                value={state.charExhaustion}
                onChange={handleChange}
                /></label>
                
            </div>
            </Grid>
            <Grid item xs={2}>
            <div className='char__item'>
              
                <label className='char__item-name'>Состояние
                <input  className='char__item-input'
                maxlength = "3"
                size ="3"
                type="text"
                name="charStatus"
                value={state.charStatus}
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