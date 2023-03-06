import { Component } from "react";
import { Container } from "react-bootstrap";
import "../css/Home.css";
import { Navigation } from "./Navigation";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export function CoursePage() {

    return (
        
        <>
            <Navigation></Navigation>
            <div class="card">
                <div class="card-header">
                  {/* {coursedetails.coursename} */}
                </div>
                <div class="card-body">
                    <h5 class="card-title"> as Special title treatment</h5>
                    <p class="card-text">With supporting text belowa natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
}