import React from 'react';
import { Link } from 'react-router-dom';

const OpenJobs = () => {
  return (
    <>
      <section id='open-positions' class='open-jobs ptb-120'>
        <div class='container'>
          <div class='row align-items-center justify-content-between'>
            <di v class='col-lg-4 col-md-12'>
              <div class='section-heading'>
                <h4 class='h5 text-primary'>Our Jobs</h4>
                <h2>Current Available Positions at Quiety</h2>
              </div>
            </di>
            <div class='col-lg-7 col-md-12'>
              <p>
                Phosfluorescently disintermediate revolutionary paradigms before
                enabled interfaces. Dynamically transition skills vis-a-vis
                virtual customer service via impactful partnerships with
                technically sound paradigms with cutting-edge initiatives.{' '}
              </p>
            </div>
          </div>
          <div class='row justify-content-center'>
            <div class='col-lg-6 col-md-12'>
              <Link
                to='/career-single'
                class='text-decoration-none mt-4 mt-xl-0 mt-lg-0 single-open-job p-5 bg-dark text-white d-block rounded-custom'
              >
                <div class='d-flex justify-content-between align-items-center'>
                  <span class='job-time h-6 mb-2'>
                    <i class='far fa-briefcase me-2'></i>{' '}
                    <strong>Remote - Full Time</strong>
                  </span>
                  <span class='badge px-3 py-2 bg-custom-light rounded-pill small'>
                    Developer
                  </span>
                </div>
                <h3 class='h5'>Jr Frontend Developer</h3>
                <ul class='job-info-list list-inline list-unstyled text-muted'>
                  <li class='list-inline-item'>
                    <span class='far fa-house-building me-1'></span> Google
                  </li>
                  <li class='list-inline-item'>
                    <span class='far fa-map-marker-alt me-1'></span> London, UK
                  </li>
                  <li class='list-inline-item'>
                    <span class='far fa-wallet me-1'></span> $35k - $45k
                  </li>
                </ul>
                <div class='btn btn-outline-light btn-sm d-inline-block mt-4'>
                  Apply Now
                </div>
              </Link>
            </div>
            <div class='col-lg-6 col-md-12'>
              <Link
                to='/career-single'
                class='text-decoration-none mt-4 mt-xl-0 mt-lg-0 single-open-job p-5 bg-dark text-white d-block rounded-custom'
              >
                <div class='d-flex justify-content-between align-items-center'>
                  <span class='job-time h-6 mb-2'>
                    <i class='far fa-briefcase me-2'></i>{' '}
                    <strong>Remote - Full Time</strong>
                  </span>
                  <span class='badge px-3 py-2 bg-custom-light rounded-pill small'>
                    Designer
                  </span>
                </div>
                <h3 class='h5'>UI/UX and Product Designer</h3>
                <ul class='job-info-list list-inline list-unstyled text-muted'>
                  <li class='list-inline-item'>
                    <span class='far fa-house-building me-1'></span> Figma
                  </li>
                  <li class='list-inline-item'>
                    <span class='far fa-map-marker-alt me-1'></span> San
                    Francissco
                  </li>
                  <li class='list-inline-item'>
                    <span class='far fa-wallet me-1'></span> $25k - $35k
                  </li>
                </ul>
                <div class='btn btn-outline-light btn-sm d-inline-block mt-4'>
                  Apply Now
                </div>
              </Link>
            </div>
            <div class='col-lg-6 col-md-12'>
              <Link
                to='/career-single'
                class='text-decoration-none mt-4 single-open-job p-5 bg-dark text-white d-block rounded-custom'
              >
                <div class='d-flex justify-content-between align-items-center'>
                  <span class='job-time h-6 mb-2'>
                    <i class='far fa-briefcase me-2'></i>{' '}
                    <strong>Full Time</strong>
                  </span>
                  <span class='badge px-3 py-2 bg-custom-light rounded-pill small'>
                    Manager
                  </span>
                </div>
                <h3 class='h5'>Senior Office Manager</h3>
                <ul class='job-info-list list-inline list-unstyled text-muted'>
                  <li class='list-inline-item'>
                    <span class='far fa-house-building me-1'></span> Dribble
                  </li>
                  <li class='list-inline-item'>
                    <span class='far fa-map-marker-alt me-1'></span> California
                  </li>
                  <li class='list-inline-item'>
                    <span class='far fa-wallet me-1'></span> $55k - $62k
                  </li>
                </ul>
                <div class='btn btn-outline-light btn-sm d-inline-block mt-4'>
                  Apply Now
                </div>
              </Link>
            </div>
            <div class='col-lg-6 col-md-12'>
              <Link
                to='/career-single'
                class='text-decoration-none mt-4 single-open-job p-5 bg-dark text-white d-block rounded-custom'
              >
                <div class='d-flex justify-content-between align-items-center'>
                  <span class='job-time h-6 mb-2'>
                    <i class='far fa-briefcase me-2'></i>{' '}
                    <strong>Remote</strong>
                  </span>
                  <span class='badge px-3 py-2 bg-custom-light rounded-pill small'>
                    Developer
                  </span>
                </div>
                <h3 class='h5'>Senior Backend Developer</h3>
                <ul class='job-info-list list-inline list-unstyled text-muted'>
                  <li class='list-inline-item'>
                    <span class='far fa-house-building me-1'></span> Slack
                  </li>
                  <li class='list-inline-item'>
                    <span class='far fa-map-marker-alt me-1'></span> United
                    State US
                  </li>
                  <li class='list-inline-item'>
                    <span class='far fa-wallet me-1'></span> $55k - $62k
                  </li>
                </ul>
                <div class='btn btn-outline-light btn-sm d-inline-block mt-4'>
                  Apply Now
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OpenJobs;
