import React, { useState, useEffect } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { ptBR } from '@mui/x-date-pickers/locales';
import { pt } from 'date-fns/locale';

const brazilianLocale = ptBR.components.MuiLocalizationProvider.defaultProps.localeText;

function DateTime() {
    return (
      <div>
        <h2>Datas e horários</h2>
          <LocalizationProvider adapterLocale={pt} dateAdapter={AdapterDateFns} localeText={brazilianLocale}>
            <DateTimePicker 
              sx={{ marginRight: 1 }} 
              label="Início"
              inputFormat="dd-MMMM-yyyyy"
            />
          </LocalizationProvider>
          <LocalizationProvider adapterLocale={pt} dateAdapter={AdapterDateFns} localeText={brazilianLocale}>
            <DateTimePicker 
              label="Término"
              inputFormat="dd-MMMM-yyyyy"
            />
          </LocalizationProvider>
      </div>
    );
  }
  
  export default DateTime;
