import sportKeywords from './interest/sport/keywords';
import travelKeywords from './interest/travel/keywords';
import automotiveKeywords from './interest/automotive/keywords';
import { AudienceDefinition } from '../../types';

const TTL_IN_SECS = 100;
const LOOK_BACK_IN_SECS = 100;
const OCCURRENCES = 2;
const VERSION = 1;

export const sportInterestAudience: AudienceDefinition = {
  id: 'iab-607',
  name: 'Interest | Sport',
  ttl: TTL_IN_SECS,
  lookBack: LOOK_BACK_IN_SECS,
  occurrences: OCCURRENCES,
  version: VERSION,
  queryProperty: 'keywords',
  queryValue: sportKeywords,
  queryFilterComparisonType: 'includes',
};

export const travelInterestAudience: AudienceDefinition = {
  id: 'iab-719',
  name: 'Interest | Travel',
  ttl: TTL_IN_SECS,
  lookBack: LOOK_BACK_IN_SECS,
  occurrences: OCCURRENCES,
  version: VERSION,
  queryProperty: 'keywords',
  queryValue: travelKeywords,
  queryFilterComparisonType: 'includes',
};

export const automotiveInterestAudience: AudienceDefinition = {
  id: 'iab-243',
  name: 'Interest | Automotive',
  ttl: TTL_IN_SECS,
  lookBack: LOOK_BACK_IN_SECS,
  occurrences: OCCURRENCES,
  version: VERSION,
  queryProperty: 'keywords',
  queryValue: automotiveKeywords,
  queryFilterComparisonType: 'includes',
};

export const allAudienceDefinitions: AudienceDefinition[] = [
  sportInterestAudience,
  travelInterestAudience,
  automotiveInterestAudience,
];
