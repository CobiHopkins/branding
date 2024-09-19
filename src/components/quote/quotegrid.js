import React from 'react';
import { Row, Col } from 'antd';

class QuoteGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {/* Create a quote carousel component separately and import as done with project Grid */}
                <Row type='flex' justify='center' style={{ minHeight: 600, backgroundColor: '#F33A6A', padding: 20}}>
                    <Col style={{ alignSelf: 'center', maxWidth: 500, color: '#fff', margin: 20}}>
                        <h2 style={{color: '#fff', fontSize: '30px'}}>Sometimes it is the people no one can imagine anything of who do the things no on can imagine.</h2>
                        <p>- The Imitation Game</p>
                    </Col>
                    <Col style={{ alignSelf: 'center', maxWidth: 500, color: '#fff' }}>
                        <h2 style={{color: '#fff', fontSize: '30px'}}>I don't need sleep, I need answers. I need to determine where in this swamp of unbalanced formulas squatteth the toad of truth.</h2>
                        <p>- Sheldon Cooper</p>
                    </Col>
                </Row>
                <Row type='flex' justify='center' style={{ minHeight: 600, backgroundColor: '#E6E6E6', padding: 20}}>
                    <Col style={{ alignSelf: 'center'}}>
                        <h1 type='flex' justify='center'>My Projects</h1>
                        <ProjectGrid />
                    </Col>
                </Row>
            </>
        )
    }
}