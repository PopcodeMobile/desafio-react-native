// @flow
import { PayloadAction } from '@reduxjs/toolkit'

export type Reducer<S> = (state: S, action: PayloadAction) => S
