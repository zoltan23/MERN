import React from 'react'
import Card from '../reusable-components/Card'
import data from '../../../assets/portfolio_data'

export default function Portfolio() {

    return (
        <div className="row mt-3">
            {data.map(item => (
                <div className="col-lg-4 col-md-6 col-xl-3"><p>
                    <Card link={item.link} description={item.description} /></p>
                </div>
            ))}
        </div>
    )
}
