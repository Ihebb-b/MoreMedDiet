import React,{ useEffect, useState } from 'react'
import { Link,useNavigate,useParams ,NavLink,useSearchParams} from "react-router-dom"
import axios from 'axios'
import './Dashboard.css'

import { Modal, Button } from 'react-bootstrap';
import Navbar from '../Page/Navbar';
import Footer from '../Page/Footer';
import { Select } from "antd";
import Sidebar from '../Page/Sidebar';
import Header from '../Page/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faHamburger, faPizzaSlice, faIceCream } from '@fortawesome/free-solid-svg-icons';
import { faStar, faTrophy, faMedal, faCrown, faThumbsUp, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart, faBox, faReceipt, faClipboardList, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faUser, faUsers, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign, faCoins,  faChartLine, faChartBar,  faStore } from '@fortawesome/free-solid-svg-icons';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register required components for Chart.js
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
export default function Dashboard({page}) {
 
  const [currentDate, setCurrentDate] = useState({
    day: '',
    month: '',
    year: ''
  });

  useEffect(() => {
    const date = new Date();
    const day = date.getDate(); // Get day of the month (1-31)
    const month = date.toLocaleString('en-US', { month: 'long' }); // Get full month name in English
    const year = date.getFullYear(); // Get full year

    setCurrentDate({
      day,
      month,
      year
    });
  }, []);

  const [isOpen, setIsOpen] = useState(true);

  const toggleOppen = () => {
    setIsOpen(!isOpen);
  };

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [300, 500, 700, 400, 600, 800],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += `$${context.parsed.y}`;
            }
            return label;
          },
        },
      },
    },
  };

  // Example statistics
  const totalSales = data.datasets[0].data.reduce((acc, curr) => acc + curr, 0);
  const averageSales = totalSales / data.labels.length;


  const recipes = [
    { id: 1, name: 'Spaghetti Carbonara', views: 1200 },
    { id: 2, name: 'Chicken Alfredo', views: 950 },
    { id: 3, name: 'Beef Stroganoff', views: 800 },
    { id: 4, name: 'Vegetable Stir Fry', views: 720 },
    { id: 5, name: 'Classic Lasagna', views: 670 },
    { id: 6, name: 'Grilled Salmon', views: 600 },
  ];
  const topRecipes = recipes
  .sort((a, b) => b.views - a.views)
  .slice(0, 5);

