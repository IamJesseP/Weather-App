import React from 'react';
import WeatherHero from './WeatherHero';
import Forecast from './Forecast';
import Headlines from './Headlines';
import Notify from './Notify';
import Box from '@mui/material/Box';
import Nav from './Nav';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import Spline from '@splinetool/react-spline';
import './styles.css';

export default function WeatherPage() {
  return (
    <>
      <div className="content">
        <div>
          <Nav />
        </div>
        <div className="navbar" id="weather">
          <div className="container">
            <div className="greeting">
              <h1>Good Morning!</h1>{' '}
            </div>
            <div className="search-field">
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <a href="#">
                  <SearchIcon sx={{ color: 'action.active', mr: 1 }} />
                </a>
                <TextField id="input-with-sx" label="Enter a City" variant="standard" />
              </Box>
            </div>
          </div>
        </div>
        <div className="weather">
          <WeatherHero />
        </div>
        <div className="weather">
          <Forecast />
        </div>
        <div className="spacer">
          <Spline scene="https://prod.spline.design/r7dtNZJx8L-6P264/scene.splinecode" />
        </div>
        <div className="weather" id="news">
          <Headlines />
        </div>
        <div className="spacer"></div>
        <div className="weather" id="sms">
          <Notify />
        </div>
        <div className="spacer"></div>
      </div>
    </>
  );
}
