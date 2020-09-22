export interface Edkt {
  run: () => Promise<void>;
}

// Storage Keys Enum

export enum StorageKeys {
  PAGE_VIEWS = 'edkt_page_views',
  MATCHED_AUDIENCES = 'edkt_matched_audiences',
  MATCHED_AUDIENCE_IDS = 'edkt_matched_audience_ids',
  CACHED_AUDIENCES = 'edkt_cached_audiences',
  CACHED_AUDIENCE_META_DATA = 'edkt_cached_audience_meta_data',
}

// Page Features

export type PageFeatureValue = string[] | number[];

export interface PageFeatureGetter {
  name: string;
  func: () => Promise<PageFeatureValue>;
}

export type PageFeature = {
  name: string;
  error: boolean;
  value: PageFeatureValue;
};

export interface PageView {
  ts: number;
  features: Record<string, PageFeatureValue>;
}

// Audiences

export interface MatchedAudience {
  id: string;
  matchedAt: number;
  expiresAt: number;
  matchedOnCurrentPageView: boolean;
}

export type StringArrayQueryValue = string[];
export type VectorQueryValue = {
  vector: number[];
  threshold: number;
};

export interface AudienceDefinition {
  id: string;
  name: string;
  ttl: number;
  lookBack: number;
  occurrences: number;
  version: number;
  queryProperty: string;
  queryValue: StringArrayQueryValue | VectorQueryValue;
  queryFilterComparisonType: 'includes' | 'dotProduct';
}

export interface CachedAudienceMetaData {
  cachedAt: number;
  audiences: AudienceMetaData[];
}

export interface AudienceMetaData {
  id: string;
  version: number;
}

// Engine

export type EngineConditionQuery =
  | {
      property: string;
      filterComparisonType: 'includes';
      value: StringArrayQueryValue;
    }
  | {
      property: string;
      filterComparisonType: 'dotProduct';
      value: VectorQueryValue;
    };

export interface EngineConditionRule {
  reducer: {
    name: 'count';
  };
  matcher: {
    name: 'eq' | 'gt' | 'lt' | 'ge' | 'le';
    args: number;
  };
}

export interface EngineCondition {
  filter: {
    any?: boolean;
    queries: EngineConditionQuery[];
  };
  rules: EngineConditionRule[];
}

export interface PingResponse {
  gdprApplies?: boolean;
}

export interface TCData {
  gdprApplies?: boolean;
  vendor: {
    consents: { [vendorId: number]: boolean | undefined };
  };
}

declare global {
  interface Window {
    __tcfapi(
      command: 'ping',
      version: number,
      cb: (response: PingResponse) => void
    ): void;

    __tcfapi(
      command: 'getTCData',
      version: number,
      cb: (tcData: TCData, success: boolean) => void
    ): void;
  }
}
