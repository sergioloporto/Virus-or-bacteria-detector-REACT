import React, {Component} from 'react';
import "./diagnosetool.scss"
import BackArrow from "../../components/BackArrow";
import Container from "../../components/Container";
import Checkbox from "../../components/Checkbox";
import Radiobox from "../../components/Radiobox";




class DiagnoseTool extends Component {
    state = {
        cough: false,
        nodes: false,
        temperature: false,
        tonsillarex: false,
        points: 0,
        radioAge: ""
    };

// CHECKBOX
    handleCheckboxChange = e => {
        this.setState({
            [e.target.name]: e.target.checked
        }); // Setstate is Async, so I will give the address to the calculator as a 2nd argument to run it after the state has changed
    };


// RADIO
    handleRadioboxChange = e => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    };

// CALCULATE BUTTON CLICK
    onButtonClick = e => {
        e.preventDefault();
        this.calculate();
    };


// ADD THE RESULT
    addResult = () => {
        let theResult;
        // if (this.state.radioAge !== "") {
            if (this.state.points <= 0 && this.state.radioAge) {
                theResult =  <p>Risk of GABHS pharingitis <br/>1 to 2.5%</p>
            } else if (this.state.points === 1) {
                theResult =   <p>Risk of GABHS pharingitis <br/>5 to 10%</p>
            } else if (this.state.points === 2) {
                theResult =   <p>Risk of GABHS pharingitis <br/>11 tp 17%</p>
            } else if (this.state.points === 3) {
                theResult =   <p>Risk of GABHS pharingitis <br/>28 tp 35%</p>
            } else if  (this.state.points >= 4) {
                theResult =   <p>Risk of GABHS pharingitis <br/>51 to 53%</p>
            }
            return theResult;
        // } else return null



    };

// PERRFORM THE CALCULATION
    calculate = () => {
        let counter = 0;
        let radiocounter = 0;

        Object.keys(this.state).filter(el => ['cough', 'nodes', 'temperature', 'tonsillarex'].includes(el)).forEach(key => {

            // console.log(this.state[key]);
            if (this.state[key] === true) {
                counter += 1;
            }
        });

        if (this.state.radioAge === "age14") {
            radiocounter++
        } else if (this.state.radioAge === "age45") {
            radiocounter--
        }

        if (this.state.radioAge !== "") {
            this.setState({
                isDisabled: false
            })
        }

        this.setState({
            points: counter + radiocounter
        });
    };



    render() {
        const {cough, nodes, temperature, tonsillarex, radioAge} = this.state;
        return (
            <Container>
                <BackArrow />
                <div className="checkboxContainer" style={{}}>

                    <label className="checkboxLabel">
                        <span style={{marginLeft: 8}}>Absence of cough</span>
                        <Checkbox
                            name="cough"
                            checked={cough}
                            onChange={this.handleCheckboxChange}
                        />
                    </label>

                    <label className="checkboxLabel">
                        <span style={{marginLeft: 8}}>Anterior cervical nodes swollen or enlarged</span>
                        <Checkbox
                            name="nodes"
                            checked={nodes}
                            onChange={this.handleCheckboxChange}
                        />
                    </label>

                    <label className="checkboxLabel">
                        <span style={{marginLeft: 8}}>Temperature > 38&#8451; (100.4 &#8457;)</span>
                        <Checkbox
                            name="temperature"
                            checked={temperature}
                            onChange={this.handleCheckboxChange}
                        />
                    </label>

                    <label className="checkboxLabel">
                        <span style={{marginLeft: 8}}>Tonsillar exudates or swelling</span>
                        <Checkbox
                            name="tonsillarex"
                            checked={tonsillarex}
                            onChange={this.handleCheckboxChange}
                        />
                    </label>


                    {/*RADIO BOXES*/}
                    <section className="radioWrapper">
                        <Radiobox
                            onChange={this.handleRadioboxChange}
                            name="radioAge"
                            labelText={"Age: 3 to 14 years"}
                            checked={radioAge === 'age14'}
                            value={'age14'}
                        />
                        <Radiobox
                            onChange={this.handleRadioboxChange}
                            name="radioAge"
                            labelText={"Age: 15 to 44 years"}
                            checked={radioAge === 'age44'}
                            value={'age44'}
                        />
                        <Radiobox
                            onChange={this.handleRadioboxChange}
                            name="radioAge"
                            labelText={"Age: 45 years and older"}
                            checked={radioAge === 'age45'}
                            value={'age45'}
                        />
                    </section>


                    <p className="resultbox">
                    {
                        (radioAge) && this.addResult()
                    }
                    </p>


                    {/*{*/}
                    {/*    (this.state.points <= 0 && radioAge) &&*/}
                    {/*    <p className="checkboxLabel">Risk of GABHS pharingitis 1 to 2.5%</p>*/}
                    {/*}*/}
                    {/*{*/}
                    {/*    (this.state.points === 1) && <p className="checkboxLabel">Risk of GABHS pharingitis 5 to 10%</p>*/}
                    {/*}*/}
                    {/*{*/}
                    {/*    (this.state.points === 2) &&*/}
                    {/*    <p className="checkboxLabel">Risk of GABHS pharingitis 11 tp 17%</p>*/}
                    {/*}*/}
                    {/*{*/}
                    {/*    (this.state.points === 3) &&*/}
                    {/*    <p className="checkboxLabel">Risk of GABHS pharingitis 28 tp 35%</p>*/}
                    {/*}*/}
                    {/*{*/}
                    {/*    (this.state.points >= 4) && <p className="checkboxLabel">Risk of GABHS pharingitis 51 to 53%</p>*/}
                    {/*}*/}

                </div>

                <button
                    style={{height: "40px", width: "150px", cursor:"pointer"}}
                    type="submit"
                    className="calculateBtn"
                    onClick={this.onButtonClick}
                    disabled={!radioAge}
                >CALCULATE</button>


            </Container>
        )
    }
}


export default DiagnoseTool;