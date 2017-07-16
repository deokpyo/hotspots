import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import SessionMiddleware from './session_middleware';
import SpotMiddleware from './spot_middleware';
import createHistory from 'history/createHashHistory';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  SpotMiddleware,
  SessionMiddleware,
  logger
);

export default RootMiddleware;
