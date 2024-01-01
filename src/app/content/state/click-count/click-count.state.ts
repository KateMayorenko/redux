export interface ClickCountState {
  count: number;
  lastUpdated: string;
}

export const initialState: ClickCountState = {
  count: 0,
  lastUpdated: ''
};
