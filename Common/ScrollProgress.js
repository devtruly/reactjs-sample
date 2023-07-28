import React, { Component } from 'react';
import datatype from "prop-types";

/**
 * @author Dev-Truly
 * @param minProgressTop: datatype.number 프로그래스 최소 배치 위치 Y 기본 0
 * @param progressColor: datatype.string  프로그래스 색상 기본 lightgray
 * @param progressBarColor: datatype.string 프로그래스 바 색상 기본 #000
 * @param width: datatype.string 가로 사이즈 기본 100%
 * @param height: datatype.number 세로 사이즈 기본 2px
 * @returns {JSX.Element}
 */
class ScrollProgress extends Component {
    constructor(props) {
        super(props);
        this.minProgressTop = (this.props.minProgressTop === undefined) ? 0 : this.props.minProgressTop;
        this.state = {
            scrollProgressBarPer: 0,
        }
        this.windowHeight = 0;
        this.outerHeight = 0;

        this.defaultProgressStyle = {
            position: "sticky",
            top: this.minProgressTop,
            backgroundColor: (this.props.progressColor === undefined) ? "lightgray" : this.props.progressColor,
            width: (!this.props.width === undefined) ? "100%" : this.props.width,
            height: (!this.props.height === undefined) ? "2px" : this.props.height,
        }

        this.defaultProgressBarStyle = {
            backgroundColor: (!this.props.progressBarColor) ? "#000" : this.props.progressBarColor,
            height: (!this.props.height) ? "2px" : this.props.height,
        }
    }

    componentDidMount() {
        this.windowHeight = document.getElementById('root').offsetHeight;
        this.outerHeight = window.outerHeight;

        window.addEventListener('scroll', function () {
            this.setState({ scrollProgressBarPer: ((window.scrollY) / (this.windowHeight - this.outerHeight)) * 100 });
        }.bind(this));
    }

    render() {
        let {
            minProgressTop,
            progressColor,
            progressBarColor,
            width,
            height,
        } = this.props;

        this.defaultProgressBarStyle = { ...this.defaultProgressBarStyle, ...{ width: `${this.state.scrollProgressBarPer}%` } }
        return (
            <>
                <div id="scroll-progress"
                     style={this.defaultProgressStyle}
                >
                    <div id="scroll-progress-bar"
                         style={this.defaultProgressBarStyle}
                    >
                    </div>
                </div>
            </>
        );
    }
}

ScrollProgress.propTypes = {
    minProgressTop: datatype.number,
    progressColor: datatype.string,
    progressBarColor: datatype.string,
    width: datatype.string,
    height: datatype.string,
}

export default ScrollProgress;