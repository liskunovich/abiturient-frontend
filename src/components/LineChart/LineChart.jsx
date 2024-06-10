import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart({xAxisList, yAxisList}) {
    return (
        <LineChart
            xAxis={[{ data: xAxisList}]}
            series={[
                {
                    data: yAxisList,
                },
            ]}
            width={700}
            height={400}
            colors={['#000000', '#000000', "#000000"]}
        />
    );
}
