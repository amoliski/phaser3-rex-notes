import GetMethods from './GetMethods.js';
import AddMethods from './AddMethods.js';
import RemoveMethods from './RemoveMethods.js';
import PropertyMethods from './PropertyMethods.js';
import CallMethods from './CallMethods.js';
import DataMethods from './DataMethods.js';
import FadeMethods from './FadeMethods.js';
import DrawGameObjectsBounds from './DrawGameObjectsBounds.js';

var Methods = {
    drawGameObjectsBounds: DrawGameObjectsBounds,
};

Object.assign(
    Methods,
    GetMethods,
    AddMethods,
    RemoveMethods,
    PropertyMethods,
    CallMethods,
    DataMethods,
    FadeMethods,
)

export default Methods;