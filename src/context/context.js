import React, { createContext, useReducer } from "react";

import contextReducer from './contextReducer'

const initialState = []
export const ExpenseTrackContext = createContext(initialState)

export const Provider = ({children}) =>{
    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    const deleteTransaction = (id) =>{
        dispatch({type: 'DELETE_TRANSACTION', payload: id})
    }

    const addTransaction = (transaction) =>{
        dispatch({type: 'ADD_TRANSACTION', payload: transaction})
    }
    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);
    return (
        <ExpenseTrackContext.Provider value={{deleteTransaction, addTransaction, transactions,balance}}>
            {children}
        </ExpenseTrackContext.Provider>
    )
}