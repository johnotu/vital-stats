import React from 'react';

import Chart from './Chart';

const PressureChart = (props) => {
  const {systolic, diastolic} = props;

  const data = {
    datasets: [
      {
        data: systolic,
        color: () => '#3498db',
      },
      {
        data: diastolic,
        color: () => '#e67e22',
      },
    ],
    legend: ['systolic', 'diastolic'],
  };

  return <Chart title="Blood Pressure" data={data} />;
};

export default PressureChart;
