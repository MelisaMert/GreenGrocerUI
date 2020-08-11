import React from 'react';
import { Line } from '@ant-design/charts';
import 'antd/dist/antd.css'
import '../styles/main-page.css';
const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
const config = {
    data,
    title: {
      visible: true,
      text: 'Green Grocer',
    },
    xField: 'year',
    yField: 'value',
  };
export class Dashboard extends React.Component {
    state= {
      collapsed: false
    };
    render() {
    return (
        <Line {...config} chartRef={this.ref} />
    );
   }
}
