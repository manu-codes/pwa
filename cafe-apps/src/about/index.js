import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

class About extends React.Component {
    render() {
        return <Card style={{ height: '100%' }}>
            <CardHeader
                title="About Cafe works"
                subtitle="Version - Beta"
            />
            <CardText>
                Brewed the apps while we are having a cup of coffee! Now you take a cup of coffee with our apps..
            </CardText>
        </Card>
    }
}
export default About;