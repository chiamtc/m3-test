import React, {Component} from 'react';
import classes from './App.css';
import Cycles from "../components/Cycles/Cycles";
import Stats from '../components/Stats/Stats';

class App extends Component {
    /**I assume there will be side-effect (NGEffect in Angular) class/function in redux to separate
     *  HTTP response from the API and update the synchronise state. **/
    state = {
        averageStats: {
            "origin": "pro_server sha:80fec81",
            "acceptFlag": true,
            "abnormalFlag": false,
            "abnormalScore": 0,
            "avgHeartRate": 77,
            "avgResRate": 15,
            "avgDiastole": 451,
            "avgSystole": 299,
        },
        heartBeats: [
            {
                "DiastolePhase": {
                    "duration": 520,
                    "S2": {
                        "wasDetected": true,
                        "energy": 36,
                        "startTime": 1980,
                        "duration": 180,
                        "loudness": 85,
                        "endTime": 2160
                    },
                    "wasDetected": true,
                    "endTime": 2500,
                    "startTime": 1980
                },
                "SystolePhase": {
                    "duration": 280,
                    "wasDetected": true,
                    "endTime": 1980,
                    "S1": {
                        "wasDetected": true,
                        "energy": 68,
                        "startTime": 1700,
                        "duration": 160,
                        "loudness": 100,
                        "endTime": 1860
                    },
                    "startTime": 1700
                },
                "currentHeartRate": 71,
                "startTime": 1700,
                "duration": 800,
                "endTime": 2500,
                "currentRespiratoryRate": 14
            },
            {
                "DiastolePhase": {
                    "duration": 460,
                    "S2": {
                        "wasDetected": true,
                        "energy": 45,
                        "startTime": 6160,
                        "duration": 120,
                        "loudness": 57,
                        "endTime": 6280
                    },
                    "wasDetected": true,
                    "endTime": 6620,
                    "startTime": 6160
                },
                "SystolePhase": {
                    "duration": 300,
                    "wasDetected": true,
                    "endTime": 6160,
                    "S1": {
                        "wasDetected": true,
                        "energy": 89,
                        "startTime": 5860,
                        "duration": 100,
                        "loudness": 100,
                        "endTime": 5960
                    },
                    "startTime": 5860
                },
                "currentHeartRate": 71,
                "startTime": 5860,
                "duration": 760,
                "endTime": 6620,
                "currentRespiratoryRate": 14
            },
            {
                "DiastolePhase": {
                    "duration": 500,
                    "S2": {
                        "wasDetected": true,
                        "energy": 59,
                        "startTime": 6900,
                        "duration": 100,
                        "loudness": 93,
                        "endTime": 7000
                    },
                    "wasDetected": true,
                    "endTime": 7400,
                    "startTime": 6900
                },
                "SystolePhase": {
                    "duration": 280,
                    "wasDetected": true,
                    "endTime": 6900,
                    "S1": {
                        "wasDetected": true,
                        "energy": 75,
                        "startTime": 6620,
                        "duration": 140,
                        "loudness": 100,
                        "endTime": 6760
                    },
                    "startTime": 6620
                },
                "currentHeartRate": 71,
                "startTime": 6620,
                "duration": 780,
                "endTime": 7400,
                "currentRespiratoryRate": 14
            },
            {
                "DiastolePhase": {
                    "duration": 440,
                    "S2": {
                        "wasDetected": true,
                        "energy": 52,
                        "startTime": 7700,
                        "duration": 160,
                        "loudness": 76,
                        "endTime": 7860
                    },
                    "wasDetected": true,
                    "endTime": 8140,
                    "startTime": 7700
                },
                "SystolePhase": {
                    "duration": 300,
                    "wasDetected": true,
                    "endTime": 7700,
                    "S1": {
                        "wasDetected": true,
                        "energy": 86,
                        "startTime": 7400,
                        "duration": 100,
                        "loudness": 100,
                        "endTime": 7500
                    },
                    "startTime": 7400
                },
                "currentHeartRate": 75,
                "startTime": 7400,
                "duration": 740,
                "endTime": 8140,
                "currentRespiratoryRate": 15
            },
            {
                "DiastolePhase": {
                    "duration": 420,
                    "S2": {
                        "wasDetected": true,
                        "energy": 46,
                        "startTime": 8460,
                        "duration": 160,
                        "loudness": 68,
                        "endTime": 8620
                    },
                    "wasDetected": true,
                    "endTime": 8880,
                    "startTime": 8460
                },
                "SystolePhase": {
                    "duration": 320,
                    "wasDetected": true,
                    "endTime": 8460,
                    "S1": {
                        "wasDetected": true,
                        "energy": 83,
                        "startTime": 8140,
                        "duration": 100,
                        "loudness": 100,
                        "endTime": 8240
                    },
                    "startTime": 8140
                },
                "currentHeartRate": 76,
                "startTime": 8140,
                "duration": 740,
                "endTime": 8880,
                "currentRespiratoryRate": 15
            },
            {
                "DiastolePhase": {
                    "duration": 480,
                    "S2": {
                        "wasDetected": true,
                        "energy": 40,
                        "startTime": 9180,
                        "duration": 160,
                        "loudness": 87,
                        "endTime": 9340
                    },
                    "wasDetected": true,
                    "endTime": 9660,
                    "startTime": 9180
                },
                "SystolePhase": {
                    "duration": 300,
                    "wasDetected": true,
                    "endTime": 9180,
                    "S1": {
                        "wasDetected": true,
                        "energy": 70,
                        "startTime": 8880,
                        "duration": 120,
                        "loudness": 100,
                        "endTime": 9000
                    },
                    "startTime": 8880
                },
                "currentHeartRate": 76,
                "startTime": 8880,
                "duration": 780,
                "endTime": 9660,
                "currentRespiratoryRate": 15
            },
            {
                "DiastolePhase": {
                    "duration": 500,
                    "S2": {
                        "wasDetected": true,
                        "energy": 36,
                        "startTime": 9960,
                        "duration": 160,
                        "loudness": 77,
                        "endTime": 10120
                    },
                    "wasDetected": true,
                    "endTime": 10460,
                    "startTime": 9960
                },
                "SystolePhase": {
                    "duration": 300,
                    "wasDetected": true,
                    "endTime": 9960,
                    "S1": {
                        "wasDetected": true,
                        "energy": 69,
                        "startTime": 9660,
                        "duration": 140,
                        "loudness": 100,
                        "endTime": 9800
                    },
                    "startTime": 9660
                },
                "currentHeartRate": 76,
                "startTime": 9660,
                "duration": 800,
                "endTime": 10460,
                "currentRespiratoryRate": 15
            },
            {
                "DiastolePhase": {
                    "duration": 480,
                    "S2": {
                        "wasDetected": true,
                        "energy": 34,
                        "startTime": 10740,
                        "duration": 180,
                        "loudness": 77,
                        "endTime": 10920
                    },
                    "wasDetected": true,
                    "endTime": 11220,
                    "startTime": 10740
                },
                "SystolePhase": {
                    "duration": 280,
                    "wasDetected": true,
                    "endTime": 10740,
                    "S1": {
                        "wasDetected": true,
                        "energy": 65,
                        "startTime": 10460,
                        "duration": 160,
                        "loudness": 100,
                        "endTime": 10620
                    },
                    "startTime": 10460
                },
                "currentHeartRate": 76,
                "startTime": 10460,
                "duration": 760,
                "endTime": 11220,
                "currentRespiratoryRate": 15
            },
            {
                "DiastolePhase": {
                    "duration": 460,
                    "S2": {
                        "wasDetected": true,
                        "energy": 36,
                        "startTime": 11540,
                        "duration": 160,
                        "loudness": 94,
                        "endTime": 11700
                    },
                    "wasDetected": true,
                    "endTime": 12000,
                    "startTime": 11540
                },
                "SystolePhase": {
                    "duration": 320,
                    "wasDetected": true,
                    "endTime": 11540,
                    "S1": {
                        "wasDetected": true,
                        "energy": 72,
                        "startTime": 11220,
                        "duration": 180,
                        "loudness": 100,
                        "endTime": 11400
                    },
                    "startTime": 11220
                },
                "currentHeartRate": 76,
                "startTime": 11220,
                "duration": 780,
                "endTime": 12000,
                "currentRespiratoryRate": 15
            },
            {
                "DiastolePhase": {
                    "duration": 440,
                    "S2": {
                        "wasDetected": true,
                        "energy": 51,
                        "startTime": 12300,
                        "duration": 160,
                        "loudness": 86,
                        "endTime": 12460
                    },
                    "wasDetected": true,
                    "endTime": 12740,
                    "startTime": 12300
                },
                "SystolePhase": {
                    "duration": 300,
                    "wasDetected": true,
                    "endTime": 12300,
                    "S1": {
                        "wasDetected": true,
                        "energy": 67,
                        "startTime": 12000,
                        "duration": 100,
                        "loudness": 100,
                        "endTime": 12100
                    },
                    "startTime": 12000
                },
                "currentHeartRate": 85,
                "startTime": 12000,
                "duration": 740,
                "endTime": 12740,
                "currentRespiratoryRate": 17
            },
            {
                "DiastolePhase": {
                    "duration": 420,
                    "S2": {
                        "wasDetected": true,
                        "energy": 42,
                        "startTime": 13040,
                        "duration": 160,
                        "loudness": 80,
                        "endTime": 13200
                    },
                    "wasDetected": true,
                    "endTime": 13460,
                    "startTime": 13040
                },
                "SystolePhase": {
                    "duration": 300,
                    "wasDetected": true,
                    "endTime": 13040,
                    "S1": {
                        "wasDetected": true,
                        "energy": 89,
                        "startTime": 12740,
                        "duration": 100,
                        "loudness": 100,
                        "endTime": 12840
                    },
                    "startTime": 12740
                },
                "currentHeartRate": 76,
                "startTime": 12740,
                "duration": 720,
                "endTime": 13460,
                "currentRespiratoryRate": 15
            },
            {
                "DiastolePhase": {
                    "duration": 380,
                    "S2": {
                        "wasDetected": true,
                        "energy": 42,
                        "startTime": 13780,
                        "duration": 160,
                        "loudness": 100,
                        "endTime": 13940
                    },
                    "wasDetected": true,
                    "endTime": 14160,
                    "startTime": 13780
                },
                "SystolePhase": {
                    "duration": 320,
                    "wasDetected": true,
                    "endTime": 13780,
                    "S1": {
                        "wasDetected": true,
                        "energy": 80,
                        "startTime": 13460,
                        "duration": 100,
                        "loudness": 100,
                        "endTime": 13560
                    },
                    "startTime": 13460
                },
                "currentHeartRate": 78,
                "startTime": 13460,
                "duration": 700,
                "endTime": 14160,
                "currentRespiratoryRate": 15
            },
            {
                "DiastolePhase": {
                    "duration": 400,
                    "S2": {
                        "wasDetected": true,
                        "energy": 36,
                        "startTime": 14480,
                        "duration": 180,
                        "loudness": 69,
                        "endTime": 14660
                    },
                    "wasDetected": true,
                    "endTime": 14880,
                    "startTime": 14480
                },
                "SystolePhase": {
                    "duration": 320,
                    "wasDetected": true,
                    "endTime": 14480,
                    "S1": {
                        "wasDetected": true,
                        "energy": 70,
                        "startTime": 14160,
                        "duration": 160,
                        "loudness": 100,
                        "endTime": 14320
                    },
                    "startTime": 14160
                },
                "currentHeartRate": 78,
                "startTime": 14160,
                "duration": 720,
                "endTime": 14880,
                "currentRespiratoryRate": 15
            },
            {
                "DiastolePhase": {
                    "duration": 380,
                    "S2": {
                        "wasDetected": true,
                        "energy": 63,
                        "startTime": 15180,
                        "duration": 140,
                        "loudness": 78,
                        "endTime": 15320
                    },
                    "wasDetected": true,
                    "endTime": 15560,
                    "startTime": 15180
                },
                "SystolePhase": {
                    "duration": 300,
                    "wasDetected": true,
                    "endTime": 15180,
                    "S1": {
                        "wasDetected": true,
                        "energy": 65,
                        "startTime": 14880,
                        "duration": 100,
                        "loudness": 84,
                        "endTime": 14980
                    },
                    "startTime": 14880
                },
                "currentHeartRate": 78,
                "startTime": 14880,
                "duration": 680,
                "endTime": 15560,
                "currentRespiratoryRate": 15
            },
            {
                "DiastolePhase": {
                    "duration": 380,
                    "S2": {
                        "wasDetected": true,
                        "energy": 62,
                        "startTime": 15860,
                        "duration": 100,
                        "loudness": 58,
                        "endTime": 15960
                    },
                    "wasDetected": true,
                    "endTime": 16240,
                    "startTime": 15860
                },
                "SystolePhase": {
                    "duration": 300,
                    "wasDetected": true,
                    "endTime": 15860,
                    "S1": {
                        "wasDetected": true,
                        "energy": 90,
                        "startTime": 15560,
                        "duration": 100,
                        "loudness": 100,
                        "endTime": 15660
                    },
                    "startTime": 15560
                },
                "currentHeartRate": 83,
                "startTime": 15560,
                "duration": 680,
                "endTime": 16240,
                "currentRespiratoryRate": 16
            },
            {
                "DiastolePhase": {
                    "duration": 500,
                    "S2": {
                        "wasDetected": true,
                        "energy": 32,
                        "startTime": 16520,
                        "duration": 180,
                        "loudness": 95,
                        "endTime": 16700
                    },
                    "wasDetected": true,
                    "endTime": 17020,
                    "startTime": 16520
                },
                "SystolePhase": {
                    "duration": 280,
                    "wasDetected": true,
                    "endTime": 16520,
                    "S1": {
                        "wasDetected": true,
                        "energy": 70,
                        "startTime": 16240,
                        "duration": 100,
                        "loudness": 100,
                        "endTime": 16340
                    },
                    "startTime": 16240
                },
                "currentHeartRate": 78,
                "startTime": 16240,
                "duration": 780,
                "endTime": 17020,
                "currentRespiratoryRate": 15
            },
            {
                "DiastolePhase": {
                    "duration": 520,
                    "S2": {
                        "wasDetected": true,
                        "energy": 53,
                        "startTime": 17280,
                        "duration": 180,
                        "loudness": 99,
                        "endTime": 17460
                    },
                    "wasDetected": true,
                    "endTime": 17800,
                    "startTime": 17280
                },
                "SystolePhase": {
                    "duration": 260,
                    "wasDetected": true,
                    "endTime": 17280,
                    "S1": {
                        "wasDetected": true,
                        "energy": 65,
                        "startTime": 17020,
                        "duration": 160,
                        "loudness": 100,
                        "endTime": 17180
                    },
                    "startTime": 17020
                },
                "currentHeartRate": 78,
                "startTime": 17020,
                "duration": 780,
                "endTime": 17800,
                "currentRespiratoryRate": 15
            },
            {
                "DiastolePhase": {
                    "duration": 520,
                    "S2": {
                        "wasDetected": true,
                        "energy": 53,
                        "startTime": 17280,
                        "duration": 180,
                        "loudness": 99,
                        "endTime": 17460
                    },
                    "wasDetected": true,
                    "endTime": 17800,
                    "startTime": 17280
                },
                "SystolePhase": {
                    "duration": 260,
                    "wasDetected": true,
                    "endTime": 17280,
                    "S1": {
                        "wasDetected": true,
                        "energy": 65,
                        "startTime": 17020,
                        "duration": 160,
                        "loudness": 100,
                        "endTime": 17180
                    },
                    "startTime": 17020
                },
                "currentHeartRate": 78,
                "startTime": 17800,
                "duration": 760,
                "endTime": 18560,
                "currentRespiratoryRate": 15
            }
        ],
        selectedBar:{data: null, index:-1}
    };

    selectCycleHandler = (canvasIndex) => {
        let foundBarchart = this.state.heartBeats[canvasIndex];
        this.setState({selectedBar:{data:foundBarchart,index : canvasIndex+1}});
    };

    render() {
        return (
            <div className={classes.App}>
                <Stats averageData={this.state.averageStats} data={this.state.heartBeats} selectedBar={this.state.selectedBar}/>
                <Cycles clicked={this.selectCycleHandler} data={this.state.heartBeats}/>
            </div>
        );
    }
}

export default App;
