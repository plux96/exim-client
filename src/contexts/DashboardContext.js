import { createContext, useReducer } from 'react';
import DashboardReducer from '../reducers/dashboard.reducer';

export const DashboardContext = createContext();
export const DashboardDispatch = createContext();

export function DashboardProvider({ children }) {
    const [state, dispatch] = useReducer(DashboardReducer, {
        modal: {
            open: true,
            index: 0
        },
        applications: []
    });
    return (
        <DashboardContext.Provider value={state}>
            <DashboardDispatch.Provider value={dispatch}>
                {children}
            </DashboardDispatch.Provider>
        </DashboardContext.Provider>
    )
}