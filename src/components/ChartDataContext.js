import React, { createContext, useState, useContext } from 'react';

const ChartDataContext = createContext();

export const ChartDataProvider = ({ children }) => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [{ data: [] }]
    });

    return (
        <ChartDataContext.Provider value={{ chartData, setChartData }}>
            {children}
        </ChartDataContext.Provider>
    );
};

export const useChartData = () => {
    const context = useContext(ChartDataContext);

    if (!context) {
        throw new Error('useChartData deve ser usado dentro de um ChartDataProvider');
    }

    return context;
};
