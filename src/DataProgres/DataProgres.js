import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class DataProgres extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Data Progres</h2>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup>
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        );
    }
}

export default DataProgres;