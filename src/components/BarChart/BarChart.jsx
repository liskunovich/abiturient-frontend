import "./BarChart.scss"
import {BarChart} from '@mui/x-charts/BarChart';

export default function BasicBarChart() {
    return (
        <BarChart className="bar-chart"
                  xAxis={[{scaleType: 'band', data: ['group A', 'group B', 'group C']}]}
                  series={[{data: [4, 3, 5]}, {data: [1, 6, 3]}, {data: [2, 5, 6]}]}
                  width={500}
                  height={300}
                  colors={['#ffffff', '#000000']}
        />
    );
}
