import React, { Component } from 'react';

class Footer extends Component {
    render () {
        return (
            <footer className="footer">
                <ul>
                    <li className="priv"><a href="#n">공지사항</a></li>
                    <li className="priv"><a href="#n">이용약관</a></li>
                    <li className="priv"><a href="#n">개인정보처리방침</a></li>
                    {/*<li className="em_bt"><a href="#n">이메일주소무단수집거부</a></li>*/}
                </ul>
                <div className="ft_p">
                    <div>
                        <div>
                            <span style={{fontWeight:"bold"}}>핀조잉(주)</span>
                        </div>
                        <div>
                            <span>사업자등록번호 : 000-00-0000</span>
                            <span>대표 : 한영민</span>

                        </div>
                        <div>
                            <span>주소 : 서울시 양천구</span>
                        </div>
                    </div>
                </div>
                <p>&copy; PnJoying Corp. ALL RIGHTS RESERVED.</p>
            </footer>
        );
    }
}

export default Footer;