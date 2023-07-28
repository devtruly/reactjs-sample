import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, CardImg, Table } from "reactstrap";
import "../../css/CardBoard.css";
import "../../css/Busniess.css";
import { BsCircle } from "react-icons/bs";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Slide from "./Slide";


class BusinessList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollClass: "",
            scrollSet: false,
            businessCategory: {
                first: "PnJoying사업소개",
                disclaimer: "면책 사항",
                purpose: "사업배경 및 목적",
                reason: "사업 이유",
                summary: "사업 개요",
                why: "왜? 지금인가?",
                targetMarket: "목표 시장",
                // differentiated: "차별화 전략",
                salesGoal: "매출 목표",
                teamInfo: "PnJoying 팀 소개",
                // vision: "비전",
                thankYou: "감사말",
            }
        };
        this.arrayBusinessKey = Object.keys(this.state.businessCategory);
        this.targetScrollTop = [];
        this.targetNumberSet = [];
        this.targeNumber = 0;
        this.targetPointTargetName = "";
        this.beforeScrollTop = 0;
    }

    scrollMove(id) {
        if (!this.targetScrollTop[id]) return;
        console.log(this.targetScrollTop);
        window.scrollTo({
            top: (this.targetScrollTop[id] - 90),
            behavior: 'smooth',
        });
    }

    searchButtonSet() {
        const components = this.arrayBusinessKey
            .map((key) => {
                    return (<Button key={`${key}`} id={`${key}_button`}
                                    onClick={e => this.scrollMove(`${key}`)}>{this.state.businessCategory[key]}</Button>);
                }
            );

        return (<div className={`scroll-button-area ${this.state.scrollClass}`}>{components}</div>);
    }

    componentDidMount() {

        window.addEventListener("scroll", function(e) {
            if (window.scrollY > 150) {
                this.setState({scrollClass: "quick-scroller-button-area"});
            }
            else {
                this.setState({scrollClass: ""});
            }


            if (this.beforeScrollTop < window.scrollY) {
                if (this.targetScrollTop[this.targetPointTargetName] < window.scrollY) {
                    Array.prototype.forEach.call(document.getElementsByClassName('button_pointer'), function(el) {
                        el.classList.remove('button_pointer');
                    })
                    if (this.targeNumber < (this.arrayBusinessKey.length - 1)) this.targeNumber++;
                    this.targetPointTargetName = this.targetNumberSet[this.targeNumber];
                    document.getElementById(`${this.targetPointTargetName}_button`).classList.add('button_pointer');
                }
            }
            else if (this.beforeScrollTop > window.scrollY) {
                if (this.targetScrollTop[this.targetPointTargetName] - 150> window.scrollY) {
                    Array.prototype.forEach.call(document.getElementsByClassName('button_pointer'), function(el) {
                        el.classList.remove('button_pointer');
                    })
                    if (this.targeNumber > 0) this.targeNumber--;
                    this.targetPointTargetName = this.targetNumberSet[this.targeNumber];
                    document.getElementById(`${this.targetPointTargetName}_button`).classList.add('button_pointer');
                }
            }

            this.beforeScrollTop = window.scrollY;

        }.bind(this));

        window.onbeforeunload = function pushRefresh() {
            window.scrollTo(0, 0);
        };

        this.scrollSet();
    }

    listSet () {
        let num = 0;
        const components = this.arrayBusinessKey
            .map((key) => {
                num++;
                return (
                    <tr key={`${key}`}>
                        <th>
                            <span id={`${key}`}>{this.state.businessCategory[key]}</span>
                            <div className="business_pointer"><BsCircle/></div>
                        </th>
                        <td>
                            <Card className="card_board">
                                <CardHeader></CardHeader>
                                <CardBody>
                                    <Zoom>
                                        <img width="100%"
                                                 src={`${process.env.PUBLIC_URL}/img/business-${num}.png`}
                                                 alt={this.state.businessCategory[key]}/>
                                    </Zoom>
                                </CardBody>
                            </Card>
                        </td>
                    </tr>
                )
            }
        );

        return (<>{components}</>);
    }

    scrollSet() {
        if (!this.state.scrollSet) {
            this.setState({scrollSet: true});

            let scrollSet = setInterval(function() {
                this.arrayBusinessKey
                    .forEach((key) => {
                            //console.log(key);
                            this.targetScrollTop[key] = document.getElementById(key).getBoundingClientRect().top;
                            this.targetNumberSet.push(key);
                        }
                    );

                this.targetPointTargetName = this.targetNumberSet[this.targeNumber];
                document.getElementById(`${this.targetPointTargetName}_button`).classList.add('button_pointer');
                // //this.set = new Set(this.targetScrollTop);
                clearInterval(scrollSet);
            }.bind(this), 100);
        }

    }

    render() {
        return (
            <div>
                {/*<Slide style={{position: "absolute"}} />*/}
                <div className="container">
                    <div className="hearder">
                        <span>{this.props.OneDepth}</span>
                        <span>{this.props.TwoDepth}</span>
                    </div>
                    <div>
                        <div className="business_contents">
                            <Table>
                                <colgroup>
                                    <col width="225px"/>
                                    <col width="auto"/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>
                                        <div style={{height: "120px"}}>{this.searchButtonSet()}</div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                    {this.listSet()}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BusinessList;