import React from 'react';
import {Chart, Doughnut} from "react-chartjs-2";
import classes from './Stats.css';

//source : https://stackoverflow.com/questions/42759306/add-text-inside-doughnut-chart-from-chart-js-2-in-react
let originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
    draw: function () {
        originalDoughnutDraw.apply(this, arguments);

        let chart = this.chart.chart;
        let ctx = chart.ctx;
        let width = chart.width;
        let height = chart.height;

        let fontSize = (height / 250).toFixed(2);
        ctx.font = fontSize + "em Verdana";
        ctx.fillStyle = 'black';
        ctx.textBaseline = "middle";

        let text = chart.config.data.text,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
        ctx.fillText(text, textX, textY);
    }
});

const stats = (props) => {
    const selectedDoughnut = {
        datasets: [{
            data: props.selectedBar.data ? [props.selectedBar.data.DiastolePhase.duration, props.selectedBar.data.SystolePhase.duration] : [100, 0],
            backgroundColor: ['#75e0ff', '#a7ebc4'],
        }],
        labels: ['Systole', 'Diastole'],
        text: props.selectedBar.data ? `Cycle ${props.selectedBar.index}` : 'NaN'
    };

    const averageDoughnut = {
        datasets: [{
            data: [props.averageData.avgDiastole, props.averageData.avgSystole],
            backgroundColor: ['#75e0ff', '#a7ebc4']
        }],
        labels: ['Average Systole', 'Average Diastole'],
        text: 'Average'
    };

    //for doughnuts
    const options = {responsive: true, cutoutPercentage: 70};

    return (
        <div className={classes.Stats}>
            <div className={classes.StatsDoughnut}>
                <Doughnut data={averageDoughnut} options={options}/>
                <Doughnut data={selectedDoughnut} options={options}/>
            </div>
            <table className={classes.StatsTable}>
                <tbody>
                <tr className={classes.StatsTableTotal}>
                    <td>{props.averageData.avgDiastole + props.averageData.avgSystole}</td>
                    <td>Total</td>
                    <td>{props.selectedBar.data? props.selectedBar.data.DiastolePhase.duration + props.selectedBar.data.SystolePhase.duration: '-'}</td>
                </tr>
                <tr className={classes.StatsTableSystole}>
                    <td>{props.averageData.avgSystole}</td>
                    <td>Systole</td>
                    <td>{props.selectedBar.data? props.selectedBar.data.SystolePhase.duration: '-'}</td>
                </tr>
                <tr className={classes.StatsTableDiastole}>
                    <td>{props.averageData.avgDiastole}</td>
                    <td>Diastole</td>
                    <td>{props.selectedBar.data? props.selectedBar.data.DiastolePhase.duration: '-'}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default stats;