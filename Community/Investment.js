import React, { Component, useEffect } from 'react';
import "../../css/Sub.css";
import "../../css/Investment.css";
import { Button, Card, CardBody, Input, Label, Table } from "reactstrap";
import { GrDocumentUpload } from "react-icons/gr";

class Investment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileValue: "첨부파일",
            tmpSaveButtonText: "임시저장",
            saveButtonText: "문의하기",
            tmpSaveData: {
                iven_title: "",
                iven_mobile: "",
                iven_email: "",
                iven_contents: "",
            }
        }
    }

    onTmpSave = () => {
        this.setState({tmpSaveButtonText: "저장중..."});
    }

    onSave = () => {
        this.setState({saveButtonText: "저장중..."});
    }

    onTmpDataSet = ( tmpData ) => {
        let tmpSaveData = Object.assign(this.state.tmpSaveData, tmpData);
        this.setState({
            tmpSaveData
        })
    }


    render() {
        return (
            <div className="container">
                <div className="hearder">
                    <span>{this.props.OneDepth}</span>
                    <span>{this.props.TwoDepth}</span>
                </div>
                <div className="contents">
                    <Card className="card_write">
                        <CardBody>
                            <Table>
                                <colgroup>
                                    <col width="200px" />
                                    <col width="600px" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th><Label for="iven_title">제목</Label></th>
                                        <td>
                                            <Input
                                                type="text"
                                                name="title"
                                                id="iven_title"
                                                value={this.state.tmpSaveData.iven_title}
                                                onChange={e => this.onTmpDataSet({iven_title: e.target.value})}
                                                placeholder="제목을 입력해 주세요"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th><Label for="iven_mobile">연락처</Label></th>
                                        <td>
                                            <Input
                                                type="number"
                                                name="mobile"
                                                id="iven_mobile"
                                                value={this.state.tmpSaveData.iven_mobile}
                                                onChange={e => this.onTmpDataSet({iven_mobile: e.target.value})}
                                                placeholder="연락처를 입력해 주세요(숫자만 가능 최대 11자리)"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th><Label for="iven_email">이메일</Label></th>
                                        <td>
                                            <Input
                                                type="email"
                                                name="email"
                                                id="iven_email"
                                                value={this.state.tmpSaveData.iven_email}
                                                onChange={e => this.onTmpDataSet({iven_email: e.target.value})}
                                                placeholder="이메일을 입력해 주세요"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th><Label for="iven_contents">내용</Label></th>
                                        <td>
                                            <Input
                                                type="textarea"
                                                name="iven_contents"
                                                id="iven_contents"
                                                value={this.state.tmpSaveData.iven_contents}
                                                onChange={e => this.onTmpDataSet({iven_contents: e.target.value})}
                                                rows="10"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th><Label for="iven_attach">첨부파일</Label></th>
                                        <td>
                                            {/*<Input type="text" id="attach_model" disabled placeholder="첨부파일" />*/}
                                            <Label for="iven_attach" id="attach_model"><GrDocumentUpload style={{marginBottom: "-3px", marginRight: "4px", opacity:"0.2"}} />{this.state.fileValue}</Label>
                                            <Input type="file" name="attach" id="iven_attach" placeholder="첨부파일" />
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th colSpan={"2"}>
                                            <Button onClick={this.onTmpSave}>{this.state.tmpSaveButtonText}</Button>
                                            <Button onClick={this.onSave}>{this.state.saveButtonText}</Button>
                                        </th>
                                    </tr>
                                </tfoot>
                            </Table>


                            {/*<CardFooter className="card_footer">*/}

                            {/*</CardFooter>*/}
                        </CardBody>
                    </Card>
                </div>
            </div>

        );
    }
}

export default Investment;