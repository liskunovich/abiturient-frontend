import "./BarChart.scss"
import {BarChart} from '@mui/x-charts/BarChart';

export default function BasicBarChart({xAxisList, yAxisList, label}) {
    return (
        <BarChart className="bar-chart"
                  xAxis={[{scaleType: 'band', data: xAxisList, valueFormatter: (v) => v.toString()}]}
                  series={[{data: yAxisList, label: label}]}
                  height={300}
                  colors={['#000000', '#000000']}
        />
    );
}
