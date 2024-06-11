import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart({xAxisList, yAxisList, label}) {
    return (
        <LineChart
            xAxis={[{ data: xAxisList, valueFormatter: (v) => v.toString(), scaleType: 'point'}]}
            series={[
                {
                    label: label,
                    data: yAxisList,
                },
            ]}

            width={700}
            height={400}
            colors={['#000000', '#000000', "#000000"]}
        />
    );
}
