import React from 'react';
import Card from './Card'


export default function Home() {

    return (
        <div className="row">
               <Card link = {'link1'} linkName = {'link'} />
               <Card />
               <Card />
        </div>
    )
}