// Data for the chart
const chartData = {
  labels: topRecipes.map(recipe => recipe.name),
  datasets: [
    {
      label: 'Views',
      data: topRecipes.map(recipe => recipe.views),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

// Options for the chart
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label += `${context.parsed.y} views`;
          }
          return label;
        },
      },
    },
  },
};

  return(
    <>
   
   <div className="wrapper backdash " >
 
    
   <Sidebar page="dashboard"/>
 
  <div class="right"> 
   <div class="app-container">
  <div class="app-header">
  <div class="app-header-left">
      <p class="app-name" >NFT</p>
    
    </div>
    <div class="app-header-right">
      <Header/>
    </div>
    <button class="messages-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
    </button>
  </div>
  <div class="app-content">
   
    <div class="projects-section">
      <div class="projects-section-header">
        <p>Dashboard</p>
        <p class="time">{currentDate.day} {currentDate.month}, {currentDate.year}</p>
      </div>
      <div class="projects-section-line" >
        <div class="projects-status">
         
        </div>
        <div class="view-actions">
          <button class={`view-btn list-view ${isOpen ? 'active' : ''}`} onClick={toggleOppen } title="List View">
            <i class="fa fa-line-chart fa-lg"></i>
          </button>
          <button class={`view-btn grid-view ${!isOpen ? 'active' : ''}`} onClick={toggleOppen }  title="Grid View">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" /></svg>
          </button>
        </div>
      </div>
      {!isOpen&&
      <div class="project-boxes jsGridView">
        <div class="project-box-wrapper">
          <div class="project-box" style={{backgroundColor: "#fee4cb"}}>
            <div class="project-box-header">
              <span></span>
              <div class="more-wrapper">
                <button class="project-btn-more">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" /></svg>
                </button>
          </div>
        </div>
        <div class="project-box-content-header">
          <div class="row">
            <div class="col-8">
               <p class="box-content-header">Total Recipes</p>
               <p class="box-content-subheader">9</p>
               </div>
            <div class="col-4" >
            <FontAwesomeIcon icon={faReceipt} size="4x" />

            </div>
          </div>
        </div>
        <div class="box-progress-wrapper">
         
        </div>
        <div class="project-box-footer">
          <div class="participants">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant"/>
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant"/>
            <button class="add-participant" style= {{color: "#ff942e"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div class="days-left" style={{color:"#ff942e"}}>
             Since last month
          </div>
        </div>
      </div>
    </div>
   
    <div class="project-box-wrapper">
      <div class="project-box">
        <div class="project-box-header">
          <span></span>
          <div class="more-wrapper">
            <button class="project-btn-more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" /></svg>
            </button>
          </div>
        </div>
        <div class="project-box-content-header">
        <div class="row">
            <div class="col-8">
               <p class="box-content-header">Best Recipes</p>
               <p class="box-content-subheader">2</p>
               </div>
            <div class="col-4" >
            <FontAwesomeIcon icon={faTrophy} size="4x" />

            </div>
          </div>
        </div>
        <div class="box-progress-wrapper">
        
        </div>
        <div class="project-box-footer">
          <div class="participants">
            <img src="https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant"/>
            <img src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80" alt="participant"/>
            <button class="add-participant" style={{color: "#096c86"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div class="days-left" style={{color: "#096c86"}}>
          Since last month
          </div>
        </div>
      </div>
    </div>
   
    <div class="project-box-wrapper">
      <div class="project-box" style={{backgroundColor: "#c8f7dc"}}>
        <div class="project-box-header">
          <span></span>
          <div class="more-wrapper">
            <button class="project-btn-more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" /></svg>
            </button>
          </div>
        </div>

        <div class="project-box-content-header">
        <div class="row">
            <div class="col-8">
               <p class="box-content-header">Total Orders</p>
               <p class="box-content-subheader">100</p>
               </div>
            <div class="col-4" >
            <FontAwesomeIcon icon={faShoppingCart} size="4x" />

            </div>
          </div>
        </div>
        <div class="box-progress-wrapper">
        
        </div>
        <div class="project-box-footer">
          <div class="participants">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant"/>
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant"/>
            <button class="add-participant" style={{color: "#34c471"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div class="days-left" style={{color: "#34c471"}}>
            2 Days Left
          </div>
        </div>
      </div>
    </div>

    <div class="project-box-wrapper">
      <div class="project-box" style={{backgroundColor: "#d5deff"}}>
        <div class="project-box-header">
          <span></span>
          <div class="more-wrapper">
            <button class="project-btn-more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" /></svg>
            </button>
          </div>
        </div>

        <div class="project-box-content-header">
        <div class="row">
            <div class="col-8">
               <p class="box-content-header">Sales Last Month</p>
               <p class="box-content-subheader">$ 550.00</p>
               </div>
            <div class="col-4" >
            <FontAwesomeIcon icon={faDollarSign} size="4x" />

            </div>
          </div>
        </div>
        <div class="box-progress-wrapper">
        
        </div>
        <div class="project-box-footer">
          <div class="participants">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant"/>
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant"/>
            <button class="add-participant" style={{color: "#34c471"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div class="days-left" style={{color: "#34c471"}}>
          Since last month
          </div>
        </div>
      </div>
    </div>
    
    <div class="project-box-wrapper">
      <div class="project-box" style={{backgroundColor: "#ffd3e2"}}>
        <div class="project-box-header">
          <span></span>
          <div class="more-wrapper">
            <button class="project-btn-more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" /></svg>
            </button>
          </div>
        </div>

        <div class="project-box-content-header">
        <div class="row">
            <div class="col-8">
               <p class="box-content-header">Clients</p>
               <p class="box-content-subheader">50</p>
               </div>
            <div class="col-4" >
            <FontAwesomeIcon icon={faUsers} size="4x" />

            </div>
          </div>
        </div>
        <div class="box-progress-wrapper">
        
        </div>
        <div class="project-box-footer">
          <div class="participants">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant"/>
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant"/>
            <button class="add-participant" style={{color: "#34c471"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div class="days-left" style={{color: "#34c471"}}>
            2 Days Left
          </div>
        </div>
      </div>
    </div>
   
   
    <div class="project-box-wrapper">
      <div class="project-box" style={{backgroundColor: "#e9e7fd"}}>
        <div class="project-box-header">
          <span></span>
          <div class="more-wrapper">
            <button class="project-btn-more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" /></svg>
            </button>
          </div>
        </div>

        <div class="project-box-content-header">
        <div class="row">
            <div class="col-8">
               <p class="box-content-header">Total Views</p>
               <p class="box-content-subheader">200</p>
               </div>
            <div class="col-4" >
            <FontAwesomeIcon icon={faEye} size="4x" />

            </div>
          </div>
        </div>
        <div class="box-progress-wrapper">
        
        </div>
        <div class="project-box-footer">
          <div class="participants">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant"/>
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant"/>
            <button class="add-participant" style={{color: "#34c471"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div class="days-left" style={{color: "#34c471"}}>
            2 Days Left
          </div>
        </div>
      </div>
    </div>

   
  </div>}
  {isOpen&&
   <div class=" app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
   <div class="">
       
       
              <div class="app-main__outer">
               <div class="app-main__inner">
                        



                        
                   <div class="row">
                       <div class="col-md-12 col-lg-6">
                           <div class="mb-3 card">
                               <div class="card-header-tab card-header-tab-animation card-header">
                                   <div class="card-header-title">
                                       <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                                       Sales Report
                                   </div>
                                   <ul class="nav">
                                       <li class="nav-item"><a href="javascript:void(0);" class="active nav-link">Last</a></li>
                                       <li class="nav-item"><a href="javascript:void(0);" class="nav-link second-tab-toggle">Current</a></li>
                                   </ul>
                               </div>
                               <div class="card-body">
                                   <div class="tab-content">
                                       <div class="tab-pane fade show active" id="tabs-eg-77">
                                           <div class="card mb-3 widget-chart widget-chart2 text-left w-100">
                                               <div class="widget-chat-wrapper-outer">
                                                   <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                                   <div style={{ padding: '20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Bar data={data} options={options} />
      </div>
    
    </div>                                                   </div>
                                               </div>
                                           </div>
                                           <h6 class="text-muted text-uppercase font-size-md opacity-5 font-weight-normal" style={{textAlign:"left"}}>Statistics</h6>
                                           <div class="scroll-area-sm">
                                               <div class="scrollbar-container">
                                                   <ul class="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                                       <li class="list-group-item">
                                                           <div class="widget-content p-0">
                                                               <div class="widget-content-wrapper">
                                                                   <div class="widget-content-left mr-3">
                                                                       <img width="42" class="rounded-circle" src="assets/images/avatars/9.jpg" alt=""/>
                                                                   </div>
                                                                   <div class="widget-content-left">
                                                                       <div class="widget-heading">Total Sales</div>
                                                                   </div>
                                                                   <div class="widget-content-right">
                                                                       <div class="font-size-xlg text-muted">
                                                                           <small class="opacity-5 pr-1">$</small>
                                                                           <span>{totalSales}</span>
                                                                           <small class="text-warning pl-2">
                                                                               <i class="fa fa-dot-circle"></i>
                                                                           </small>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </li>
                                                       
                                                       <li class="list-group-item">
                                                           <div class="widget-content p-0">
                                                               <div class="widget-content-wrapper">
                                                                   <div class="widget-content-left mr-3">
                                                                       <img width="42" class="rounded-circle" src="assets/images/avatars/4.jpg" alt=""/>
                                                                   </div>
                                                                   <div class="widget-content-left">
                                                                       <div class="widget-heading">Average Sales per Month</div>
                                                                   </div>
                                                                   <div class="widget-content-right">
                                                                       <div class="font-size-xlg text-muted">
                                                                           <small class="opacity-5 pr-1">$</small>
                                                                           <span>{averageSales.toFixed(2)}</span>
                                                                           <small class="text-warning pl-2">
                                                                               <i class="fa fa-dot-circle"></i>
                                                                           </small>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </li>
                                                      
                                                   </ul>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="col-md-12 col-lg-6">
                           <div class="mb-3 card">
                               <div class="card-header-tab card-header">
                                   <div class="card-header-title">
                                       <i class="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                       Top 5 Recipes by Views
                                   </div>
                                   <div class="btn-actions-pane-right">
                                      
                                   </div>
                               </div>
                               <div class="tab-content">
                                   <div class="tab-pane fade active show" id="tab-eg-55">
                                       <div class="widget-chart p-3">
                                       <div class="card mb-3 widget-chart widget-chart2 text-left w-100">
                                               <div class="widget-chat-wrapper-outer">
                                                   <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                           <div style={{height: "350px"}}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
     
                                          </div>  </div>  </div>  </div>
                                         
                                     
                                      
    <h6 class="text-muted text-uppercase font-size-md opacity-5 font-weight-normal" style={{textAlign:"left"}}>Top Recipes List</h6>
                                           <div class="scroll-area-sm">
                                               <div class="scrollbar-container">
                                                   <ul class="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                                   {topRecipes.map(recipe => (
                                                       <li class="list-group-item">
                                                           <div class="widget-content p-0">
                                                               <div class="widget-content-wrapper">
                                                                   <div class="widget-content-left mr-3">
                                                                       <img width="42" class="rounded-circle" src="assets/images/avatars/9.jpg" alt=""/>
                                                                   </div>
                                                                   <div class="widget-content-left">
                                                                       <div class="widget-heading">{recipe.name}</div>
                                                                   </div>
                                                                   <div class="widget-content-right">
                                                                       <div class="font-size-xlg text-muted">
                                                                           <small class="opacity-5 pr-1">{recipe.views}</small>
                                                                           <span>views</span>
                                                                           <small class="text-warning pl-2">
                                                                               <i class="fa fa-dot-circle"></i>
                                                                           </small>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </li>))}
                                                       
                                                     
                                                      
                                                   </ul>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                  
                  
                   
                  
               </div>    </div>
   </div>
</div>

  }
</div>






</div>
</div>
    </div>
    </div>
  
   </>
)
} 

  

