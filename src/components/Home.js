import React from 'react';
import Card from './Card';
import './Home.css';


export default function Home() {

    return (
        <div className="row">
               <Card link = {'link1'} linkName = {'linkName1'} />
               <Card link = {'link2'} linkName = {'linkName2'} />
               <Card link = {'link3'} linkName = {'linkName3'} />      
               <Card link = {'link3'} linkName = {'linkName3'} />      
               <Card link = {'link3'} linkName = {'linkName3'} />      
               <Card link = {'link3'} linkName = {'linkName3'} />      
               <Card link = {'link3'} linkName = {'linkName3'} />      
        </div>
    )
}
