import { compose, createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

import { rootreducer } from "./root-reducer";

const middleWare = [logger];

const compsedEnhancers = compose(applyMiddleware(...middleWare))

export const store = createStore(rootreducer, undefined, compsedEnhancers);
