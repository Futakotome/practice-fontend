import React from 'react'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'


class Summary extends React.Component {
    render() {
        return (
            <div>
                <CustomBreadcrumb arr={['项目', '汇总']}/>
            </div>
        )
    }
}

const styles = {
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        width: '17%'
    },
    icon: {
        fontSize: 18,
        marginBottom: 10
    },
    affixBox: {
        position: 'absolute',
        top: 100,
        right: 50,
        with: 170
    }
}

export default Summary