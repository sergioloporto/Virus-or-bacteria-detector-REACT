import React, {Component} from 'react';
import "./thermometer.scss"



class Thermometer extends Component {
state = {
    termFill : 0
};

    componentDidMount() {
        const interval = setInterval(() => {
            this.setState({
                termFill: this.state.termFill + 10
            });
            if (this.state.termFill === 110) {
                window.clearInterval(interval);
            }
        }, 200)
    }



    render() {
        const styles = {
          height: `${this.state.termFill}px`
        };


        if (this.state.termFill < 100) {

            return (
                <section className="termAnimation">
                    <div id="thermContainer">
                        <div id="therm">
                            <div id="therm-fill" style={styles} />
                        </div>
                    </div>

                    <div id="bulbContainer">
                        <div id="bulb">
                            <div id="bulb-fill">
                            </div>
                        </div>
                    </div>
                    <h1 style={{color:"black"}}>Calculating</h1>
                </section>
            )
        } else return (
            <section className="termAnimation">
                <div id="thermContainer">
                    <div id="therm">
                        <div id="therm-fill" style={styles} />
                    </div>
                </div>

                <div id="bulbContainer">
                    <div id="bulb">
                        <div id="bulb-fill">
                        </div>
                    </div>
                </div>
                <h1 style={{color:"black"}}>Calculating</h1>
            </section>
        )
    }
}


export default Thermometer;