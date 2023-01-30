import { createContext, useReducer } from 'react';
import AppViewReducer from '../reducers/appview.reducer';
import { SnackbarProvider } from './SnackbarContext';

export const AppViewContext = createContext();
export const AppViewDispatch = createContext();

export function AppViewProvider({ children }) {
    const [state, dispatch] = useReducer(AppViewReducer, {
        drawer: {
            open: false,
            fullWidth: false
        },
        applications: [{ step: 1 }, { step: 2 }, { step: 3 }, { step: 4 }, { step: 5 }, { step: 6 }, { step: 7 }, { step: 8 }, { step: 9 }, { step: 0 }],
        forms: false
    });
    //const child = useMemo(() => children, [state]);
    return (
        <AppViewContext.Provider value={state}>
            <AppViewDispatch.Provider value={dispatch}>
                <SnackbarProvider>
                    {children}
                </SnackbarProvider>
            </AppViewDispatch.Provider>
        </AppViewContext.Provider>
    );
}
