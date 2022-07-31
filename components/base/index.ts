import { FC, PropsWithChildren } from 'react';

export type BaseReactComponent<P = {}> = FC<PropsWithChildren<P>>;
