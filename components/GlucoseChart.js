import React from 'react';

import Chart from './Chart';

const GlucoseChart = (props) => {
  const {levels} = props;

  const data = {
    datasets: [
      {
        data: levels,
        color: () => '#e74c3c',
      },
    ],
  };

  return <Chart title="Glucose" data={data} />;
};

export default GlucoseChart;
