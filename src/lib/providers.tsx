'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface RouteState {
    [key: string]: any
}

interface RouteStateContextType {
    routeState: RouteState
    setRouteState: React.Dispatch<React.SetStateAction<RouteState>>
    resetRouteState: Function
}

// Create context with a default value
const RouteStateContext = createContext<RouteStateContextType>({
    routeState: {},
    setRouteState: () => {},
    resetRouteState: () => {}
})

// Define props type for the provider
interface RouteStateProviderProps {
    children: ReactNode
}

export function RouteStateProvider({ children }: RouteStateProviderProps) {
    const [routeState, setRouteState] = useState<RouteState>({})

    const resetRouteState = () => setRouteState({})

    return (
        <RouteStateContext.Provider
            value={{ routeState, setRouteState, resetRouteState }}
        >
            {children}
        </RouteStateContext.Provider>
    )
}

export function useRouteState() {
    return useContext(RouteStateContext)
}
