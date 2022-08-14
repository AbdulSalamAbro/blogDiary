import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import memories from '../../images/bloglogo.png';
import logo from '../../images/logo.gif';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';