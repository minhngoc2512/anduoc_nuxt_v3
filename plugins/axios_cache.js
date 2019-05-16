import axios from 'axios';
import {cacheAdapterEnhancer, throttleAdapterEnhancer} from 'axios-extensions';
import LRUCache from "lru-cache"
// Time cache 1 day
const defaultCache = new LRUCache({ max: 10000,maxAge: 1000 * 60 * 60 * 24});

const defaults = axios.defaults
// https://github.com/kuitos/axios-extensions
defaults.adapter = cacheAdapterEnhancer(
  defaults.adapter,
  {enabledByDefault: false, cacheFlag: 'cache', defaultCache}
)
