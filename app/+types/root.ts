import type {
  MetaArgs as DefaultMetaArgs,
} from "react-router";

export namespace Route {
  export type MetaArgs = DefaultMetaArgs;
  export type LinksFunction = () => Array<{ 
    rel: string; 
    href: string; 
    crossOrigin?: string; 
    type?: string;
  }>;
  export interface ErrorBoundaryProps {
    error: any;
  }
} 