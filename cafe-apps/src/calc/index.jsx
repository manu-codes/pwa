import React from 'react';
import { Card, CardHeader, CardActions, } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Container from '../layout/grid/container';
import Row from '../layout/grid/row';
import Col from '../layout/grid/col'
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {
        //const { text } = this.state;
        return <Card style={{ height: '100%' }}>
            <CardHeader
                title="Calculator"
            />
            <CardActions>
                <Container>
                    <Row>
                        <Col className='col-xs-12'>
                            <TextField fullWidth
                                style={{ textAlign: 'center' }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-xs-3 '>
                            <RaisedButton primary={true} label='AC' fullWidth />
                        </Col>
                        <Col className='col-xs-3'>

                            <RaisedButton secondary={true} label='C' fullWidth />
                        </Col>
                        <Col className='col-xs-3'>
                            <RaisedButton secondary={true} label='/' fullWidth />
                        </Col>
                        <Col className='col-xs-3'>
                            <RaisedButton secondary={true} label='X' fullWidth />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-xs-3 '>
                            <RaisedButton secondary={true} label='7' fullWidth />
                        </Col>
                        <Col className='col-xs-3'>

                            <RaisedButton secondary={true} label='8' fullWidth />
                        </Col>
                        <Col className='col-xs-3'>
                            <RaisedButton secondary={true} label='9' fullWidth />
                        </Col>
                        <Col className='col-xs-3'>
                            <RaisedButton secondary={true} label='-' fullWidth />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-xs-3 '>
                            <RaisedButton secondary={true} label='4' fullWidth />
                        </Col>
                        <Col className='col-xs-3'>
                            <RaisedButton secondary={true} label='5' fullWidth />
                        </Col>
                        <Col className='col-xs-3'>
                            <RaisedButton secondary={true} label='6' fullWidth />
                        </Col>
                        <Col className='col-xs-3'>
                            <RaisedButton secondary={true} label='+' fullWidth />
                        </Col>
                    </Row>


                    <Row>
                        <Col className='col-xs-12 ' nopad>
                        <Row>
                            <Col className='col-xs-3 '>
                                <RaisedButton secondary={true} label='1' fullWidth />
                            </Col>
                            <Col className='col-xs-3'>
                                <RaisedButton secondary={true} label='2' fullWidth />
                            </Col>
                            <Col className='col-xs-3'>
                                <RaisedButton secondary={true} label='3' fullWidth />
                            </Col>
                            </Row>
                        </Col>
                        <Col className='col-xs-12 ' nopad>
                        <Row>
                            <Col className='col-xs-3 '>
                                <RaisedButton secondary={true} label='%' fullWidth />
                            </Col>
                            <Col className='col-xs-3'>
                                <RaisedButton secondary={true} label='0' fullWidth />
                            </Col>
                            <Col className='col-xs-3'>
                                <RaisedButton secondary={true} label='.' fullWidth />
                            </Col>

                        </Row>
                        </Col>
                        {/* <Col className='col-xs-3 ' style={{ height: '100%' }}>
                            <RaisedButton secondary={true} label='=' fullWidth />
                        </Col> */}
                    </Row>







                </Container>
            </CardActions>
        </Card>
    }
}
export default Calculator;