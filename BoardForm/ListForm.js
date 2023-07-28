import React, { Component } from 'react';
import { Card, CardBody, CardFooter, CardText, CardTitle } from "reactstrap";
import { FaBookReader, FaPenAlt } from "react-icons/fa";
import '../../css/CardBoard.css';
import '../../css/CardSearch.css';

import datatype from 'prop-types';
import { VscAccount } from "react-icons/vsc";

class ListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div></div>
        );
    }
}

class CardListFrom extends Component {
    render() {
        let {
            Title, Content, Writer, ReadCnt, WriteDate
        } = this.props;
        return (
            <Card className="card_board">
                <CardBody>
                    <CardTitle className="card_title"><h2>{this.props.Title}</h2></CardTitle>
                    <CardText className="card_content">
                        {this.props.Content}
                    </CardText>
                    <CardFooter className="card_footer">
                        <h3><VscAccount size={20} style={{marginBottom: "-4px", paddingRight: "10px"}}/>{this.props.Writer}</h3>
                        <div className="write_info">
                            <div className="read_cnt"><FaBookReader className="icon" />{this.props.ReadCnt}</div>
                            <div className="write_date"><FaPenAlt className="icon" />{this.props.WriteDate}</div>
                        </div>
                        <div className="clear"></div>
                    </CardFooter>
                </CardBody>
            </Card>
        );
    }
}

CardListFrom.propTypes ={
    Title: datatype.string,
    Content: datatype.string,
    Writer: datatype.string,
    ReadCnt: datatype.number,
    WriteDate: datatype.string,
}

export default ListForm;
export { CardListFrom };