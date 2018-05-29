import React, {Component} from 'react';
import {HorizontalBar} from "react-chartjs-2";
import classes from './Cycles.css';

class Cycles extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let diastolePhase = [];
        let systolePhase = [];
        this.props.data.map(eachEle => {
            systolePhase.push(eachEle.SystolePhase.duration);
            diastolePhase.push(eachEle.DiastolePhase.duration);
            return null;
        });

        let cycleLabels = this.props.data.map((eachEle, index) => {
            return 'Cycle ' + (index + 1);
        });

        const bardata = {
            labels: cycleLabels,
            datasets: [
                {
                    label: 'Cycle of Systole',
                    data: systolePhase,
                    backgroundColor: "#75e0ff",
                },
                {
                    label: 'Cycle of Diastole',
                    data: diastolePhase,
                    backgroundColor: "#a7ebc4",
                }
            ]
        };

        const options = {
            responsive: true,
            scales: {
                xAxes: [{
                    ticks: {
                        callback: function (value, index, values) {
                            return value + ' ms'
                        }
                    },
                    stacked: true,
                }],
                yAxes: [{
                    barThickness: 15,
                    stacked: true,
                }]
            }
        };
        return (
            <div className={classes.Cycles}>
                <HorizontalBar
                    getElementAtEvent={(datasets) => this.props.clicked(datasets[0]._index)} data={bardata} options={options}/>
            </div>
        );
    }
}

export default Cycles;